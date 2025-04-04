# openapi_client.AuthenticationApi

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_access_token**](AuthenticationApi.md#get_access_token) | **POST** /token | Obtain an OAuth2 access token


# **get_access_token**
> GetAccessToken200Response get_access_token(grant_type=grant_type, client_id=client_id, client_secret=client_secret)

Obtain an OAuth2 access token

This endpoint implements the OAuth2 Client Credentials Flow. Clients must send their `client_id` and `client_secret` in the request body to receive an access token.


### Example


```python
import openapi_client
from openapi_client.models.get_access_token200_response import GetAccessToken200Response
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
    api_instance = openapi_client.AuthenticationApi(api_client)
    grant_type = 'grant_type_example' # str | Must be `client_credentials` (optional)
    client_id = 'client_id_example' # str | A valid API Key value from a defined API Credential (optional)
    client_secret = 'client_secret_example' # str | A valid Secret value from a defined API Credential (optional)

    try:
        # Obtain an OAuth2 access token
        api_response = api_instance.get_access_token(grant_type=grant_type, client_id=client_id, client_secret=client_secret)
        print("The response of AuthenticationApi->get_access_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->get_access_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grant_type** | **str**| Must be &#x60;client_credentials&#x60; | [optional] 
 **client_id** | **str**| A valid API Key value from a defined API Credential | [optional] 
 **client_secret** | **str**| A valid Secret value from a defined API Credential | [optional] 

### Return type

[**GetAccessToken200Response**](GetAccessToken200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully issued an access token |  -  |
**400** | Invalid request (e.g., missing parameters) |  -  |
**401** | Invalid client credentials |  -  |
**403** | The authentication token does not have permission to access this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

