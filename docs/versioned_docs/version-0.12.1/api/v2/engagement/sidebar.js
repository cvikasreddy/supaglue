module.exports = [
  { type: 'doc', id: 'api/v2/engagement/supaglue-engagement-api' },
  {
    type: 'category',
    label: 'Contacts',
    link: { type: 'doc', id: 'api/v2/engagement/contacts' },
    collapsed: true,
    items: [
      { type: 'doc', id: 'api/v2/engagement/create-contact', label: 'Create contact', className: 'api-method post' },
      { type: 'doc', id: 'api/v2/engagement/get-contact', label: 'Get contact', className: 'api-method get' },
      { type: 'doc', id: 'api/v2/engagement/update-contact', label: 'Update contact', className: 'api-method patch' },
    ],
  },
  {
    type: 'category',
    label: 'Sequences',
    link: { type: 'doc', id: 'api/v2/engagement/sequences' },
    collapsed: true,
    items: [{ type: 'doc', id: 'api/v2/engagement/get-sequence', label: 'Get sequence', className: 'api-method get' }],
  },
  {
    type: 'category',
    label: 'Sequence States',
    link: { type: 'doc', id: 'api/v2/engagement/sequence-states' },
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'api/v2/engagement/create-sequence-state',
        label: 'Create sequence state',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'api/v2/engagement/get-sequence-state',
        label: 'Get sequence state',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'Users',
    link: { type: 'doc', id: 'api/v2/engagement/users' },
    collapsed: true,
    items: [{ type: 'doc', id: 'api/v2/engagement/get-user', label: 'Get user', className: 'api-method get' }],
  },
  {
    type: 'category',
    label: 'Mailboxes',
    link: { type: 'doc', id: 'api/v2/engagement/mailboxes' },
    collapsed: true,
    items: [{ type: 'doc', id: 'api/v2/engagement/get-mailbox', label: 'Get mailbox', className: 'api-method get' }],
  },
  {
    type: 'category',
    label: 'Passthrough',
    link: { type: 'doc', id: 'api/v2/engagement/passthrough' },
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'api/v2/engagement/send-passthrough-request',
        label: 'Send passthrough request',
        className: 'api-method post',
      },
    ],
  },
];
