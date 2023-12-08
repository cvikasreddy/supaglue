/* eslint-disable @typescript-eslint/no-explicit-any */
import { cryptoHash, decrypt } from '@supaglue/core/lib';
import prisma from '@supaglue/db';
import { TRPCError, initTRPC } from '@trpc/server';
import type { OpenApiMeta } from '@usevenice/trpc-openapi';
import { z } from 'zod';
import { extendZodWithOpenApi } from 'zod-openapi';
import { createApolloProvider } from './providers/apollo';
import type { EngagementProvider } from './routers/engagement';

extendZodWithOpenApi(z);

export { z };

export function createContext(opts: {
  headers: { 'x-api-key': string; 'x-customer-id': string; 'x-provider-name': string };
}) {
  return { ...opts, prisma };
}

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
export const t = initTRPC
  .context<{ headers: { 'x-api-key': string; 'x-customer-id': string; 'x-provider-name': string } }>()
  .meta<OpenApiMeta>()
  .create();

export const authedProcedure = t.procedure.use(async ({ next, ctx }) => {
  if (!ctx.headers['x-api-key']) {
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'x-api-key header is required' });
  }
  const { hashed: hashedApiKey } = await cryptoHash(ctx.headers['x-api-key']);
  const applications = await prisma.application.findMany({
    where: { config: { path: ['apiKey'], equals: hashedApiKey } },
  });
  const applicationId = applications[0]?.id;

  if (!applicationId) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: `Can't find application by api key` });
  }

  return next({ ctx: { ...ctx, applicationId } });
});

export const remoteProcedure = authedProcedure.use(async ({ next, ctx }) => {
  const { 'x-customer-id': customerId, 'x-provider-name': providerName } = ctx.headers;
  if (!customerId) {
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'x-customer-id header is required' });
  }
  if (!providerName) {
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'x-provider-name header is required' });
  }

  const conn = await prisma.connection.findFirst({
    where: { customerId: { equals: customerId }, providerName: { equals: providerName } },
  });
  if (!conn) {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: `Can't find connection for customer:${customerId} and provider:${providerName}`,
    });
  }

  const decrypted = JSON.parse(await decrypt(conn.credentials));

  const provider = ((): EngagementProvider => {
    switch (providerName) {
      case 'apollo':
        return createApolloProvider(decrypted);
      default:
        throw new TRPCError({ code: 'NOT_IMPLEMENTED', message: `Provider ${providerName} is not implemented` });
    }
  })();

  return next({ ctx: { ...ctx, provider, providerName, customerId } });
});
export type RemoteProcedureContext = ReturnType<(typeof remoteProcedure)['query']>['_def']['_ctx_out'];

export type MaybePromise<T> = T | Promise<T>;
