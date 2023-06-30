import { DestinationWriter } from '@supaglue/core/destination_writers/base';
import { distinctId } from '@supaglue/core/lib/distinct_identifier';
import { createFieldMappingConfig } from '@supaglue/core/lib/schema';
import type { CrmRemoteClient } from '@supaglue/core/remotes/crm/base';
import type { EngagementRemoteClient } from '@supaglue/core/remotes/engagement/base';
import {
  ConnectionService,
  ProviderService,
  RemoteService,
  SchemaService,
  SyncConfigService,
} from '@supaglue/core/services';
import { DestinationService } from '@supaglue/core/services/destination_service';
import { CRMProvider } from '@supaglue/types';
import type { CRMCommonModelType } from '@supaglue/types/crm';
import type { EngagementCommonModelType } from '@supaglue/types/engagement';
import type { ObjectType } from '@supaglue/types/object_sync';
import { ApplicationFailure, Context } from '@temporalio/activity';
import { pipeline, Readable, Transform } from 'stream';
import { logEvent } from '../lib/analytics';
import { ApplicationService, SyncService } from '../services';

export type SyncRecordsArgs = {
  objectSyncId: string;
  connectionId: string;
  objectType: ObjectType;
  object: string;
  updatedAfterMs?: number;
};

export type SyncRecordsResult = {
  objectSyncId: string;
  connectionId: string;
  objectType: ObjectType;
  object: string;
  maxLastModifiedAtMs: number | null;
  numRecordsSynced: number;
};

export function createSyncRecords(
  connectionService: ConnectionService,
  remoteService: RemoteService,
  destinationService: DestinationService,
  syncService: SyncService,
  syncConfigService: SyncConfigService,
  applicationService: ApplicationService,
  schemaService: SchemaService,
  providerService: ProviderService
) {
  return async function syncRecords({
    objectSyncId,
    connectionId,
    objectType,
    object,
    updatedAfterMs,
  }: SyncRecordsArgs): Promise<SyncRecordsResult> {
    const objectSync = await syncService.getObjectSyncById(objectSyncId);
    const syncConfig = await syncConfigService.getById(objectSync.syncConfigId);
    const connection = await connectionService.getSafeById(connectionId);

    async function writeObjects(writer: DestinationWriter) {
      // TODO: Have better type-safety
      if (client.category() === 'crm') {
        const provider = await providerService.getById<CRMProvider>(connection.providerId);
        if (objectType === 'common') {
          const schemaId = provider.objects?.common?.find((o) => o.name === object)?.schemaId;
          const schema = schemaId ? await schemaService.getById(schemaId) : undefined;
          const customerFieldMapping = connection.schemaMappingsConfig?.commonObjects?.find(
            (o) => o.object === object
          )?.fieldMappings;
          const fieldMappingConfig = createFieldMappingConfig(schema?.config, customerFieldMapping);

          const readable = await (client as CrmRemoteClient).listCommonObjectRecords(
            object as CRMCommonModelType,
            fieldMappingConfig,
            updatedAfter,
            heartbeat
          );
          return await writer.writeCommonModelRecords(
            connection,
            object as CRMCommonModelType,
            toHeartbeatingReadable(readable),
            heartbeat
          );
        } else if (objectType === 'standard') {
          // Find schema / field mapping information
          const schemaId = provider.objects?.standard?.find((o) => o.name === object)?.schemaId;
          const schema = schemaId ? await schemaService.getById(schemaId) : undefined;
          const customerFieldMapping = connection.schemaMappingsConfig?.standardObjects?.find(
            (o) => o.object === object
          )?.fieldMappings;
          const fieldMappingConfig = createFieldMappingConfig(schema?.config, customerFieldMapping);
          const stream = await (client as CrmRemoteClient).listStandardObjectRecords(
            object,
            fieldMappingConfig,
            updatedAfter,
            heartbeat
          );
          return await writer.writeObjectRecords(connection, object, toHeartbeatingReadable(stream), heartbeat);
        } else {
          const stream = await (client as CrmRemoteClient).listCustomObjectRecords(object, updatedAfter, heartbeat);
          return await writer.writeObjectRecords(connection, object, toHeartbeatingReadable(stream), heartbeat);
        }
      } else {
        if (objectType === 'common') {
          const readable = await (client as EngagementRemoteClient).listCommonObjectRecords(
            object as EngagementCommonModelType,
            updatedAfter
          );
          return await writer.writeCommonModelRecords(
            connection,
            object as EngagementCommonModelType,
            toHeartbeatingReadable(readable),
            heartbeat
          );
        }

        throw ApplicationFailure.nonRetryable(`Unsupported object type ${objectType}`);
      }
    }

    const application = await applicationService.getById(connection.applicationId);

    logEvent({
      distinctId: distinctId ?? application.orgId,
      eventName: 'Start Sync',
      syncId: objectSyncId,
      providerName: connection.providerName,
      modelName: object,
    });

    const updatedAfter = updatedAfterMs ? new Date(updatedAfterMs) : undefined;

    const client = await remoteService.getRemoteClient(connectionId);

    const writer = await destinationService.getWriterByDestinationId(syncConfig.destinationId);
    if (!writer) {
      throw ApplicationFailure.nonRetryable(`No destination found for id ${syncConfig.destinationId}`);
    }

    const result = await writeObjects(writer);

    logEvent({
      distinctId: distinctId ?? application.orgId,
      eventName: 'Partially Completed Sync',
      syncId: objectSyncId,
      providerName: connection.providerName,
      modelName: object,
    });

    return {
      objectSyncId: objectSyncId,
      connectionId,
      objectType,
      object,
      maxLastModifiedAtMs: result.maxLastModifiedAt ? result.maxLastModifiedAt.getTime() : null,
      numRecordsSynced: result.numRecords,
    };
  };
}

function toHeartbeatingReadable(readable: Readable): Readable {
  // TODO: While this ensures rescheduling of this activity if the process dies,
  // it does not ensure that we stop the stream processing.
  // We need to include a timeout here to clean up the pipeline when we
  // exceed the heartbeat timeout.
  return pipeline(
    readable,
    new Transform({
      objectMode: true,
      transform: (chunk, encoding, callback) => {
        Context.current().heartbeat();
        try {
          callback(null, chunk);
        } catch (e: any) {
          return callback(e);
        }
      },
    }),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {}
  );
}

function heartbeat() {
  Context.current().heartbeat();
}