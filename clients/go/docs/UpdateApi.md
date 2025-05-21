# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BusinessBusinessIdStructsStructIdParamsPut**](UpdateApi.md#BusinessBusinessIdStructsStructIdParamsPut) | **Put** /business/{businessId}/structs/{structId}/params | 
[**StructsStructIdPut**](UpdateApi.md#StructsStructIdPut) | **Put** /structs/{structId} | 
[**TransactionsTransactionIdPut**](UpdateApi.md#TransactionsTransactionIdPut) | **Put** /transactions/{transactionId} | 
[**WalletsEscrowWalletIdPut**](UpdateApi.md#WalletsEscrowWalletIdPut) | **Put** /wallets/{escrowWalletId} | 

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

# **TransactionsTransactionIdPut**
> Transaction TransactionsTransactionIdPut(ctx, body, transactionId)


Updates a Transaction. You can update most of the properties of a transaction via this method, but you can't change the inputs or outputs. Use the Struct API calls for that instead.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**TransactionsTransactionIdBody**](TransactionsTransactionIdBody.md)|  | 
  **transactionId** | [**string**](.md)| The transaction that you want to update | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletsEscrowWalletIdPut**
> EscrowWallet WalletsEscrowWalletIdPut(ctx, body, escrowWalletId)


Updates an escrow wallet. Will only update properties that are not null

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**WalletsEscrowWalletIdBody**](WalletsEscrowWalletIdBody.md)|  | 
  **escrowWalletId** | [**string**](.md)| The ID of the escrow wallet | 

### Return type

[**EscrowWallet**](EscrowWallet.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

