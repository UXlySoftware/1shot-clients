# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TransactionsTransactionIdTestPost**](TestApi.md#TransactionsTransactionIdTestPost) | **Post** /transactions/{transactionId}/test | 

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

