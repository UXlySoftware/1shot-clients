# openapi_client.UpdateApi

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transactions_transaction_id_put**](UpdateApi.md#transactions_transaction_id_put) | **PUT** /transactions/{transactionId} | 


# **transactions_transaction_id_put**
> Transaction transactions_transaction_id_put(transaction_id, transactions_transaction_id_put_request)

### Example


```python
import openapi_client
from openapi_client.models.transaction import Transaction
from openapi_client.models.transactions_transaction_id_put_request import TransactionsTransactionIdPutRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.1shotapi.dev/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.1shotapi.dev/v0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateApi(api_client)
    transaction_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb' # str | The transaction that you want to update
    transactions_transaction_id_put_request = openapi_client.TransactionsTransactionIdPutRequest() # TransactionsTransactionIdPutRequest | 

    try:
        api_response = api_instance.transactions_transaction_id_put(transaction_id, transactions_transaction_id_put_request)
        print("The response of UpdateApi->transactions_transaction_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateApi->transactions_transaction_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| The transaction that you want to update | 
 **transactions_transaction_id_put_request** | [**TransactionsTransactionIdPutRequest**](TransactionsTransactionIdPutRequest.md)|  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a transaction object. |  -  |
**500** | Database has encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

