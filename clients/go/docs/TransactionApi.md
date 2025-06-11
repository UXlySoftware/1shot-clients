# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BusinessBusinessIdTransactionsAbiPost**](TransactionApi.md#BusinessBusinessIdTransactionsAbiPost) | **Post** /business/{businessId}/transactions/abi | 
[**BusinessBusinessIdTransactionsContractPost**](TransactionApi.md#BusinessBusinessIdTransactionsContractPost) | **Post** /business/{businessId}/transactions/contract | 
[**BusinessBusinessIdTransactionsExecutionsGet**](TransactionApi.md#BusinessBusinessIdTransactionsExecutionsGet) | **Get** /business/{businessId}/transactions/executions | 
[**BusinessBusinessIdTransactionsGet**](TransactionApi.md#BusinessBusinessIdTransactionsGet) | **Get** /business/{businessId}/transactions | 
[**BusinessBusinessIdTransactionsPost**](TransactionApi.md#BusinessBusinessIdTransactionsPost) | **Post** /business/{businessId}/transactions | 
[**TransactionsTransactionIdDelete**](TransactionApi.md#TransactionsTransactionIdDelete) | **Delete** /transactions/{transactionId} | 
[**TransactionsTransactionIdEstimatePost**](TransactionApi.md#TransactionsTransactionIdEstimatePost) | **Post** /transactions/{transactionId}/estimate | 
[**TransactionsTransactionIdExecutePost**](TransactionApi.md#TransactionsTransactionIdExecutePost) | **Post** /transactions/{transactionId}/execute | 
[**TransactionsTransactionIdGet**](TransactionApi.md#TransactionsTransactionIdGet) | **Get** /transactions/{transactionId} | 
[**TransactionsTransactionIdPut**](TransactionApi.md#TransactionsTransactionIdPut) | **Put** /transactions/{transactionId} | 
[**TransactionsTransactionIdReadPost**](TransactionApi.md#TransactionsTransactionIdReadPost) | **Post** /transactions/{transactionId}/read | 
[**TransactionsTransactionIdRestorePut**](TransactionApi.md#TransactionsTransactionIdRestorePut) | **Put** /transactions/{transactionId}/restore | 
[**TransactionsTransactionIdTestPost**](TransactionApi.md#TransactionsTransactionIdTestPost) | **Post** /transactions/{transactionId}/test | 

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

# **BusinessBusinessIdTransactionsExecutionsGet**
> InlineResponse2002 BusinessBusinessIdTransactionsExecutionsGet(ctx, businessId, optional)


Gets a paged list of Transaction Executions, which are records of individual transactions on a blockchain.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **businessId** | [**string**](.md)| The business that you want Transactions from | 
 **optional** | ***TransactionApiBusinessBusinessIdTransactionsExecutionsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionApiBusinessBusinessIdTransactionsExecutionsGetOpts struct
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
 **optional** | ***TransactionApiBusinessBusinessIdTransactionsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TransactionApiBusinessBusinessIdTransactionsGetOpts struct
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

# **TransactionsTransactionIdRestorePut**
> Transaction TransactionsTransactionIdRestorePut(ctx, transactionId)


Undeletes transaction objects

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **transactionId** | [**string**](.md)| The transaction that you want | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
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

