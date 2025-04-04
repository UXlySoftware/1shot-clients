# openapi_client.TestApi

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transactions_transaction_id_test_post**](TestApi.md#transactions_transaction_id_test_post) | **POST** /transactions/{transactionId}/test | 


# **transactions_transaction_id_test_post**
> TransactionExecution transactions_transaction_id_test_post(transaction_id, transactions_transaction_id_test_post_request)

Simulates the execution of a transaction

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.transaction_execution import TransactionExecution
from openapi_client.models.transactions_transaction_id_test_post_request import TransactionsTransactionIdTestPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.1shotapi.dev/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.1shotapi.dev/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TestApi(api_client)
    transaction_id = '4b4bab2d-673d-4b91-8e09-f1402962cd3e' # str | 
    transactions_transaction_id_test_post_request = openapi_client.TransactionsTransactionIdTestPostRequest() # TransactionsTransactionIdTestPostRequest | 

    try:
        api_response = api_instance.transactions_transaction_id_test_post(transaction_id, transactions_transaction_id_test_post_request)
        print("The response of TestApi->transactions_transaction_id_test_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->transactions_transaction_id_test_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**|  | 
 **transactions_transaction_id_test_post_request** | [**TransactionsTransactionIdTestPostRequest**](TransactionsTransactionIdTestPostRequest.md)|  | 

### Return type

[**TransactionExecution**](TransactionExecution.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Database has encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

