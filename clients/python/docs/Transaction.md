# Transaction

A new transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** |  | [optional] 
**updated** | **float** |  | [optional] 
**created** | **float** |  | [optional] 
**id** | **str** | internal ID of the transaction object | [optional] 
**business_id** | **str** | The business that owns this transaction | [optional] 
**chain** | **float** | Id of a chain | [optional] 
**contract_address** | **str** | string address of contract | [optional] 
**escrow_wallet_id** | **str** | Name of the escrowWallet that owns the transaction | [optional] 
**name** | **str** | Name of transaction | [optional] 
**description** | **str** | Description of transaction | [optional] 
**function_name** | **str** | Name of the function on the contract to call for this transaction | [optional] 
**params** | [**List[SolidityStructParam]**](SolidityStructParam.md) |  | [optional] 
**callback_url** | **str** |  | [optional] 
**public_key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.transaction import Transaction

# TODO update the JSON string below
json = "{}"
# create an instance of Transaction from a JSON string
transaction_instance = Transaction.from_json(json)
# print the JSON string representation of the object
print(Transaction.to_json())

# convert the object into a dict
transaction_dict = transaction_instance.to_dict()
# create an instance of Transaction from a dict
transaction_from_dict = Transaction.from_dict(transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


