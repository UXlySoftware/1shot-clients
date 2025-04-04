# EscrowWallet

Escrow wallet stored by chain service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updated** | **float** |  | [optional] 
**created** | **float** |  | [optional] 
**id** | **str** | internal ID of the escrowWallet object | [optional] 
**account_address** | **str** | string address of a wallet insight platform holds keys for | [optional] 
**business_id** | **str** | The business ID that owns this wallet. Admin escrow wallets will not have this value. An escrow wallet will have either a user ID or a business ID. | [optional] 
**user_id** | **str** | The User ID of the person that owns this wallet. Admin escrow wallets will not have this value. An escrow wallet will have either a user ID or a business ID. | [optional] 
**chain_id** | **float** | Id of a chain | [optional] 
**name** | **str** | The name of the escrow wallet. | [optional] 
**description** | **str** | Optional description of the escrow wallet, can be used to describe it&#39;s purpose. | [optional] 
**is_admin** | **bool** | Whether or not the escrow wallet is an admin escrow wallet, used for internal purposes. | [optional] 
**account_balance_details** | [**EscrowWalletAllOfAccountBalanceDetails**](EscrowWalletAllOfAccountBalanceDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.escrow_wallet import EscrowWallet

# TODO update the JSON string below
json = "{}"
# create an instance of EscrowWallet from a JSON string
escrow_wallet_instance = EscrowWallet.from_json(json)
# print the JSON string representation of the object
print(EscrowWallet.to_json())

# convert the object into a dict
escrow_wallet_dict = escrow_wallet_instance.to_dict()
# create an instance of EscrowWallet from a dict
escrow_wallet_from_dict = EscrowWallet.from_dict(escrow_wallet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


