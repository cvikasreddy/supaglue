import { CommonObjectType, ProviderCategory } from '@supaglue/types';
import { CRMCommonObjectType } from '@supaglue/types/crm';
import { EngagementCommonObjectType } from '@supaglue/types/engagement';
import {
  toSnakecasedKeysCrmAccount,
  toSnakecasedKeysCrmContact,
  toSnakecasedKeysCrmLead,
  toSnakecasedKeysCrmOpportunity,
  toSnakecasedKeysCrmUser,
} from '../mappers/crm';
import {
  toSnakecasedKeysEngagementContact,
  toSnakecasedKeysEngagementUser,
  toSnakecasedKeysMailbox,
  toSnakecasedKeysSequence,
  toSnakecasedKeysSequenceState,
} from '../mappers/engagement';

export const getSnakecasedKeysMapper = (category: ProviderCategory, commonObjectType: CommonObjectType) => {
  if (category === 'crm') {
    return snakecasedKeysMapperByCommonObjectType.crm[commonObjectType as CRMCommonObjectType];
  }
  return snakecasedKeysMapperByCommonObjectType.engagement[commonObjectType as EngagementCommonObjectType];
};

const snakecasedKeysMapperByCommonObjectType: {
  crm: Record<CRMCommonObjectType, (obj: any) => any>;
  engagement: Record<EngagementCommonObjectType, (obj: any) => any>;
} = {
  crm: {
    account: toSnakecasedKeysCrmAccount,
    contact: toSnakecasedKeysCrmContact,
    lead: toSnakecasedKeysCrmLead,
    opportunity: toSnakecasedKeysCrmOpportunity,
    user: toSnakecasedKeysCrmUser,
  },
  engagement: {
    contact: toSnakecasedKeysEngagementContact,
    mailbox: toSnakecasedKeysMailbox,
    sequence: toSnakecasedKeysSequence,
    sequence_state: toSnakecasedKeysSequenceState,
    user: toSnakecasedKeysEngagementUser,
  },
};
