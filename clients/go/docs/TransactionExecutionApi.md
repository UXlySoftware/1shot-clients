# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BusinessBusinessIdTransactionsExecutionsGet**](TransactionExecutionApi.md#BusinessBusinessIdTransactionsExecutionsGet) | **Get** /business/{businessId}/transactions/executions | 
[**ExecutionsTransactionExecutionIdGet**](TransactionExecutionApi.md#ExecutionsTransactionExecutionIdGet) | **Get** /executions/{transactionExecutionId} | 
[**TransactionsTransactionIdEstimatePost**](TransactionExecutionApi.md#TransactionsTransactionIdEstimatePost) | **Post** /transactions/{transactionId}/estimate | 
[**TransactionsTransactionIdExecutePost**](TransactionExecutionApi.md#TransactionsTransactionIdExecutePost) | **Post** /transactions/{transactionId}/execute | 
[**TransactionsTransactionIdReadPost**](TransactionExecutionApi.md#TransactionsTransactionIdReadPost) | **Post** /transactions/{transactionId}/read | 
[**TransactionsTransactionIdTestPost**](TransactionExecutionApi.md#TransactionsTransactionIdTestPost) | **Post** /transactions/{transactionId}/test | 

# **BusinessBusinessIdTransactionsExecutionsGet**
> InlineResponse2002 BusinessBusinessIdTransactionsExecutionsGet(ctx, businessId, optional)


Gets a paged list of Transaction Executions, which are records of individual transactions on a blockchain.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **businessId** | [**string**](.md)| The business that you want Transactions from | 
 **optional** | ***TransactionExecutionApiBusinessBusinessIdTransactionsExecutionsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionExecutionApiBusinessBusinessIdTransactionsExecutionsGetOpts struct
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

# **TransactionsTransactionIdEstimatePost**
> TransactionEstimate TransactionsTransactionIdEstimatePost(ctx, body, transactionId)


Estimates the cost of executing the transaction with the given parameters. Returns data about the fees and amount of gas.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**TransactionIdEstimateBody**](TransactionIdEstimateBody.md)|  | 
  **transactionId** | [**string**](.md)|  | 

### Return type

[**TransactionEstimate**](TransactionEstimate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TransactionsTransactionIdExecutePost**
> TransactionExecution TransactionsTransactionIdExecutePost(ctx, body, transactionId)


Starts the execution of the transaction. You can only execute transactions that are payable or nonpayable. Use /read for view and pure transactions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**TransactionIdExecuteBody**](TransactionIdExecuteBody.md)|  | 
  **transactionId** | [**string**](.md)|  | 

### Return type

[**TransactionExecution**](TransactionExecution.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TransactionsTransactionIdReadPost**
> JsonValue TransactionsTransactionIdReadPost(ctx, body, transactionId)


Gets the result of a view or pure function; this will error on payable and nonpayable transactions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**TransactionIdReadBody**](TransactionIdReadBody.md)|  | 
  **transactionId** | [**string**](.md)|  | 

### Return type

[**JsonValue**](JSONValue.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TransactionsTransactionIdTestPost**
> TransactionTestResult TransactionsTransactionIdTestPost(ctx, body, transactionId)


This method simulates the execution of a transaction. No gas will be spent and nothing on chain will change, but it will let you know whether or not an execution would succeed. Internally, this method relies on staticCall.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**TransactionIdTestBody**](TransactionIdTestBody.md)|  | 
  **transactionId** | [**string**](.md)|  | 

### Return type

[**TransactionTestResult**](TransactionTestResult.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

