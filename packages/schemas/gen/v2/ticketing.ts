/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/accounts": {
    /**
     * List accounts 
     * @description Returns a list of Account objects.
     */
    get: operations["listAccounts"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
  };
  "/accounts/{account_id}": {
    /**
     * Get account 
     * @description Returns an Account object with the given id.
     */
    get: operations["getAccount"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        account_id: string;
      };
    };
  };
  "/collections": {
    /**
     * List collections 
     * @description Returns a list of Collection objects.
     */
    get: operations["listCollections"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
  };
  "/collections/{collection_id}": {
    /**
     * Get collection 
     * @description Returns a Collection object with the given id.
     */
    get: operations["getCollection"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        collection_id: string;
      };
    };
  };
  "/collections/{parent_id}/users": {
    /**
     * List collection users 
     * @description Returns a list of User objects.
     */
    get: operations["listCollectionUsers"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        parent_id: string;
      };
    };
  };
  "/users": {
    /**
     * List users 
     * @description Returns a list of User objects.
     */
    get: operations["listUsers"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
  };
  "/users/{user_id}": {
    /**
     * Get user 
     * @description Returns a User object with the given id.
     */
    get: operations["getUser"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        user_id: string;
      };
    };
  };
  "/contacts": {
    /**
     * List contacts 
     * @description Returns a list of Contact objects.
     */
    get: operations["listContacts"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
  };
  "/contacts/{contact_id}": {
    /**
     * Get contact 
     * @description Returns a Contact object with the given id.
     */
    get: operations["getContact"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        contact_id: string;
      };
    };
  };
  "/teams": {
    /**
     * List teams 
     * @description Returns a list of Team objects.
     */
    get: operations["listTeams"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
  };
  "/teams/{team_id}": {
    /**
     * Get team 
     * @description Returns an Team object with the given id.
     */
    get: operations["getTeam"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        team_id: string;
      };
    };
  };
  "/tickets": {
    /**
     * List tickets 
     * @description Returns a list of Ticket objects.
     */
    get: operations["listTickets"];
    /**
     * Create ticket 
     * @description Creates a Ticket object with the given values.
     */
    post: operations["createTicket"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
  };
  "/tickets/{ticket_id}": {
    /**
     * Get ticket 
     * @description Returns an Ticket object with the given id.
     */
    get: operations["getTicket"];
    /**
     * Update ticket 
     * @description Updates a Ticket object with the given values.
     */
    patch: operations["updateTicket"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        ticket_id: string;
      };
    };
  };
  "/comments": {
    /**
     * List comments 
     * @description Returns a list of Comment objects.
     */
    get: operations["listComments"];
    /**
     * Create comment 
     * @description Creates a Comment object with the given values.
     */
    post: operations["createComment"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
  };
  "/comments/{comment_id}": {
    /**
     * Get ticket 
     * @description Returns an Ticket object with the given id.
     */
    get: operations["getTicket"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        comment_id: string;
      };
    };
  };
  "/tags": {
    /**
     * List tags 
     * @description Returns a list of Tag objects.
     */
    get: operations["listTags"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        /** @description The provider name */
        "x-provider-name": string;
      };
    };
  };
  "/tags/{tag_id}": {
    /**
     * Get tag 
     * @description Returns a Tag object with the given id.
     */
    get: operations["getTag"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        tag_id: string;
      };
    };
  };
  "/attachments": {
    /**
     * List attachments 
     * @description Returns a list of Attachment objects.
     */
    get: operations["listAttachments"];
    /**
     * Create attachment 
     * @description Creates a Attachment object with the given values.
     */
    post: operations["createAttachment"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
  };
  "/attachments/{attachment_id}": {
    /**
     * Get attachment 
     * @description Returns an Attachment object with the given id.
     */
    get: operations["getAttachment"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        attachment_id: string;
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    account: {
      /** @example Waystar Royco */
      name: string | null;
      domains: (string)[];
    };
    contact: {
      /** @example Cousin Greg */
      name: string | null;
      /** @example greg@waystar-royco.com */
      email_address: string;
      /** @example 5108890293 */
      phone_number?: string | null;
      /** @example Executive Assistant to Tom Wambsgans */
      details?: string | null;
      /** @example 8998e1ed-1c76-4b64-9097-9d37ee88bf6f */
      account?: string | null;
    };
    collection: {
      /** @example Q1 Platform */
      name: string | null;
      /** @example For tracking all tasks related to Platform for Q1 */
      description?: string | null;
      /** @example LIST */
      collection_type?: string | null;
      /** @example 681b0fd7-40e6-4b91-8e23-2814872090be */
      parent_collection?: string | null;
      /** @example PUBLIC */
      access_level?: string | null;
    };
    create_ticket: {
      /** @example Please add more integrations */
      name: string | null;
      assignees?: (string)[];
      /** @example 3fa85f64-5717-4562-b3fc-2c963f66afa6 */
      creator: string;
      /** @example 2022-10-11T00:00:00Z */
      due_date?: string;
      /** @example OPEN */
      status?: string;
      /** @example Can you please add more integrations? It'll make syncing data much easier! */
      description?: string;
      collections?: (string)[];
      /** @example incident */
      ticket_type?: string;
      /** @example 0958cbc6-6040-430a-848e-aafacbadf4ae */
      account?: string;
      /** @example 65c345ba-6870-4974-87ba-dd31509c367a */
      contact?: string;
      /** @example 75b33d04-30d2-4f3e-be45-27838bc94342 */
      parent_ticket?: string;
      tags?: (string)[];
      /** @example 2021-12-09T00:00:00Z */
      completed_at?: string;
      /** @example https://thirdpartysoftware.com/project/3/issue/1 */
      ticket_url?: string;
      /** @example HIGH */
      priority?: string;
    };
    update_ticket: {
      /** @example Please add more integrations */
      name: string | null;
      assignees?: (string)[];
      /** @example 3fa85f64-5717-4562-b3fc-2c963f66afa6 */
      creator: string;
      /** @example 2022-10-11T00:00:00Z */
      due_date?: string;
      /** @example OPEN */
      status?: string;
      /** @example Can you please add more integrations? It'll make syncing data much easier! */
      description?: string;
      collections?: (string)[];
      /** @example incident */
      ticket_type?: string;
      /** @example 0958cbc6-6040-430a-848e-aafacbadf4ae */
      account?: string;
      /** @example 65c345ba-6870-4974-87ba-dd31509c367a */
      contact?: string;
      /** @example 75b33d04-30d2-4f3e-be45-27838bc94342 */
      parent_ticket?: string;
      tags?: (string)[];
      /** @example 2021-12-09T00:00:00Z */
      completed_at?: string;
      /** @example https://thirdpartysoftware.com/project/3/issue/1 */
      ticket_url?: string;
      /** @example HIGH */
      priority?: string;
    };
    ticket: {
      /** @example Please add more integrations */
      name: string | null;
      assignees?: (string)[];
      /** @example 3fa85f64-5717-4562-b3fc-2c963f66afa6 */
      creator: string;
      /** @example 2022-10-11T00:00:00Z */
      due_date?: string;
      /** @example OPEN */
      status?: string;
      /** @example Can you please add more integrations? It'll make syncing data much easier! */
      description?: string;
      collections?: (string)[];
      /** @example incident */
      ticket_type?: string;
      /** @example 0958cbc6-6040-430a-848e-aafacbadf4ae */
      account?: string;
      /** @example 65c345ba-6870-4974-87ba-dd31509c367a */
      contact?: string;
      /** @example 75b33d04-30d2-4f3e-be45-27838bc94342 */
      parent_ticket?: string;
      tags?: (string)[];
      /** @example 2021-12-09T00:00:00Z */
      completed_at?: string;
      /** @example https://thirdpartysoftware.com/project/3/issue/1 */
      ticket_url?: string;
      /** @example HIGH */
      priority?: string;
    };
    user: {
      /** @example Hil Feig */
      name: string | null;
      /** @example help@supaglue.com */
      email_address: string;
      /** @example false */
      is_active: boolean;
      teams?: (string)[];
      /** @example https://supaglue.io/user_profile_pic.png */
      avatar?: string | null;
    };
    comment: {
      /** @example 17a54124-287f-494d-965e-3c5b330c9a68 */
      user: string;
      /** @example dde3fb16-b8eb-483d-81c4-b78100816f15 */
      contact?: string;
      /** @example When will these integrations be done? You all should use Supaglue. */
      body: string | null;
      /** @example When will these integrations be done? You all should use <b>Supaglue<b>. */
      html_body?: string | null;
      /** @example fb8c55b6-1cb8-4b4c-9fb6-17924231619d */
      ticket: string | null;
      /** @example true */
      is_private: boolean;
    };
    tag: {
      /** @example Ticketing API */
      name: string;
    };
  };
  responses: never;
  parameters: {
    /** @description The customer ID that uniquely identifies the customer in your application */
    "x-customer-id": string;
    /** @description The provider name */
    "x-provider-name": string;
    /** @description If provided, will only return objects modified after this datetime */
    modified_after?: Date;
    /** @description If provided, will only return objects modified before this datetime */
    modified_before?: Date;
    /** @description If provided, will only return objects created after this datetime */
    created_after?: Date;
    /** @description If provided, will only return objects created before this datetime */
    created_before?: Date;
    /** @description Whether to include data that was deleted in providers. */
    include_deleted_data?: boolean;
    /** @description Whether to include raw data fetched from the 3rd party provider. */
    include_raw_data?: boolean;
    /** @description Number of results to return per page. (Max: 1000) */
    page_size?: string;
    /** @description The pagination cursor value */
    cursor?: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /**
   * List accounts 
   * @description Returns a list of Account objects.
   */
  listAccounts: {
    parameters: {
      query?: {
        modified_after?: components["parameters"]["modified_after"];
        page_size?: components["parameters"]["page_size"];
        cursor?: components["parameters"]["cursor"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
    responses: {
      /** @description AccountsData */
      200: {
        content: {
          "application/json": {
            pagination: paths["/tags"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["pagination"];
            records: (components["schemas"]["account"])[];
          };
        };
      };
    };
  };
  /**
   * Get account 
   * @description Returns an Account object with the given id.
   */
  getAccount: {
    parameters: {
      query?: {
        include_raw_data?: components["parameters"]["include_raw_data"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        account_id: string;
      };
    };
    responses: {
      /** @description AccountData */
      200: {
        content: {
          "application/json": components["schemas"]["account"];
        };
      };
    };
  };
  /**
   * List collections 
   * @description Returns a list of Collection objects.
   */
  listCollections: {
    parameters: {
      query?: {
        modified_after?: components["parameters"]["modified_after"];
        page_size?: components["parameters"]["page_size"];
        cursor?: components["parameters"]["cursor"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
    responses: {
      /** @description CollectionsData */
      200: {
        content: {
          "application/json": {
            pagination: paths["/tags"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["pagination"];
            records: (components["schemas"]["collection"])[];
          };
        };
      };
    };
  };
  /**
   * Get collection 
   * @description Returns a Collection object with the given id.
   */
  getCollection: {
    parameters: {
      query?: {
        include_raw_data?: components["parameters"]["include_raw_data"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        collection_id: string;
      };
    };
    responses: {
      /** @description CollectionData */
      200: {
        content: {
          "application/json": components["schemas"]["collection"];
        };
      };
    };
  };
  /**
   * List collection users 
   * @description Returns a list of User objects.
   */
  listCollectionUsers: {
    parameters: {
      query?: {
        modified_after?: components["parameters"]["modified_after"];
        page_size?: components["parameters"]["page_size"];
        cursor?: components["parameters"]["cursor"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        parent_id: string;
      };
    };
    responses: {
      /** @description CollectionUsersData */
      200: {
        content: {
          "application/json": {
            pagination: paths["/tags"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["pagination"];
            records: (components["schemas"]["user"])[];
          };
        };
      };
    };
  };
  /**
   * List users 
   * @description Returns a list of User objects.
   */
  listUsers: {
    parameters: {
      query?: {
        modified_after?: components["parameters"]["modified_after"];
        page_size?: components["parameters"]["page_size"];
        cursor?: components["parameters"]["cursor"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
    responses: {
      /** @description UsersData */
      200: {
        content: {
          "application/json": {
            pagination: paths["/tags"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["pagination"];
            records: (components["schemas"]["user"])[];
          };
        };
      };
    };
  };
  /**
   * Get user 
   * @description Returns a User object with the given id.
   */
  getUser: {
    parameters: {
      query?: {
        include_raw_data?: components["parameters"]["include_raw_data"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        user_id: string;
      };
    };
    responses: {
      /** @description UserData */
      200: {
        content: {
          "application/json": components["schemas"]["user"];
        };
      };
    };
  };
  /**
   * List contacts 
   * @description Returns a list of Contact objects.
   */
  listContacts: {
    parameters: {
      query?: {
        modified_after?: components["parameters"]["modified_after"];
        page_size?: components["parameters"]["page_size"];
        cursor?: components["parameters"]["cursor"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
    responses: {
      /** @description ContactsData */
      200: {
        content: {
          "application/json": {
            pagination: paths["/tags"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["pagination"];
            records: (components["schemas"]["contact"])[];
          };
        };
      };
    };
  };
  /**
   * Get contact 
   * @description Returns a Contact object with the given id.
   */
  getContact: {
    parameters: {
      query?: {
        include_raw_data?: components["parameters"]["include_raw_data"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        contact_id: string;
      };
    };
    responses: {
      /** @description ContactData */
      200: {
        content: {
          "application/json": components["schemas"]["contact"];
        };
      };
    };
  };
  /**
   * List teams 
   * @description Returns a list of Team objects.
   */
  listTeams: {
    parameters: {
      query?: {
        modified_after?: components["parameters"]["modified_after"];
        page_size?: components["parameters"]["page_size"];
        cursor?: components["parameters"]["cursor"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
    responses: {
      /** @description TeamsData */
      200: {
        content: {
          "application/json": {
            pagination: paths["/tags"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["pagination"];
            records: (paths["/teams/%7Bteam_id%7D"]["get"]["responses"]["200"]["content"]["application/json"]["schema"])[];
          };
        };
      };
    };
  };
  /**
   * Get team 
   * @description Returns an Team object with the given id.
   */
  getTeam: {
    parameters: {
      query?: {
        include_raw_data?: components["parameters"]["include_raw_data"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        team_id: string;
      };
    };
    responses: {
      /** @description TeamData */
      200: {
        content: {
          "application/json": {
            /** @example Platform */
            name: string | null;
            /** @example Platform and Integrations Team */
            decription?: string | null;
          };
        };
      };
    };
  };
  /**
   * List tickets 
   * @description Returns a list of Ticket objects.
   */
  listTickets: {
    parameters: {
      query?: {
        modified_after?: components["parameters"]["modified_after"];
        page_size?: components["parameters"]["page_size"];
        cursor?: components["parameters"]["cursor"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
    responses: {
      /** @description TicketsData */
      200: {
        content: {
          "application/json": {
            pagination: paths["/tags"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["pagination"];
            records: (components["schemas"]["ticket"])[];
          };
        };
      };
    };
  };
  /**
   * Create ticket 
   * @description Creates a Ticket object with the given values.
   */
  createTicket: {
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
    requestBody: {
      content: {
        "application/json": {
          record: components["schemas"]["create_ticket"];
        };
      };
    };
    responses: {
      /** @description Ticket created */
      201: {
        content: {
          "application/json": {
            errors?: ({
                /**
                 * @description The full error message from the remote Provider. The schema and level of detail will vary by Provider. 
                 * @example {"code":400,"body":{"status":"error","message":"Property values were not valid: [{\\"isValid\\":false,\\"message\\":\\"Property \\\\\\"__about_us\\\\\\" does not exist\\",\\"error\\":\\"PROPERTY_DOESNT_EXIST\\",\\"name\\":\\"__about_us\\",\\"localizedErrorMessage\\":\\"Property \\\\\\"__about_us\\\\\\" does not exist\\"}]","correlationId":"ac94252c-90b5-45d2-ad1d-9a9f7651d7d2","category":"VALIDATION_ERROR"},"headers":{"access-control-allow-credentials":"false","cf-cache-status":"DYNAMIC","cf-ray":"8053d17b9dae9664-SJC","connection":"close","content-length":"361","content-type":"application/json;charset=utf-8","date":"Mon, 11 Sep 2023 23:51:22 GMT","nel":"{\\"success_fraction\\":0.01,\\"report_to\\":\\"cf-nel\\",\\"max_age\\":604800}","report-to":"{\\"endpoints\\":[{\\"url\\":\\"https://a.nel.cloudflare.com/report/v3?s=FgwuXObO%2Fz6ahUJKsxjDLaXTWjooJ8tB0w4%2B%2BKaulGStx0FGkn1PoJoOx2KrFMfihzNdfAqikq7CmgbdlmwKB8hkmp3eTb68qpg10LXFlRgiSqRhbWM7yYSfo8CXmPBc\\"}],\\"group\\":\\"cf-nel\\",\\"max_age\\":604800}","server":"cloudflare","strict-transport-security":"max-age=31536000; includeSubDomains; preload","vary":"origin, Accept-Encoding","x-content-type-options":"nosniff","x-envoy-upstream-service-time":"91","x-evy-trace-listener":"listener_https","x-evy-trace-route-configuration":"listener_https/all","x-evy-trace-route-service-name":"envoyset-translator","x-evy-trace-served-by-pod":"iad02/hubapi-td/envoy-proxy-6c94986c56-9xsh2","x-evy-trace-virtual-host":"all","x-hubspot-correlation-id":"ac94252c-90b5-45d2-ad1d-9a9f7651d7d2","x-hubspot-ratelimit-interval-milliseconds":"10000","x-hubspot-ratelimit-max":"100","x-hubspot-ratelimit-remaining":"99","x-hubspot-ratelimit-secondly":"10","x-hubspot-ratelimit-secondly-remaining":"9","x-request-id":"ac94252c-90b5-45d2-ad1d-9a9f7651d7d2","x-trace":"2B1B4386362759B6A4C34802AD168B803DDC1BE770000000000000000000"}}
                 */
                detail?: string;
                /**
                 * @description The Supaglue error code associated with the error. 
                 * @example MISSING_REQUIRED_FIELD
                 */
                problem_type?: string;
                /**
                 * @description A brief description of the error. The schema and type of message will vary by Provider. 
                 * @example Property values were not valid
                 */
                title?: string;
              })[];
            record?: {
              id: string;
            };
            warnings?: ({
                detail?: string;
                problem_type?: string;
                title?: string;
              })[];
          };
        };
      };
    };
  };
  /**
   * Get ticket 
   * @description Returns an Ticket object with the given id.
   */
  getTicket: {
    parameters: {
      query?: {
        include_raw_data?: components["parameters"]["include_raw_data"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        comment_id: string;
      };
    };
    responses: {
      /** @description CommentData */
      200: {
        content: {
          "application/json": components["schemas"]["comment"];
        };
      };
    };
  };
  /**
   * Update ticket 
   * @description Updates a Ticket object with the given values.
   */
  updateTicket: {
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        ticket_id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          record: components["schemas"]["update_ticket"];
        };
      };
    };
    responses: {
      /** @description Ticket updated */
      200: {
        content: {
          "application/json": {
            errors?: paths["/tickets"]["post"]["responses"]["201"]["content"]["application/json"]["schema"]["errors"];
            warnings?: paths["/tickets"]["post"]["responses"]["201"]["content"]["application/json"]["schema"]["warnings"];
          };
        };
      };
    };
  };
  /**
   * List comments 
   * @description Returns a list of Comment objects.
   */
  listComments: {
    parameters: {
      query?: {
        modified_after?: components["parameters"]["modified_after"];
        page_size?: components["parameters"]["page_size"];
        cursor?: components["parameters"]["cursor"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
    responses: {
      /** @description CommentsData */
      200: {
        content: {
          "application/json": {
            pagination: paths["/tags"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["pagination"];
            records: (components["schemas"]["comment"])[];
          };
        };
      };
    };
  };
  /**
   * Create comment 
   * @description Creates a Comment object with the given values.
   */
  createComment: {
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
    requestBody: {
      content: {
        "application/json": {
          record: {
            /** @example 17a54124-287f-494d-965e-3c5b330c9a68 */
            user: string;
            /** @example dde3fb16-b8eb-483d-81c4-b78100816f15 */
            contact?: string;
            /** @example When will these integrations be done? You all should use Supaglue. */
            body: string | null;
            /** @example When will these integrations be done? You all should use <b>Supaglue<b>. */
            html_body?: string | null;
            /** @example fb8c55b6-1cb8-4b4c-9fb6-17924231619d */
            ticket: string | null;
            /** @example true */
            is_private: boolean;
          };
        };
      };
    };
    responses: {
      /** @description Comment created */
      201: {
        content: {
          "application/json": {
            errors?: paths["/tickets"]["post"]["responses"]["201"]["content"]["application/json"]["schema"]["errors"];
            record?: paths["/tickets"]["post"]["responses"]["201"]["content"]["application/json"]["schema"]["record"];
            warnings?: paths["/tickets"]["post"]["responses"]["201"]["content"]["application/json"]["schema"]["warnings"];
          };
        };
      };
    };
  };
  /**
   * List tags 
   * @description Returns a list of Tag objects.
   */
  listTags: {
    parameters: {
      query?: {
        modified_after?: components["parameters"]["modified_after"];
        page_size?: components["parameters"]["page_size"];
        cursor?: components["parameters"]["cursor"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        /** @description The provider name */
        "x-provider-name": string;
      };
    };
    responses: {
      /** @description TagsData */
      200: {
        content: {
          "application/json": {
            pagination: {
              /** @example eyJpZCI6IjQyNTc5ZjczLTg1MjQtNDU3MC05YjY3LWVjYmQ3MDJjNmIxNCIsInJldmVyc2UiOmZhbHNlfQ== */
              next: string | null;
              /** @example eyJpZCI6IjBjZDhmYmZkLWU5NmQtNDEwZC05ZjQxLWIwMjU1YjdmNGI4NyIsInJldmVyc2UiOnRydWV9 */
              previous: string | null;
              /** @example 100 */
              total_count: number;
            };
            records: (components["schemas"]["tag"])[];
          };
        };
      };
    };
  };
  /**
   * Get tag 
   * @description Returns a Tag object with the given id.
   */
  getTag: {
    parameters: {
      query?: {
        include_raw_data?: components["parameters"]["include_raw_data"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        tag_id: string;
      };
    };
    responses: {
      /** @description TagData */
      200: {
        content: {
          "application/json": components["schemas"]["tag"];
        };
      };
    };
  };
  /**
   * List attachments 
   * @description Returns a list of Attachment objects.
   */
  listAttachments: {
    parameters: {
      query?: {
        modified_after?: components["parameters"]["modified_after"];
        page_size?: components["parameters"]["page_size"];
        cursor?: components["parameters"]["cursor"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
    responses: {
      /** @description AttachmentsData */
      200: {
        content: {
          "application/json": {
            pagination: paths["/tags"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["pagination"];
            records: (paths["/attachments/%7Battachment_id%7D"]["get"]["responses"]["200"]["content"]["application/json"]["schema"])[];
          };
        };
      };
    };
  };
  /**
   * Create attachment 
   * @description Creates a Attachment object with the given values.
   */
  createAttachment: {
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
    };
    requestBody: {
      content: {
        "application/json": {
          record: {
            /** @example Screenshot.png */
            file_name: string;
            /** @example 0958cbc6-6040-430a-848e-aafacbadf4ae */
            ticket: string;
            /** @example http://alturl.com/p749b */
            file_url: string;
            /** @example jpeg */
            content_type: string;
            /** @example 28b54125-287f-494d-965e-3c5b330c9a68 */
            uploaded_by: string;
          };
        };
      };
    };
    responses: {
      /** @description Attachment created */
      201: {
        content: {
          "application/json": {
            errors?: paths["/tickets"]["post"]["responses"]["201"]["content"]["application/json"]["schema"]["errors"];
            record?: paths["/tickets"]["post"]["responses"]["201"]["content"]["application/json"]["schema"]["record"];
            warnings?: paths["/tickets"]["post"]["responses"]["201"]["content"]["application/json"]["schema"]["warnings"];
          };
        };
      };
    };
  };
  /**
   * Get attachment 
   * @description Returns an Attachment object with the given id.
   */
  getAttachment: {
    parameters: {
      query?: {
        include_raw_data?: components["parameters"]["include_raw_data"];
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
      };
      path: {
        attachment_id: string;
      };
    };
    responses: {
      /** @description attachmentData */
      200: {
        content: {
          "application/json": {
            /** @example Screenshot.png */
            file_name: string;
            /** @example 0958cbc6-6040-430a-848e-aafacbadf4ae */
            ticket: string;
            /** @example http://alturl.com/p749b */
            file_url: string;
            /** @example jpeg */
            content_type: string;
            /** @example 28b54125-287f-494d-965e-3c5b330c9a68 */
            uploaded_by: string;
          };
        };
      };
    };
  };
}
