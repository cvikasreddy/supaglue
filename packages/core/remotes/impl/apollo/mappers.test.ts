import { describe, expect, it } from '@jest/globals';
import type { ContactCreateParams, ContactUpdateParams } from '@supaglue/types/engagement';
import {
  fromApolloAccountToAccount,
  fromApolloContactToContact,
  fromApolloContactToSequenceStates,
  fromApolloEmailAccountsToMailbox,
  fromApolloSequenceToSequence,
  fromApolloUserToUser,
  getRawAddressString,
  toApolloAccountCreateParams,
  toApolloContactCreateParams,
  toApolloContactUpdateParams,
  toApolloSequenceStateCreateParams,
} from './mappers';

describe('Conversion functions', () => {
  it('should convert Apollo account to account correctly', () => {
    const record = {
      id: '1',
      name: 'Test Company',
      domain: 'testcompany.com',
      owner_id: '1234',
      created_at: '2023-09-12T10:00:00Z',
    };

    const expected = {
      id: '1',
      name: 'Test Company',
      domain: 'testcompany.com',
      ownerId: '1234',
      createdAt: new Date('2023-09-12T10:00:00Z'),
      updatedAt: null,
      lastModifiedAt: new Date('2023-09-12T10:00:00Z'),
      isDeleted: false,
      rawData: record,
    };

    expect(fromApolloAccountToAccount(record)).toEqual(expected);
  });

  it('should convert Apollo contact to contact correctly', () => {
    const record = {
      id: '1',
      first_name: 'John',
      last_name: 'Doe',
      title: 'Engineer',
      street_address: '123 Test St',
      city: 'TestCity',
      state: 'TestState',
      country: 'TestCountry',
      postal_code: '12345',
      email: 'john.doe@example.com',
      phone_numbers: [{ sanitized_number: '123456789', type: 'home' }],
      owner_id: '1234',
      account_id: '5678',
      created_at: '2023-09-12T10:00:00Z',
      updated_at: '2023-09-12T11:00:00Z',
    };

    const expected = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Engineer',
      address: {
        street1: '123 Test St',
        street2: null,
        city: 'TestCity',
        state: 'TestState',
        country: 'TestCountry',
        postalCode: '12345',
      },
      emailAddresses: [
        {
          emailAddress: 'john.doe@example.com',
          emailAddressType: 'primary',
        },
      ],
      phoneNumbers: [
        {
          phoneNumber: '123456789',
          phoneNumberType: 'home',
        },
      ],
      ownerId: '1234',
      accountId: '5678',
      openCount: 0,
      clickCount: 0,
      bouncedCount: 0,
      replyCount: 0,
      createdAt: new Date('2023-09-12T10:00:00Z'),
      updatedAt: new Date('2023-09-12T11:00:00Z'),
      lastModifiedAt: new Date('2023-09-12T11:00:00Z'),
      isDeleted: false,
      rawData: record,
    };

    expect(fromApolloContactToContact(record)).toEqual(expected);
  });

  it('should convert Apollo user to user correctly', () => {
    const record = {
      id: '1',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      created_at: '2023-09-12T10:00:00Z',
    };

    const expected = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      createdAt: new Date('2023-09-12T10:00:00Z'),
      updatedAt: null,
      lastModifiedAt: new Date('2023-09-12T10:00:00Z'),
      isDeleted: false,
      rawData: record,
    };

    expect(fromApolloUserToUser(record)).toEqual(expected);
  });
  it('should convert Apollo sequence to sequence correctly', () => {
    const record = {
      id: '100',
      name: 'Test Sequence',
      active: true,
      num_steps: 3,
      unique_scheduled: 100,
      unique_delivered: 90,
      unique_bounced: 5,
      unique_clicked: 20,
      unique_opened: 70,
      unique_replied: 10,
      unique_demoed: 1,
      bounce_rate: 0.05,
      open_rate: 0.7,
      click_rate: 0.2,
      reply_rate: 0.1,
      spam_blocked_rate: 0.01,
      demo_rate: 0.01,
      created_at: '2023-09-12T10:00:00Z',
      archived: false,
      user_id: '1',
    };

    const expected = {
      id: '100',
      name: 'Test Sequence',
      isEnabled: true,
      numSteps: 3,
      tags: [],
      metrics: {
        uniqueScheduled: 100,
        uniqueDelivered: 90,
        uniqueBounced: 5,
        uniqueClicked: 20,
        uniqueOpened: 70,
        uniqueReplied: 10,
        uniqueDemoed: 1,
        bounceRate: 0.05,
        openRate: 0.7,
        clickRate: 0.2,
        replyRate: 0.1,
        spamBlockedRate: 0.01,
        demoRate: 0.01,
      },
      ownerId: '1',
      createdAt: new Date('2023-09-12T10:00:00Z'),
      updatedAt: null,
      lastModifiedAt: new Date('2023-09-12T10:00:00Z'),
      isDeleted: false,
      rawData: record,
    };
    expect(fromApolloSequenceToSequence(record)).toEqual(expected);
  });

  it('should convert Apollo email accounts to mailbox correctly', () => {
    const record = {
      id: '123',
      user_id: '456',
      email: 'example@example.com',
      last_synced_at: '2023-09-12T10:00:00Z',
    };

    const expected = {
      id: '123',
      userId: '456',
      email: 'example@example.com',
      createdAt: null,
      updatedAt: new Date('2023-09-12T10:00:00Z'),
      lastModifiedAt: new Date('2023-09-12T10:00:00Z'),
      isDeleted: false,
      rawData: record,
    };

    expect(fromApolloEmailAccountsToMailbox(record)).toEqual(expected);
  });

  it('should convert Apollo contact to sequence states correctly', () => {
    const record = {
      id: '123',
      contact_campaign_statuses: [
        {
          id: '1',
          emailer_campaign_id: '2',
          send_email_from_email_account_id: '3',
          added_by_user_id: '4',
          status: 'active',
          added_at: '2023-09-12T10:00:00Z',
        },
      ],
    };

    const expected = [
      {
        id: '1',
        sequenceId: '2',
        contactId: '123',
        mailboxId: '3',
        userId: '4',
        state: 'active',
        createdAt: new Date('2023-09-12T10:00:00Z'),
        updatedAt: null,
        lastModifiedAt: new Date('2023-09-12T10:00:00Z'),
        isDeleted: false,
        rawData: record.contact_campaign_statuses[0],
      },
    ];

    expect(fromApolloContactToSequenceStates(record)).toEqual(expected);
  });
  it('should create raw address string correctly', () => {
    const address = {
      street1: '123 Main St',
      street2: null,
      city: 'Sample City',
      state: 'Sample State',
      postalCode: '12345',
      country: 'Sample Country',
    };

    const expected = '123 Main St, Sample City, Sample State, 12345, Sample Country';

    expect(getRawAddressString(address)).toEqual(expected);
  });

  it('should convert to Apollo account create params correctly', () => {
    const params = {
      name: 'Test Account',
      domain: 'test.com',
    };

    const expected = {
      name: 'Test Account',
      domain: 'test.com',
    };

    expect(toApolloAccountCreateParams(params)).toEqual(expected);
  });

  it('should convert to Apollo contact create params correctly', () => {
    const params: ContactCreateParams = {
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Developer',
      emailAddresses: [{ emailAddress: 'john.doe@example.com', emailAddressType: 'primary' }],
      address: {
        street1: '123 Main St',
        street2: null,
        city: 'Sample City',
        state: 'Sample State',
        postalCode: '12345',
        country: 'Sample Country',
      },
      accountId: '123',
      customFields: {
        field1: 'value1',
      },
    };

    const expected = {
      first_name: 'John',
      last_name: 'Doe',
      title: 'Developer',
      email: 'john.doe@example.com',
      present_raw_address: '123 Main St, Sample City, Sample State, 12345, Sample Country',
      account_id: '123',
      field1: 'value1',
    };

    expect(toApolloContactCreateParams(params)).toEqual(expected);
  });

  it('should convert to Apollo contact update params correctly', () => {
    const params: ContactUpdateParams = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Developer',
      emailAddresses: [{ emailAddress: 'john.doe@example.com', emailAddressType: 'primary' }],
      address: {
        street1: '123 Main St',
        street2: null,
        city: 'Sample City',
        state: 'Sample State',
        postalCode: '12345',
        country: 'Sample Country',
      },
      phoneNumbers: [
        { phoneNumber: '123456789', phoneNumberType: 'work' },
        { phoneNumber: '987654321', phoneNumberType: 'home' },
      ],
      accountId: '123',
      customFields: {
        field1: 'value1',
      },
    };

    const expected = {
      first_name: 'John',
      last_name: 'Doe',
      title: 'Developer',
      email: 'john.doe@example.com',
      present_raw_address: '123 Main St, Sample City, Sample State, 12345, Sample Country',
      corporate_phone: '123456789',
      home_phone: '987654321',
      account_id: '123',
      field1: 'value1',
    };

    expect(toApolloContactUpdateParams(params)).toEqual(expected);
  });

  it('should convert to Apollo sequence state create params correctly', () => {
    const params = {
      contactId: '123',
      sequenceId: '456',
      mailboxId: '789',
      userId: '101',
    };

    const expected = {
      contact_ids: ['123'],
      emailer_campaign_id: '456',
      send_email_from_email_account_id: '789',
      userId: '101',
    };

    expect(toApolloSequenceStateCreateParams(params)).toEqual(expected);
  });
});