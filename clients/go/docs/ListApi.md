# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BusinessBusinessIdTransactionsExecutionsGet**](ListApi.md#BusinessBusinessIdTransactionsExecutionsGet) | **Get** /business/{businessId}/transactions/executions | 
[**BusinessBusinessIdTransactionsGet**](ListApi.md#BusinessBusinessIdTransactionsGet) | **Get** /business/{businessId}/transactions | 
[**BusinessBusinessIdWalletsGet**](ListApi.md#BusinessBusinessIdWalletsGet) | **Get** /business/{businessId}/wallets | 

# **BusinessBusinessIdTransactionsExecutionsGet**
> InlineResponse2002 BusinessBusinessIdTransactionsExecutionsGet(ctx, businessId, optional)


Gets a paged list of Transaction Executions, which are records of individual transactions on a blockchain.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **businessId** | [**string**](.md)| The business that you want Transactions from | 
 **optional** | ***ListApiBusinessBusinessIdTransactionsExecutionsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListApiBusinessBusinessIdTransactionsExecutionsGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **pageSize** | [**optional.Interface of int32**](.md)|  | 
 **page** | [**optional.Interface of int32**](.md)|  | 
 **chainId** | [**optional.Interface of EChain**](.md)|  | 
 **status** | **optional.Int32**|  | 
 **escrowWalletId** | [**optional.Interface of string**](.md)| Will filter the results to Transactions using this Escrow Wallet Id only. | 
 **transactionId** | [**optional.Interface of string**](.md)| Will filter the results to only those Transaction Executions for this particular Transaction Id | 
 **apiCredentialId** | [**optional.Interface of string**](.md)|  | 
 **userId** | [**optional.Interface of string**](.md)|  | 

### Return type

[**InlineResponse2002**](inline_response_200_2.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BusinessBusinessIdTransactionsGet**
> InlineResponse2001 BusinessBusinessIdTransactionsGet(ctx, businessId, optional)


Lists transactions for a business

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **businessId** | [**string**](.md)| The business that you want transactions from | 
 **optional** | ***ListApiBusinessBusinessIdTransactionsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListApiBusinessBusinessIdTransactionsGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **pageSize** | [**optional.Interface of int32**](.md)|  | 
 **page** | [**optional.Interface of int32**](.md)|  | 
 **chainId** | [**optional.Interface of EChain**](.md)|  | 
 **name** | **optional.String**|  | 
 **status** | [**optional.Interface of EDeletedStatusSelector**](.md)|  | 
 **contractAddress** | [**optional.Interface of string**](.md)|  | 

### Return type

[**InlineResponse2001**](inline_response_200_1.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BusinessBusinessIdWalletsGet**
> InlineResponse2003 BusinessBusinessIdWalletsGet(ctx, businessId, optional)


Lists escrow wallets for the business- NOT BusinessEscrowWallets. These are almost identical but EscrowWallet has more stuff.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **businessId** | [**string**](.md)| The internal uuid of the Business you are interested in | 
 **optional** | ***ListApiBusinessBusinessIdWalletsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListApiBusinessBusinessIdWalletsGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **chainId** | [**optional.Interface of EChain**](.md)| The specific chain to get the wallets for | 
 **pageSize** | [**optional.Interface of int32**](.md)|  | 
 **page** | [**optional.Interface of int32**](.md)|  | 
 **name** | **optional.String**| Filters on the name of the escrow wallet. | 

### Return type

[**InlineResponse2003**](inline_response_200_3.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

