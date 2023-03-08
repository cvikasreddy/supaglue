# coding: utf-8

"""
    Supaglue CRM API

    # Introduction  Welcome to the Supaglue unified CRM API documentation. You can use this API to read data that has been synced into Supaglue from third-party providers.  ### Base API URL  ``` http://localhost:8080/api/crm/v1 ```   # noqa: E501

    OpenAPI spec version: 0.3.3
    Contact: docs@supaglue.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from swagger_client.api_client import ApiClient


class LeadsApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def create_lead(self, body, customer_id, provider_name, **kwargs):  # noqa: E501
        """Create lead  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_lead(body, customer_id, provider_name, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param LeadsBody body: (required)
        :param str customer_id: The customer ID (required)
        :param str provider_name: The provider name (required)
        :return: InlineResponse2012
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.create_lead_with_http_info(body, customer_id, provider_name, **kwargs)  # noqa: E501
        else:
            (data) = self.create_lead_with_http_info(body, customer_id, provider_name, **kwargs)  # noqa: E501
            return data

    def create_lead_with_http_info(self, body, customer_id, provider_name, **kwargs):  # noqa: E501
        """Create lead  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_lead_with_http_info(body, customer_id, provider_name, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param LeadsBody body: (required)
        :param str customer_id: The customer ID (required)
        :param str provider_name: The provider name (required)
        :return: InlineResponse2012
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['body', 'customer_id', 'provider_name']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method create_lead" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'body' is set
        if ('body' not in params or
                params['body'] is None):
            raise ValueError("Missing the required parameter `body` when calling `create_lead`")  # noqa: E501
        # verify the required parameter 'customer_id' is set
        if ('customer_id' not in params or
                params['customer_id'] is None):
            raise ValueError("Missing the required parameter `customer_id` when calling `create_lead`")  # noqa: E501
        # verify the required parameter 'provider_name' is set
        if ('provider_name' not in params or
                params['provider_name'] is None):
            raise ValueError("Missing the required parameter `provider_name` when calling `create_lead`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}
        if 'customer_id' in params:
            header_params['customer-id'] = params['customer_id']  # noqa: E501
        if 'provider_name' in params:
            header_params['provider-name'] = params['provider_name']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        if 'body' in params:
            body_params = params['body']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/leads', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='InlineResponse2012',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_lead(self, customer_id, provider_name, lead_id, **kwargs):  # noqa: E501
        """Get lead  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_lead(customer_id, provider_name, lead_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str customer_id: The customer ID (required)
        :param str provider_name: The provider name (required)
        :param str lead_id: (required)
        :param str expand: Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces
        :return: Lead
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_lead_with_http_info(customer_id, provider_name, lead_id, **kwargs)  # noqa: E501
        else:
            (data) = self.get_lead_with_http_info(customer_id, provider_name, lead_id, **kwargs)  # noqa: E501
            return data

    def get_lead_with_http_info(self, customer_id, provider_name, lead_id, **kwargs):  # noqa: E501
        """Get lead  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_lead_with_http_info(customer_id, provider_name, lead_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str customer_id: The customer ID (required)
        :param str provider_name: The provider name (required)
        :param str lead_id: (required)
        :param str expand: Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces
        :return: Lead
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['customer_id', 'provider_name', 'lead_id', 'expand']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_lead" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'customer_id' is set
        if ('customer_id' not in params or
                params['customer_id'] is None):
            raise ValueError("Missing the required parameter `customer_id` when calling `get_lead`")  # noqa: E501
        # verify the required parameter 'provider_name' is set
        if ('provider_name' not in params or
                params['provider_name'] is None):
            raise ValueError("Missing the required parameter `provider_name` when calling `get_lead`")  # noqa: E501
        # verify the required parameter 'lead_id' is set
        if ('lead_id' not in params or
                params['lead_id'] is None):
            raise ValueError("Missing the required parameter `lead_id` when calling `get_lead`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'lead_id' in params:
            path_params['lead_id'] = params['lead_id']  # noqa: E501

        query_params = []
        if 'expand' in params:
            query_params.append(('expand', params['expand']))  # noqa: E501

        header_params = {}
        if 'customer_id' in params:
            header_params['customer-id'] = params['customer_id']  # noqa: E501
        if 'provider_name' in params:
            header_params['provider-name'] = params['provider_name']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/leads/{lead_id}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='Lead',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_leads(self, customer_id, provider_name, **kwargs):  # noqa: E501
        """List leads  # noqa: E501

        Get a list of leads  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_leads(customer_id, provider_name, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str customer_id: The customer ID (required)
        :param str provider_name: The provider name (required)
        :param datetime created_after: If provided, will only return objects created after this datetime
        :param datetime created_before: If provided, will only return objects created before this datetime
        :param datetime updated_after: If provided, will only return objects modified after this datetime
        :param datetime updated_before: If provided, will only return objects modified before this datetime
        :param str cursor: The pagination cursor value
        :param str expand: Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces
        :param str page_size: Number of results to return per page
        :return: InlineResponse2002
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_leads_with_http_info(customer_id, provider_name, **kwargs)  # noqa: E501
        else:
            (data) = self.get_leads_with_http_info(customer_id, provider_name, **kwargs)  # noqa: E501
            return data

    def get_leads_with_http_info(self, customer_id, provider_name, **kwargs):  # noqa: E501
        """List leads  # noqa: E501

        Get a list of leads  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_leads_with_http_info(customer_id, provider_name, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str customer_id: The customer ID (required)
        :param str provider_name: The provider name (required)
        :param datetime created_after: If provided, will only return objects created after this datetime
        :param datetime created_before: If provided, will only return objects created before this datetime
        :param datetime updated_after: If provided, will only return objects modified after this datetime
        :param datetime updated_before: If provided, will only return objects modified before this datetime
        :param str cursor: The pagination cursor value
        :param str expand: Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces
        :param str page_size: Number of results to return per page
        :return: InlineResponse2002
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['customer_id', 'provider_name', 'created_after', 'created_before', 'updated_after', 'updated_before', 'cursor', 'expand', 'page_size']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_leads" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'customer_id' is set
        if ('customer_id' not in params or
                params['customer_id'] is None):
            raise ValueError("Missing the required parameter `customer_id` when calling `get_leads`")  # noqa: E501
        # verify the required parameter 'provider_name' is set
        if ('provider_name' not in params or
                params['provider_name'] is None):
            raise ValueError("Missing the required parameter `provider_name` when calling `get_leads`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'created_after' in params:
            query_params.append(('created_after', params['created_after']))  # noqa: E501
        if 'created_before' in params:
            query_params.append(('created_before', params['created_before']))  # noqa: E501
        if 'updated_after' in params:
            query_params.append(('updated_after', params['updated_after']))  # noqa: E501
        if 'updated_before' in params:
            query_params.append(('updated_before', params['updated_before']))  # noqa: E501
        if 'cursor' in params:
            query_params.append(('cursor', params['cursor']))  # noqa: E501
        if 'expand' in params:
            query_params.append(('expand', params['expand']))  # noqa: E501
        if 'page_size' in params:
            query_params.append(('page_size', params['page_size']))  # noqa: E501

        header_params = {}
        if 'customer_id' in params:
            header_params['customer-id'] = params['customer_id']  # noqa: E501
        if 'provider_name' in params:
            header_params['provider-name'] = params['provider_name']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/leads', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='InlineResponse2002',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def update_lead(self, body, customer_id, provider_name, lead_id, **kwargs):  # noqa: E501
        """Update lead  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_lead(body, customer_id, provider_name, lead_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param LeadsLeadIdBody body: (required)
        :param str customer_id: The customer ID (required)
        :param str provider_name: The provider name (required)
        :param str lead_id: (required)
        :return: InlineResponse2012
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.update_lead_with_http_info(body, customer_id, provider_name, lead_id, **kwargs)  # noqa: E501
        else:
            (data) = self.update_lead_with_http_info(body, customer_id, provider_name, lead_id, **kwargs)  # noqa: E501
            return data

    def update_lead_with_http_info(self, body, customer_id, provider_name, lead_id, **kwargs):  # noqa: E501
        """Update lead  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_lead_with_http_info(body, customer_id, provider_name, lead_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param LeadsLeadIdBody body: (required)
        :param str customer_id: The customer ID (required)
        :param str provider_name: The provider name (required)
        :param str lead_id: (required)
        :return: InlineResponse2012
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['body', 'customer_id', 'provider_name', 'lead_id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method update_lead" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'body' is set
        if ('body' not in params or
                params['body'] is None):
            raise ValueError("Missing the required parameter `body` when calling `update_lead`")  # noqa: E501
        # verify the required parameter 'customer_id' is set
        if ('customer_id' not in params or
                params['customer_id'] is None):
            raise ValueError("Missing the required parameter `customer_id` when calling `update_lead`")  # noqa: E501
        # verify the required parameter 'provider_name' is set
        if ('provider_name' not in params or
                params['provider_name'] is None):
            raise ValueError("Missing the required parameter `provider_name` when calling `update_lead`")  # noqa: E501
        # verify the required parameter 'lead_id' is set
        if ('lead_id' not in params or
                params['lead_id'] is None):
            raise ValueError("Missing the required parameter `lead_id` when calling `update_lead`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'lead_id' in params:
            path_params['lead_id'] = params['lead_id']  # noqa: E501

        query_params = []

        header_params = {}
        if 'customer_id' in params:
            header_params['customer-id'] = params['customer_id']  # noqa: E501
        if 'provider_name' in params:
            header_params['provider-name'] = params['provider_name']  # noqa: E501

        form_params = []
        local_var_files = {}

        body_params = None
        if 'body' in params:
            body_params = params['body']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/leads/{lead_id}', 'PATCH',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='InlineResponse2012',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
