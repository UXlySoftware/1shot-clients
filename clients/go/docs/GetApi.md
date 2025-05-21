# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExecutionsTransactionExecutionIdGet**](GetApi.md#ExecutionsTransactionExecutionIdGet) | **Get** /executions/{transactionExecutionId} | 
[**TransactionsTransactionIdGet**](GetApi.md#TransactionsTransactionIdGet) | **Get** /transactions/{transactionId} | 
[**WalletsEscrowWalletIdGet**](GetApi.md#WalletsEscrowWalletIdGet) | **Get** /wallets/{escrowWalletId} | 

# **ExecutionsTransactionExecutionIdGet**
> TransactionExecution ExecutionsTransactionExecutionIdGet(ctx, transactionExecutionId)


Gets a specific transaction execution

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **transactionExecutionId** | [**string**](.md)| The transaction execution that you want to | 

### Return type

[**TransactionExecution**](TransactionExecution.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TransactionsTransactionIdGet**
> Transaction TransactionsTransactionIdGet(ctx, transactionId)


Gets a single Transaction via its TransactionId

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **transactionId** | [**string**](.md)| The transaction that you want to retrieve | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletsEscrowWalletIdGet**
> EscrowWallet WalletsEscrowWalletIdGet(ctx, escrowWalletId, optional)


Gets an escrow wallet by the ID. Doesn't matter what chain it's on.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **escrowWalletId** | [**string**](.md)| The ID of the escrow wallet | 
 **optional** | ***GetApiWalletsEscrowWalletIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GetApiWalletsEscrowWalletIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **includeBalances** | **optional.Bool**| Set to \&quot;true\&quot; to return the balance information for the escrow wallet. Includes only the native token balance. | 

### Return type

[**EscrowWallet**](EscrowWallet.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

