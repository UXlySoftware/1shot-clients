# TransactionsTransactionIdTestPostRequest

You need to provide a value for every parameter in the transaction via the name of the parameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**params** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.transactions_transaction_id_test_post_request import TransactionsTransactionIdTestPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionsTransactionIdTestPostRequest from a JSON string
transactions_transaction_id_test_post_request_instance = TransactionsTransactionIdTestPostRequest.from_json(json)
# print the JSON string representation of the object
print(TransactionsTransactionIdTestPostRequest.to_json())

# convert the object into a dict
transactions_transaction_id_test_post_request_dict = transactions_transaction_id_test_post_request_instance.to_dict()
# create an instance of TransactionsTransactionIdTestPostRequest from a dict
transactions_transaction_id_test_post_request_from_dict = TransactionsTransactionIdTestPostRequest.from_dict(transactions_transaction_id_test_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


