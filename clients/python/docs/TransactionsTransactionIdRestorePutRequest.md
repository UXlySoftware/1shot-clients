# TransactionsTransactionIdRestorePutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reward_ids** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.transactions_transaction_id_restore_put_request import TransactionsTransactionIdRestorePutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionsTransactionIdRestorePutRequest from a JSON string
transactions_transaction_id_restore_put_request_instance = TransactionsTransactionIdRestorePutRequest.from_json(json)
# print the JSON string representation of the object
print(TransactionsTransactionIdRestorePutRequest.to_json())

# convert the object into a dict
transactions_transaction_id_restore_put_request_dict = transactions_transaction_id_restore_put_request_instance.to_dict()
# create an instance of TransactionsTransactionIdRestorePutRequest from a dict
transactions_transaction_id_restore_put_request_from_dict = TransactionsTransactionIdRestorePutRequest.from_dict(transactions_transaction_id_restore_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


