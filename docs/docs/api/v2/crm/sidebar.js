module.exports = [
  { type: 'doc', id: 'api/v2/crm/supaglue-crm-api' },
  {
    type: 'category',
    label: 'Accounts',
    link: { type: 'doc', id: 'api/v2/crm/accounts' },
    collapsed: true,
    items: [
      { type: 'doc', id: 'api/v2/crm/create-account', label: 'Create account', className: 'api-method post' },
      { type: 'doc', id: 'api/v2/crm/get-account', label: 'Get account', className: 'api-method get' },
      { type: 'doc', id: 'api/v2/crm/update-account', label: 'Update account', className: 'api-method patch' },
    ],
  },
  {
    type: 'category',
    label: 'Contacts',
    link: { type: 'doc', id: 'api/v2/crm/contacts' },
    collapsed: true,
    items: [
      { type: 'doc', id: 'api/v2/crm/create-contact', label: 'Create contact', className: 'api-method post' },
      { type: 'doc', id: 'api/v2/crm/get-contact', label: 'Get contact', className: 'api-method get' },
      { type: 'doc', id: 'api/v2/crm/update-contact', label: 'Update contact', className: 'api-method patch' },
    ],
  },
  {
    type: 'category',
    label: 'Leads',
    link: { type: 'doc', id: 'api/v2/crm/leads' },
    collapsed: true,
    items: [
      { type: 'doc', id: 'api/v2/crm/create-lead', label: 'Create lead', className: 'api-method post' },
      { type: 'doc', id: 'api/v2/crm/get-lead', label: 'Get lead', className: 'api-method get' },
      { type: 'doc', id: 'api/v2/crm/update-lead', label: 'Update lead', className: 'api-method patch' },
      {
        type: 'doc',
        id: 'api/v2/crm/get-association-types',
        label: 'List associationTypes',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'Opportunities',
    link: { type: 'doc', id: 'api/v2/crm/opportunities' },
    collapsed: true,
    items: [
      { type: 'doc', id: 'api/v2/crm/create-opportunity', label: 'Create opportunity', className: 'api-method post' },
      { type: 'doc', id: 'api/v2/crm/get-opportunity', label: 'Get opportunity', className: 'api-method get' },
      { type: 'doc', id: 'api/v2/crm/update-opportunity', label: 'Update opportunity', className: 'api-method patch' },
    ],
  },
  {
    type: 'category',
    label: 'Users',
    link: { type: 'doc', id: 'api/v2/crm/users' },
    collapsed: true,
    items: [{ type: 'doc', id: 'api/v2/crm/get-user', label: 'Get user', className: 'api-method get' }],
  },
  {
    type: 'category',
    label: 'Passthrough',
    link: { type: 'doc', id: 'api/v2/crm/passthrough' },
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'api/v2/crm/send-passthrough-request',
        label: 'Send passthrough request',
        className: 'api-method post',
      },
    ],
  },
  {
    type: 'category',
    label: 'CustomObjects',
    link: { type: 'doc', id: 'api/v2/crm/custom-objects' },
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'api/v2/crm/create-custom-object',
        label: 'Create customObject',
        className: 'api-method post',
      },
      { type: 'doc', id: 'api/v2/crm/get-custom-object', label: 'Get customObject', className: 'api-method get' },
      { type: 'doc', id: 'api/v2/crm/update-custom-object', label: 'Update customObject', className: 'api-method put' },
    ],
  },
  {
    type: 'category',
    label: 'CustomObjectRecords',
    link: { type: 'doc', id: 'api/v2/crm/custom-object-records' },
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'api/v2/crm/create-custom-object-record',
        label: 'Create customObjectRecord',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'api/v2/crm/get-custom-object-record',
        label: 'Get customObjectRecord',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'api/v2/crm/update-custom-object-record',
        label: 'Update customObjectRecord',
        className: 'api-method patch',
      },
    ],
  },
  {
    type: 'category',
    label: 'AssociationTypes',
    link: { type: 'doc', id: 'api/v2/crm/association-types' },
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'api/v2/crm/create-association-type',
        label: 'Create associationType',
        className: 'api-method post',
      },
    ],
  },
  {
    type: 'category',
    label: 'Associations',
    link: { type: 'doc', id: 'api/v2/crm/associations' },
    collapsed: true,
    items: [
      { type: 'doc', id: 'api/v2/crm/create-association', label: 'Create association', className: 'api-method put' },
    ],
  },
];
