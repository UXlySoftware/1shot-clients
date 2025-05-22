# EscrowWallet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [default to null]
**AccountAddress** | **string** |  | [default to null]
**BusinessId** | **string** |  | [default to null]
**UserId** | **string** | The User ID of the person that owns this wallet. Admin escrow wallets will not have this value. An escrow wallet will have either a user ID or a business ID. | [default to null]
**ChainId** | [***EChain**](EChain.md) |  | [default to null]
**Name** | **string** | The name of the escrow wallet. | [default to null]
**Description** | **string** | Optional description of the escrow wallet, can be used to describe its purpose. | [optional] [default to null]
**IsAdmin** | **bool** | Whether or not the escrow wallet is an admin escrow wallet, used for internal purposes. | [default to null]
**AccountBalanceDetails** | [***Object**](.md) |  | [optional] [default to null]
**Updated** | **float64** |  | [default to null]
**Created** | **float64** |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

