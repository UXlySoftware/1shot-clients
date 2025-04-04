# TransactionsTransactionIdPutRequest

You need to provide a value for every parameter in the transaction via the name of the parameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain** | [**EChain**](EChain.md) |  | [optional] 
**contract_address** | **str** | string address of contract | [optional] 
**escrow_wallet_id** | **str** | The WebhookEndpointId | [optional] 
**name** | **str** | The name of the transaction, used for organization purposes. | [optional] 
**description** | **str** | An optional description of the transaction, for your own reference in the site. | [optional] 
**function_name** | **str** | The name of the function on the contract. This is case-sensitive, so be sure to check your ABI. | [optional] 
**payable** | **bool** | Some transactions can move tokens with them. Check your ABI. | [optional] 
**native_transaction** | **bool** | It is possible to create a \&quot;native\&quot; transaction, one that is part of the EVM and not a smart contract. Set this to true to enable native transaction handling. | [optional] 
**callback_url** | **str** | The desired URL for the callback. This will internally create a Webhook Trigger. Make sure to leave this undefined to not update the field, if you pass null it will clear the webhook. | [optional] 

## Example

```python
from openapi_client.models.transactions_transaction_id_put_request import TransactionsTransactionIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionsTransactionIdPutRequest from a JSON string
transactions_transaction_id_put_request_instance = TransactionsTransactionIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(TransactionsTransactionIdPutRequest.to_json())

# convert the object into a dict
transactions_transaction_id_put_request_dict = transactions_transaction_id_put_request_instance.to_dict()
# create an instance of TransactionsTransactionIdPutRequest from a dict
transactions_transaction_id_put_request_from_dict = TransactionsTransactionIdPutRequest.from_dict(transactions_transaction_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


