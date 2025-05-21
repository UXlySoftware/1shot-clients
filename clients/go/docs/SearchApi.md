# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ContractsDescriptionsSearchPost**](SearchApi.md#ContractsDescriptionsSearchPost) | **Post** /contracts/descriptions/search | 

# **ContractsDescriptionsSearchPost**
> []FullContractDescription ContractsDescriptionsSearchPost(ctx, body)


Performs a semantic search on contract descriptions to find the most relevant contracts.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**DescriptionsSearchBody**](DescriptionsSearchBody.md)|  | 

### Return type

[**[]FullContractDescription**](FullContractDescription.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

