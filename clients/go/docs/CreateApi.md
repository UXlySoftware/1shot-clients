# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BusinessBusinessIdStructsStructIdParamsPost**](CreateApi.md#BusinessBusinessIdStructsStructIdParamsPost) | **Post** /business/{businessId}/structs/{structId}/params | 
[**BusinessBusinessIdTransactionsAbiPost**](CreateApi.md#BusinessBusinessIdTransactionsAbiPost) | **Post** /business/{businessId}/transactions/abi | 
[**BusinessBusinessIdTransactionsContractPost**](CreateApi.md#BusinessBusinessIdTransactionsContractPost) | **Post** /business/{businessId}/transactions/contract | 
[**BusinessBusinessIdTransactionsPost**](CreateApi.md#BusinessBusinessIdTransactionsPost) | **Post** /business/{businessId}/transactions | 
[**BusinessBusinessIdWalletsPost**](CreateApi.md#BusinessBusinessIdWalletsPost) | **Post** /business/{businessId}/wallets | 

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

# **BusinessBusinessIdTransactionsAbiPost**
> []Transaction BusinessBusinessIdTransactionsAbiPost(ctx, body, businessId)


Imports a complete ethereum ABI and creates Transactions for each \"function\" type entry. Every transaction will be associated with the same Escrow Wallet

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**TransactionsAbiBody**](TransactionsAbiBody.md)|  | 
  **businessId** | [**string**](.md)| The internal uuid of the Business you are interested in | 

### Return type

[**[]Transaction**](Transaction.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BusinessBusinessIdTransactionsContractPost**
> []Transaction BusinessBusinessIdTransactionsContractPost(ctx, body, businessId)


Assures that Transactions exist for a given contract. This is based on the verified contract ABI and the highest-ranked Contract Description. If Transactions already exist, they are not modified. If they do not exist, any methods that are in the Contract Description will be created with the details from the Contract Description.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**TransactionsContractBody**](TransactionsContractBody.md)|  | 
  **businessId** | [**string**](.md)| The internal uuid of the Business you are interested in | 

### Return type

[**[]Transaction**](Transaction.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BusinessBusinessIdTransactionsPost**
> Transaction BusinessBusinessIdTransactionsPost(ctx, body, businessId)


Create a new Transaction. A Transaction is sometimes referred to as an Endpoint. A Transaction corresponds to a single method on a smart contract, and most of the required information to create one can be pulled from an Ethereum EBI. Transactions can be configured with static values for input parameters, which is useful for controlling how the transaction is called. For instance, you may set the \"amount\" parameter to a constant value on a \"mint\" call so that you always mint the same amount of tokens and can't cheat. You can have multiple Transactions for the same smart contract method, if you want to configure them with different static parameters.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**BusinessIdTransactionsBody**](BusinessIdTransactionsBody.md)|  | 
  **businessId** | [**string**](.md)| The internal uuid of the Business you are interested in | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BusinessBusinessIdWalletsPost**
> EscrowWallet BusinessBusinessIdWalletsPost(ctx, body, businessId)


Creates a new Escrow Wallet. Escrow Wallets are owned by a single Business and are linked a single Chain.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**BusinessIdWalletsBody**](BusinessIdWalletsBody.md)|  | 
  **businessId** | [**string**](.md)| The internal uuid of the Business you are interested in | 

### Return type

[**EscrowWallet**](EscrowWallet.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

