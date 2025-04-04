# openapi_client.TransactionApi

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**business_business_id_transactions_executions_get**](TransactionApi.md#business_business_id_transactions_executions_get) | **GET** /business/{businessId}/transactions/executions | 
[**business_business_id_transactions_get**](TransactionApi.md#business_business_id_transactions_get) | **GET** /business/{businessId}/transactions | 
[**business_business_id_transactions_post**](TransactionApi.md#business_business_id_transactions_post) | **POST** /business/{businessId}/transactions | 
[**transactions_transaction_id_delete**](TransactionApi.md#transactions_transaction_id_delete) | **DELETE** /transactions/{transactionId} | 
[**transactions_transaction_id_executions_transaction_execution_id_get**](TransactionApi.md#transactions_transaction_id_executions_transaction_execution_id_get) | **GET** /transactions/{transactionId}/executions/{transactionExecutionId} | 
[**transactions_transaction_id_get**](TransactionApi.md#transactions_transaction_id_get) | **GET** /transactions/{transactionId} | 
[**transactions_transaction_id_put**](TransactionApi.md#transactions_transaction_id_put) | **PUT** /transactions/{transactionId} | 
[**transactions_transaction_id_restore_put**](TransactionApi.md#transactions_transaction_id_restore_put) | **PUT** /transactions/{transactionId}/restore | 


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
    api_instance = openapi_client.TransactionApi(api_client)
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
        print("The response of TransactionApi->business_business_id_transactions_executions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->business_business_id_transactions_executions_get: %s\n" % e)
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

# **business_business_id_transactions_get**
> BusinessBusinessIdTransactionsGet200Response business_business_id_transactions_get(business_id, page_size=page_size, page=page, chain_id=chain_id, name=name, status=status)

Lists transactions for a business

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.business_business_id_transactions_get200_response import BusinessBusinessIdTransactionsGet200Response
from openapi_client.models.e_deleted_status_selector import EDeletedStatusSelector
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
    api_instance = openapi_client.TransactionApi(api_client)
    business_id = '8a6e0804-2bd0-4672-b79d-d97027f90720' # str | The business that you want transactions from
    page_size = 56 # int |  (optional)
    page = 56 # int |  (optional)
    chain_id = '43113' # str |  (optional)
    name = 'Best Transaction Ever' # str |  (optional)
    status = openapi_client.EDeletedStatusSelector() # EDeletedStatusSelector |  (optional)

    try:
        api_response = api_instance.business_business_id_transactions_get(business_id, page_size=page_size, page=page, chain_id=chain_id, name=name, status=status)
        print("The response of TransactionApi->business_business_id_transactions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->business_business_id_transactions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **business_id** | **str**| The business that you want transactions from | 
 **page_size** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 
 **chain_id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **status** | [**EDeletedStatusSelector**](.md)|  | [optional] 

### Return type

[**BusinessBusinessIdTransactionsGet200Response**](BusinessBusinessIdTransactionsGet200Response.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of transaction objects. |  -  |
**500** | Database has encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **business_business_id_transactions_post**
> List[Transaction] business_business_id_transactions_post(business_id, business_business_id_transactions_post_request)

Create a new transaction. Transactions represent a predefined call on a deployed contract.

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.business_business_id_transactions_post_request import BusinessBusinessIdTransactionsPostRequest
from openapi_client.models.transaction import Transaction
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
    api_instance = openapi_client.TransactionApi(api_client)
    business_id = '8a6e0804-2bd0-4672-b79d-d97027f90720' # str | The internal uuid of the Business you are interested in
    business_business_id_transactions_post_request = openapi_client.BusinessBusinessIdTransactionsPostRequest() # BusinessBusinessIdTransactionsPostRequest | 

    try:
        api_response = api_instance.business_business_id_transactions_post(business_id, business_business_id_transactions_post_request)
        print("The response of TransactionApi->business_business_id_transactions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->business_business_id_transactions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **business_id** | **str**| The internal uuid of the Business you are interested in | 
 **business_business_id_transactions_post_request** | [**BusinessBusinessIdTransactionsPostRequest**](BusinessBusinessIdTransactionsPostRequest.md)|  | 

### Return type

[**List[Transaction]**](Transaction.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the transaction object. |  -  |
**500** | Database has encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactions_transaction_id_delete**
> transactions_transaction_id_delete(transaction_id)

Deletes transaction

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
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
    api_instance = openapi_client.TransactionApi(api_client)
    transaction_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb' # str | 

    try:
        api_instance.transactions_transaction_id_delete(transaction_id)
    except Exception as e:
        print("Exception when calling TransactionApi->transactions_transaction_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

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
    api_instance = openapi_client.TransactionApi(api_client)
    transaction_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb' # str | The transaction that you want
    transaction_execution_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb' # str | The transaction execution that you want

    try:
        api_response = api_instance.transactions_transaction_id_executions_transaction_execution_id_get(transaction_id, transaction_execution_id)
        print("The response of TransactionApi->transactions_transaction_id_executions_transaction_execution_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transactions_transaction_id_executions_transaction_execution_id_get: %s\n" % e)
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

# **transactions_transaction_id_get**
> Transaction transactions_transaction_id_get(transaction_id)

Gets transaction by ID

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.transaction import Transaction
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
    api_instance = openapi_client.TransactionApi(api_client)
    transaction_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb' # str | The transaction that you want

    try:
        api_response = api_instance.transactions_transaction_id_get(transaction_id)
        print("The response of TransactionApi->transactions_transaction_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transactions_transaction_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| The transaction that you want | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a transaction objects. |  -  |
**500** | Database has encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
    api_instance = openapi_client.TransactionApi(api_client)
    transaction_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb' # str | The transaction that you want to update
    transactions_transaction_id_put_request = openapi_client.TransactionsTransactionIdPutRequest() # TransactionsTransactionIdPutRequest | 

    try:
        api_response = api_instance.transactions_transaction_id_put(transaction_id, transactions_transaction_id_put_request)
        print("The response of TransactionApi->transactions_transaction_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transactions_transaction_id_put: %s\n" % e)
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

# **transactions_transaction_id_restore_put**
> List[Transaction] transactions_transaction_id_restore_put(transaction_id, transactions_transaction_id_restore_put_request)

Undeletes transaction objects

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.transaction import Transaction
from openapi_client.models.transactions_transaction_id_restore_put_request import TransactionsTransactionIdRestorePutRequest
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
    api_instance = openapi_client.TransactionApi(api_client)
    transaction_id = 'f4e3d951-85ad-42fa-8e21-75545145c7cb' # str | The transaction that you want
    transactions_transaction_id_restore_put_request = openapi_client.TransactionsTransactionIdRestorePutRequest() # TransactionsTransactionIdRestorePutRequest | 

    try:
        api_response = api_instance.transactions_transaction_id_restore_put(transaction_id, transactions_transaction_id_restore_put_request)
        print("The response of TransactionApi->transactions_transaction_id_restore_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransactionApi->transactions_transaction_id_restore_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| The transaction that you want | 
 **transactions_transaction_id_restore_put_request** | [**TransactionsTransactionIdRestorePutRequest**](TransactionsTransactionIdRestorePutRequest.md)|  | 

### Return type

[**List[Transaction]**](Transaction.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the transaction object. |  -  |
**500** | Database has encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

