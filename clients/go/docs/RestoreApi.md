# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TransactionsTransactionIdRestorePut**](RestoreApi.md#TransactionsTransactionIdRestorePut) | **Put** /transactions/{transactionId}/restore | 

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

