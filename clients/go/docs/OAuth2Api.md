# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAccessToken**](OAuth2Api.md#GetAccessToken) | **Post** /token | Obtain an OAuth2 access token

# **GetAccessToken**
> InlineResponse200 GetAccessToken(ctx, grantType, clientId, clientSecret)
Obtain an OAuth2 access token

This endpoint implements the OAuth2 Client Credentials Flow. Clients must send their `client_id` and `client_secret` in the request body to receive an access token. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **grantType** | **string**|  | 
  **clientId** | **string**|  | 
  **clientSecret** | **string**|  | 

### Return type

[**InlineResponse200**](inline_response_200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

