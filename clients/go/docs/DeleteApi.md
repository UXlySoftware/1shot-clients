# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**StructsStructIdParamsStructParamIdDelete**](DeleteApi.md#StructsStructIdParamsStructParamIdDelete) | **Delete** /structs/{structId}/params/{structParamId} | 
[**TransactionsTransactionIdDelete**](DeleteApi.md#TransactionsTransactionIdDelete) | **Delete** /transactions/{transactionId} | 
[**WalletsEscrowWalletIdDelete**](DeleteApi.md#WalletsEscrowWalletIdDelete) | **Delete** /wallets/{escrowWalletId} | 

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

# **TransactionsTransactionIdDelete**
> TransactionsTransactionIdDelete(ctx, transactionId)


Deletes transaction

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **transactionId** | [**string**](.md)|  | 

### Return type

 (empty response body)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletsEscrowWalletIdDelete**
> InlineResponse2004 WalletsEscrowWalletIdDelete(ctx, escrowWalletId)


Deletes an escrow wallet with the provided ID. The API Credential must have Admin level permissions on the Business that owns this Escrow Wallet, and the wallet must be near empty.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **escrowWalletId** | [**string**](.md)| The ID of the escrow wallet | 

### Return type

[**InlineResponse2004**](inline_response_200_4.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

