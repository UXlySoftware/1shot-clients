# AccountBalanceDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**ticker** | **str** |  | [optional] 
**chain_id** | **float** | Id of a chain | [optional] 
**token_address** | **str** | string address of contract | [optional] 
**account_address** | **str** | string address of a wallet insight platform holds keys for | [optional] 
**balance** | **str** | The balance of the token as a Big Number String | [optional] 
**decimals** | **int** | The number of decimals in the balance. Determined by the token type. | [optional] 
**usd_value** | **float** | The current value of the token in USD as determined by the latest oracle information | [optional] 
**usd_value_timestamp** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.account_balance_details import AccountBalanceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AccountBalanceDetails from a JSON string
account_balance_details_instance = AccountBalanceDetails.from_json(json)
# print the JSON string representation of the object
print(AccountBalanceDetails.to_json())

# convert the object into a dict
account_balance_details_dict = account_balance_details_instance.to_dict()
# create an instance of AccountBalanceDetails from a dict
account_balance_details_from_dict = AccountBalanceDetails.from_dict(account_balance_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


