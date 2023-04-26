# LeadsApi

All URIs are relative to *http://localhost:8080/crm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLead**](LeadsApi.md#createLead) | **POST** /leads | Create lead
[**getLead**](LeadsApi.md#getLead) | **GET** /leads/{lead_id} | Get lead
[**getLeads**](LeadsApi.md#getLeads) | **GET** /leads | List leads
[**updateLead**](LeadsApi.md#updateLead) | **PATCH** /leads/{lead_id} | Update lead

<a name="createLead"></a>
# **createLead**
> InlineResponse2012 createLead(body, xCustomerId, xProviderName)

Create lead

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.LeadsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: ApiKeyAuth
ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
ApiKeyAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.setApiKeyPrefix("Token");

LeadsApi apiInstance = new LeadsApi();
LeadsBody body = new LeadsBody(); // LeadsBody | 
String xCustomerId = "xCustomerId_example"; // String | The customer ID that uniquely identifies the customer in your application
String xProviderName = "xProviderName_example"; // String | The provider name
try {
    InlineResponse2012 result = apiInstance.createLead(body, xCustomerId, xProviderName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LeadsApi#createLead");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LeadsBody**](LeadsBody.md)|  |
 **xCustomerId** | **String**| The customer ID that uniquely identifies the customer in your application |
 **xProviderName** | **String**| The provider name |

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLead"></a>
# **getLead**
> Lead getLead(xCustomerId, xProviderName, leadId, expand)

Get lead

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.LeadsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: ApiKeyAuth
ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
ApiKeyAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.setApiKeyPrefix("Token");

LeadsApi apiInstance = new LeadsApi();
String xCustomerId = "xCustomerId_example"; // String | The customer ID that uniquely identifies the customer in your application
String xProviderName = "xProviderName_example"; // String | The provider name
String leadId = "leadId_example"; // String | 
String expand = "expand_example"; // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces
try {
    Lead result = apiInstance.getLead(xCustomerId, xProviderName, leadId, expand);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LeadsApi#getLead");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCustomerId** | **String**| The customer ID that uniquely identifies the customer in your application |
 **xProviderName** | **String**| The provider name |
 **leadId** | **String**|  |
 **expand** | **String**| Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces | [optional]

### Return type

[**Lead**](Lead.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLeads"></a>
# **getLeads**
> InlineResponse2002 getLeads(xCustomerId, xProviderName, createdAfter, createdBefore, modifiedAfter, modifiedBefore, cursor, expand, pageSize)

List leads

Get a list of leads

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.LeadsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: ApiKeyAuth
ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
ApiKeyAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.setApiKeyPrefix("Token");

LeadsApi apiInstance = new LeadsApi();
String xCustomerId = "xCustomerId_example"; // String | The customer ID that uniquely identifies the customer in your application
String xProviderName = "xProviderName_example"; // String | The provider name
OffsetDateTime createdAfter = new OffsetDateTime(); // OffsetDateTime | If provided, will only return objects created after this datetime
OffsetDateTime createdBefore = new OffsetDateTime(); // OffsetDateTime | If provided, will only return objects created before this datetime
OffsetDateTime modifiedAfter = new OffsetDateTime(); // OffsetDateTime | If provided, will only return objects modified after this datetime
OffsetDateTime modifiedBefore = new OffsetDateTime(); // OffsetDateTime | If provided, will only return objects modified before this datetime
String cursor = "cursor_example"; // String | The pagination cursor value
String expand = "expand_example"; // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces
String pageSize = "pageSize_example"; // String | Number of results to return per page
try {
    InlineResponse2002 result = apiInstance.getLeads(xCustomerId, xProviderName, createdAfter, createdBefore, modifiedAfter, modifiedBefore, cursor, expand, pageSize);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LeadsApi#getLeads");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCustomerId** | **String**| The customer ID that uniquely identifies the customer in your application |
 **xProviderName** | **String**| The provider name |
 **createdAfter** | **OffsetDateTime**| If provided, will only return objects created after this datetime | [optional]
 **createdBefore** | **OffsetDateTime**| If provided, will only return objects created before this datetime | [optional]
 **modifiedAfter** | **OffsetDateTime**| If provided, will only return objects modified after this datetime | [optional]
 **modifiedBefore** | **OffsetDateTime**| If provided, will only return objects modified before this datetime | [optional]
 **cursor** | **String**| The pagination cursor value | [optional]
 **expand** | **String**| Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces | [optional]
 **pageSize** | **String**| Number of results to return per page | [optional]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLead"></a>
# **updateLead**
> InlineResponse2012 updateLead(body, xCustomerId, xProviderName, leadId)

Update lead

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.LeadsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: ApiKeyAuth
ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
ApiKeyAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.setApiKeyPrefix("Token");

LeadsApi apiInstance = new LeadsApi();
LeadsLeadIdBody body = new LeadsLeadIdBody(); // LeadsLeadIdBody | 
String xCustomerId = "xCustomerId_example"; // String | The customer ID that uniquely identifies the customer in your application
String xProviderName = "xProviderName_example"; // String | The provider name
String leadId = "leadId_example"; // String | 
try {
    InlineResponse2012 result = apiInstance.updateLead(body, xCustomerId, xProviderName, leadId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LeadsApi#updateLead");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LeadsLeadIdBody**](LeadsLeadIdBody.md)|  |
 **xCustomerId** | **String**| The customer ID that uniquely identifies the customer in your application |
 **xProviderName** | **String**| The provider name |
 **leadId** | **String**|  |

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
