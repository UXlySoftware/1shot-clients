# openapi_client.TransactionExecutionApi

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**business_business_id_transactions_executions_get**](TransactionExecutionApi.md#business_business_id_transactions_executions_get) | **GET** /business/{businessId}/transactions/executions | 
[**transactions_transaction_id_execute_post**](TransactionExecutionApi.md#transactions_transaction_id_execute_post) | **POST** /transactions/{transactionId}/execute | 
[**transactions_transaction_id_executions_transaction_execution_id_get**](TransactionExecutionApi.md#transactions_transaction_id_executions_transaction_execution_id_get) | **GET** /transactions/{transactionId}/executions/{transactionExecutionId} | 
[**transactions_transaction_id_test_post**](TransactionExecutionApi.md#transactions_transaction_id_test_post) | **POST** /transactions/{transactionId}/test | 


# **business_business_id_transactions_executions_get**
> BusinessBusinessIdTransactionsExecutionsGet200Response business_business_id_transactions_executions_get(business_id, page_size=page_size, page=page, chain_id=chain_id, status=status, escrow_wallet_id=escrow_wallet_id, transaction_id=transaction_id, api_credential_id=api_credential_id, user_id=user_id)

Gets a paged list of transaction executions.

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.business_business_id_transactions_executions_get200_response import BusinessBusinessIdTransactionsExecutionsGet200Response
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
    api_instance = openapi_client.TransactionExecutionApi(api_client)
    business_id = '8a6e0804-2bd0-4672-b79d-d97027f90720' # str | The business that you want transactions from
    page_size = 56 # int |  (optional)
    page = 56 # int |  (optional)
    chain_id = '43113' # str |  (optional)
    status = 56 # int |  (optional)
    escrow_wallet_id = '8a6e0804-2bd0-4672-b79d-d97027f90720' # str |  (optional)
    transaction_id = '8a6e0804-2bd0-4672-b79d-d97027f90720' # str |  (optional)
    api_credential_id = '8a6e0804-2bd0-4672-b79d-d97027f90720' # str |  (optional)
    user_id = '8a6e0804-2bd0-4672-b79d-d97027f90720' # str |  (optional)

    try:
        api_response = api_instance.business_business_id_transactions_executions_get(business_id, page_size=page_size, page=page, chain_id=chain_id, status=status, escrow_wallet_id=escrow_wallet_id, transaction_id=transaction_id, api_credential_id=api_credential_id, user_id=user_id)
        print("The response of TransactionExecutionApi->business_business_id_transactions_executions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionExecutionApi->business_business_id_transactions_executions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **business_id** | **str**| The business that you want transactions from | 
 **page_size** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 
 **chain_id** | **str**|  | [optional] 
 **status** | **int**|  | [optional] 
 **escrow_wallet_id** | **str**|  | [optional] 
 **transaction_id** | **str**|  | [optional] 
 **api_credential_id** | **str**|  | [optional] 
 **user_id** | **str**|  | [optional] 

### Return type

[**BusinessBusinessIdTransactionsExecutionsGet200Response**](BusinessBusinessIdTransactionsExecutionsGet200Response.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a paged response of transaction execution objects. |  -  |
**500** | Database has encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactions_transaction_id_execute_post**
> TransactionExecution transactions_transaction_id_execute_post(transaction_id, transactions_transaction_id_test_post_request)

Starts the execution of the transaction

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
    api_instance = openapi_client.TransactionExecutionApi(api_client)
    transaction_id = '4b4bab2d-673d-4b91-8e09-f1402962cd3e' # str | 
    transactions_transaction_id_test_post_request = openapi_client.TransactionsTransactionIdTestPostRequest() # TransactionsTransactionIdTestPostRequest | 

    try:
        api_response = api_instance.transactions_transaction_id_execute_post(transaction_id, transactions_transaction_id_test_post_request)
        print("The response of TransactionExecutionApi->transactions_transaction_id_execute_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionExecutionApi->transactions_transaction_id_execute_post: %s\n" % e)
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

# **transactions_transaction_id_executions_transaction_execution_id_get**
> TransactionExecution transactions_transaction_id_executions_transaction_execution_id_get(transaction_id, transaction_execution_id)

Gets all the executions of the transaction

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.transaction_execution import TransactionExecution
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
    api_instance = openapi_client.TransactionExecutionApi(api_client)
    transaction_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb' # str | The transaction that you want
    transaction_execution_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb' # str | The transaction execution that you want

    try:
        api_response = api_instance.transactions_transaction_id_executions_transaction_execution_id_get(transaction_id, transaction_execution_id)
        print("The response of TransactionExecutionApi->transactions_transaction_id_executions_transaction_execution_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionExecutionApi->transactions_transaction_id_executions_transaction_execution_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| The transaction that you want | 
 **transaction_execution_id** | **str**| The transaction execution that you want | 

### Return type

[**TransactionExecution**](TransactionExecution.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the specific requested transaction execution |  -  |
**500** | Database has encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
    api_instance = openapi_client.TransactionExecutionApi(api_client)
    transaction_id = '4b4bab2d-673d-4b91-8e09-f1402962cd3e' # str | 
    transactions_transaction_id_test_post_request = openapi_client.TransactionsTransactionIdTestPostRequest() # TransactionsTransactionIdTestPostRequest | 

    try:
        api_response = api_instance.transactions_transaction_id_test_post(transaction_id, transactions_transaction_id_test_post_request)
        print("The response of TransactionExecutionApi->transactions_transaction_id_test_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionExecutionApi->transactions_transaction_id_test_post: %s\n" % e)
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

