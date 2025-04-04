# openapi_client.EscrowWalletsApi

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**business_business_id_wallets_get**](EscrowWalletsApi.md#business_business_id_wallets_get) | **GET** /business/{businessId}/wallets | 
[**business_business_id_wallets_post**](EscrowWalletsApi.md#business_business_id_wallets_post) | **POST** /business/{businessId}/wallets | 
[**wallets_escrow_wallet_id_delete**](EscrowWalletsApi.md#wallets_escrow_wallet_id_delete) | **DELETE** /wallets/{escrowWalletId} | 
[**wallets_escrow_wallet_id_get**](EscrowWalletsApi.md#wallets_escrow_wallet_id_get) | **GET** /wallets/{escrowWalletId} | 
[**wallets_escrow_wallet_id_put**](EscrowWalletsApi.md#wallets_escrow_wallet_id_put) | **PUT** /wallets/{escrowWalletId} | 


# **business_business_id_wallets_get**
> BusinessBusinessIdWalletsGet200Response business_business_id_wallets_get(business_id, chain_id=chain_id, page_size=page_size, page=page)

Lists escrow wallets for the business- NOT BusinessEscrowWallets. These are almost identical but EscrowWallet has more stuff.

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.business_business_id_wallets_get200_response import BusinessBusinessIdWalletsGet200Response
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
    api_instance = openapi_client.EscrowWalletsApi(api_client)
    business_id = 'business_id_example' # str | The internal uuid of the Business you are interested in
    chain_id = 56 # int | The specific chain to get the wallets for (optional)
    page_size = 56 # int |  (optional)
    page = 56 # int |  (optional)

    try:
        api_response = api_instance.business_business_id_wallets_get(business_id, chain_id=chain_id, page_size=page_size, page=page)
        print("The response of EscrowWalletsApi->business_business_id_wallets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EscrowWalletsApi->business_business_id_wallets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **business_id** | **str**| The internal uuid of the Business you are interested in | 
 **chain_id** | **int**| The specific chain to get the wallets for | [optional] 
 **page_size** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 

### Return type

[**BusinessBusinessIdWalletsGet200Response**](BusinessBusinessIdWalletsGet200Response.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | The authentication token does not have permission to access this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **business_business_id_wallets_post**
> EscrowWallet business_business_id_wallets_post(business_id, business_business_id_wallets_post_request)

Adds an escrow wallet to a chain for a business

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.business_business_id_wallets_post_request import BusinessBusinessIdWalletsPostRequest
from openapi_client.models.escrow_wallet import EscrowWallet
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
    api_instance = openapi_client.EscrowWalletsApi(api_client)
    business_id = 'business_id_example' # str | The internal uuid of the Business you are interested in
    business_business_id_wallets_post_request = openapi_client.BusinessBusinessIdWalletsPostRequest() # BusinessBusinessIdWalletsPostRequest | 

    try:
        api_response = api_instance.business_business_id_wallets_post(business_id, business_business_id_wallets_post_request)
        print("The response of EscrowWalletsApi->business_business_id_wallets_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EscrowWalletsApi->business_business_id_wallets_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **business_id** | **str**| The internal uuid of the Business you are interested in | 
 **business_business_id_wallets_post_request** | [**BusinessBusinessIdWalletsPostRequest**](BusinessBusinessIdWalletsPostRequest.md)|  | 

### Return type

[**EscrowWallet**](EscrowWallet.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the escrow wallet object. |  -  |
**500** | Database has encountered an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wallets_escrow_wallet_id_delete**
> WalletsEscrowWalletIdDelete200Response wallets_escrow_wallet_id_delete(escrow_wallet_id)

Deletes an escrow wallet by ID. Must have permissions to the owning business.

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.wallets_escrow_wallet_id_delete200_response import WalletsEscrowWalletIdDelete200Response
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
    api_instance = openapi_client.EscrowWalletsApi(api_client)
    escrow_wallet_id = 'escrow_wallet_id_example' # str | The ID of the escrow wallet

    try:
        api_response = api_instance.wallets_escrow_wallet_id_delete(escrow_wallet_id)
        print("The response of EscrowWalletsApi->wallets_escrow_wallet_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EscrowWalletsApi->wallets_escrow_wallet_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **escrow_wallet_id** | **str**| The ID of the escrow wallet | 

### Return type

[**WalletsEscrowWalletIdDelete200Response**](WalletsEscrowWalletIdDelete200Response.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | The authentication token does not have permission to access this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wallets_escrow_wallet_id_get**
> EscrowWallet wallets_escrow_wallet_id_get(escrow_wallet_id, include_balances=include_balances)

Gets an escrow wallet by the ID. Doesn't matter what chain it's on.

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.escrow_wallet import EscrowWallet
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
    api_instance = openapi_client.EscrowWalletsApi(api_client)
    escrow_wallet_id = 'escrow_wallet_id_example' # str | The ID of the escrow wallet
    include_balances = True # bool | Set to \"true\" to return the balance information for the escrow wallet. Includes only the native token balance. (optional)

    try:
        api_response = api_instance.wallets_escrow_wallet_id_get(escrow_wallet_id, include_balances=include_balances)
        print("The response of EscrowWalletsApi->wallets_escrow_wallet_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EscrowWalletsApi->wallets_escrow_wallet_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **escrow_wallet_id** | **str**| The ID of the escrow wallet | 
 **include_balances** | **bool**| Set to \&quot;true\&quot; to return the balance information for the escrow wallet. Includes only the native token balance. | [optional] 

### Return type

[**EscrowWallet**](EscrowWallet.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | The authentication token does not have permission to access this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wallets_escrow_wallet_id_put**
> EscrowWallet wallets_escrow_wallet_id_put(escrow_wallet_id, wallets_escrow_wallet_id_put_request)

Updates an escrow wallet. Will only update properties that are not null

### Example

* OAuth Authentication (OAuth2ClientCredentials):

```python
import openapi_client
from openapi_client.models.escrow_wallet import EscrowWallet
from openapi_client.models.wallets_escrow_wallet_id_put_request import WalletsEscrowWalletIdPutRequest
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
    api_instance = openapi_client.EscrowWalletsApi(api_client)
    escrow_wallet_id = 'escrow_wallet_id_example' # str | The ID of the escrow wallet
    wallets_escrow_wallet_id_put_request = openapi_client.WalletsEscrowWalletIdPutRequest() # WalletsEscrowWalletIdPutRequest | 

    try:
        api_response = api_instance.wallets_escrow_wallet_id_put(escrow_wallet_id, wallets_escrow_wallet_id_put_request)
        print("The response of EscrowWalletsApi->wallets_escrow_wallet_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EscrowWalletsApi->wallets_escrow_wallet_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **escrow_wallet_id** | **str**| The ID of the escrow wallet | 
 **wallets_escrow_wallet_id_put_request** | [**WalletsEscrowWalletIdPutRequest**](WalletsEscrowWalletIdPutRequest.md)|  | 

### Return type

[**EscrowWallet**](EscrowWallet.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | The authentication token does not have permission to access this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

