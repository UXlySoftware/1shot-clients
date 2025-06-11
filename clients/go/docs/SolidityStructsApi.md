# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BusinessBusinessIdStructsStructIdParamsPost**](SolidityStructsApi.md#BusinessBusinessIdStructsStructIdParamsPost) | **Post** /business/{businessId}/structs/{structId}/params | 
[**BusinessBusinessIdStructsStructIdParamsPut**](SolidityStructsApi.md#BusinessBusinessIdStructsStructIdParamsPut) | **Put** /business/{businessId}/structs/{structId}/params | 
[**StructsStructIdParamsStructParamIdDelete**](SolidityStructsApi.md#StructsStructIdParamsStructParamIdDelete) | **Delete** /structs/{structId}/params/{structParamId} | 
[**StructsStructIdPut**](SolidityStructsApi.md#StructsStructIdPut) | **Put** /structs/{structId} | 

# **BusinessBusinessIdStructsStructIdParamsPost**
> SolidityStruct BusinessBusinessIdStructsStructIdParamsPost(ctx, body, businessId, structId)


Adds a param to an existing struct. Because of the way the indexes work, you can only add params to the end of a struct. You can use /structs/{structId}/params to later rearrange all the indexes of the params if required.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**NewSolidityStructParam**](NewSolidityStructParam.md)|  | 
  **businessId** | [**string**](.md)| The ID of the business that owns the struct. You must have permissions in the business to add a param. | 
  **structId** | [**string**](.md)| The ID of the existing Solidity Struct | 

### Return type

[**SolidityStruct**](SolidityStruct.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BusinessBusinessIdStructsStructIdParamsPut**
> SolidityStruct BusinessBusinessIdStructsStructIdParamsPut(ctx, body, businessId, structId)


Update the params of an existing struct. Normally, you would do updates one at a time, but since the parameter indexes must be kept in order, you can update multiple params at once with this call.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**StructIdParamsBody**](StructIdParamsBody.md)|  | 
  **businessId** | [**string**](.md)| The ID of the business that owns the struct. You must have permissions in the business to add a param. | 
  **structId** | [**string**](.md)| The ID of the existing Solidity Struct | 

### Return type

[**SolidityStruct**](SolidityStruct.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **StructsStructIdParamsStructParamIdDelete**
> SolidityStruct StructsStructIdParamsStructParamIdDelete(ctx, structId, structParamId)


Removes a param from an existing solidity struct. Because the indexes must be kept valid at all times, you can only practically remove the last param from the struct. If you need to remove a param in the middle, call PUT /structs/{structId}/params and rearrange the param indexes first.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **structId** | [**string**](.md)| The ID of the existing Solidity Struct | 
  **structParamId** | [**string**](.md)| The ID of the existing Solidity Struct param that you want to remove. | 

### Return type

[**SolidityStruct**](SolidityStruct.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **StructsStructIdPut**
> SolidityStruct StructsStructIdPut(ctx, body, structId)


Updates an existing solidity struct. You can get the structId from the SolidityStructParam.typeStructId, which are either input or output params of a Transaction.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**StructsStructIdBody**](StructsStructIdBody.md)|  | 
  **structId** | [**string**](.md)| The ID of the existing Solidity Struct | 

### Return type

[**SolidityStruct**](SolidityStruct.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

