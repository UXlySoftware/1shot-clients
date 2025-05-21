# {{classname}}

All URIs are relative to *https://api.1shotapi.dev/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BusinessBusinessIdWalletsGet**](EscrowWalletsApi.md#BusinessBusinessIdWalletsGet) | **Get** /business/{businessId}/wallets | 
[**BusinessBusinessIdWalletsPost**](EscrowWalletsApi.md#BusinessBusinessIdWalletsPost) | **Post** /business/{businessId}/wallets | 
[**WalletsEscrowWalletIdDelete**](EscrowWalletsApi.md#WalletsEscrowWalletIdDelete) | **Delete** /wallets/{escrowWalletId} | 
[**WalletsEscrowWalletIdGet**](EscrowWalletsApi.md#WalletsEscrowWalletIdGet) | **Get** /wallets/{escrowWalletId} | 
[**WalletsEscrowWalletIdPut**](EscrowWalletsApi.md#WalletsEscrowWalletIdPut) | **Put** /wallets/{escrowWalletId} | 

# **BusinessBusinessIdWalletsGet**
> InlineResponse2003 BusinessBusinessIdWalletsGet(ctx, businessId, optional)


Lists escrow wallets for the business- NOT BusinessEscrowWallets. These are almost identical but EscrowWallet has more stuff.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **businessId** | [**string**](.md)| The internal uuid of the Business you are interested in | 
 **optional** | ***EscrowWalletsApiBusinessBusinessIdWalletsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a EscrowWalletsApiBusinessBusinessIdWalletsGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **chainId** | [**optional.Interface of EChain**](.md)| The specific chain to get the wallets for | 
 **pageSize** | [**optional.Interface of int32**](.md)|  | 
 **page** | [**optional.Interface of int32**](.md)|  | 
 **name** | **optional.String**| Filters on the name of the escrow wallet. | 

### Return type

[**InlineResponse2003**](inline_response_200_3.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BusinessBusinessIdWalletsPost**
> EscrowWallet BusinessBusinessIdWalletsPost(ctx, body, businessId)


Creates a new Escrow Wallet. Escrow Wallets are owned by a single Business and are linked a single Chain.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**BusinessIdWalletsBody**](BusinessIdWalletsBody.md)|  | 
  **businessId** | [**string**](.md)| The internal uuid of the Business you are interested in | 

### Return type

[**EscrowWallet**](EscrowWallet.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletsEscrowWalletIdDelete**
> InlineResponse2004 WalletsEscrowWalletIdDelete(ctx, escrowWalletId)


Deletes an escrow wallet with the provided ID. The API Credential must have Admin level permissions on the Business that owns this Escrow Wallet, and the wallet must be near empty.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **escrowWalletId** | [**string**](.md)| The ID of the escrow wallet | 

### Return type

[**InlineResponse2004**](inline_response_200_4.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletsEscrowWalletIdGet**
> EscrowWallet WalletsEscrowWalletIdGet(ctx, escrowWalletId, optional)


Gets an escrow wallet by the ID. Doesn't matter what chain it's on.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **escrowWalletId** | [**string**](.md)| The ID of the escrow wallet | 
 **optional** | ***EscrowWalletsApiWalletsEscrowWalletIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a EscrowWalletsApiWalletsEscrowWalletIdGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **includeBalances** | **optional.Bool**| Set to \&quot;true\&quot; to return the balance information for the escrow wallet. Includes only the native token balance. | 

### Return type

[**EscrowWallet**](EscrowWallet.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletsEscrowWalletIdPut**
> EscrowWallet WalletsEscrowWalletIdPut(ctx, body, escrowWalletId)


Updates an escrow wallet. Will only update properties that are not null

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**WalletsEscrowWalletIdBody**](WalletsEscrowWalletIdBody.md)|  | 
  **escrowWalletId** | [**string**](.md)| The ID of the escrow wallet | 

### Return type

[**EscrowWallet**](EscrowWallet.md)

### Authorization

[OAuth2ClientCredentials](../README.md#OAuth2ClientCredentials)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

