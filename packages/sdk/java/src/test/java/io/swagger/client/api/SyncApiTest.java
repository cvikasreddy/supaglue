/*
 * Supaglue CRM API
 * # Introduction  Welcome to the Supaglue unified CRM API documentation. You can use this API to read data that has been synced into Supaglue from third-party providers.  ### Base API URL  ``` http://localhost:8080/api/crm/v1 ``` 
 *
 * OpenAPI spec version: 0.3.3
 * Contact: docs@supaglue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package io.swagger.client.api;

import io.swagger.client.model.InlineResponse2004;
import io.swagger.client.model.InlineResponse2005;
import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * API tests for SyncApi
 */
@Ignore
public class SyncApiTest {

    private final SyncApi api = new SyncApi();

    /**
     * Get Sync History
     *
     * Get a list of Sync History objects.
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void getSyncHistoryTest() throws Exception {
        UUID customerId = null;
        String providerName = null;
        String cursor = null;
        String pageSize = null;
        String model = null;
        InlineResponse2004 response = api.getSyncHistory(customerId, providerName, cursor, pageSize, model);

        // TODO: test validations
    }
    /**
     * Get Sync Info
     *
     * Get a list of Sync Info
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void getSyncInfosTest() throws Exception {
        UUID customerId = null;
        String providerName = null;
        List<InlineResponse2005> response = api.getSyncInfos(customerId, providerName);

        // TODO: test validations
    }
}
