# TransactionExecution

A single execution of a transaction- ie, a function call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** |  | [optional] 
**updated** | **float** |  | [optional] 
**created** | **float** |  | [optional] 
**id** | **str** | internal ID of the transaction execution | [optional] 
**transaction_id** | **str** | internal ID of the transaction | [optional] 
**api_credential_id** | **str** | ID of the API Credential used to execute the transaction. Note, this is not the API Key itself. This will be null if a user initiated the execution and not an API Credential | [optional] 
**user_id** | **str** | The User ID that executed the transaction. This will be null if an API key was used instead of a user token. | [optional] 
**status** | [**ETransactionExecutionStatus**](ETransactionExecutionStatus.md) |  | [optional] 
**chain_transaction_id** | **str** | The ID of the actual chain transaction in the internal chain service. | [optional] 
**completed_timestamp** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.transaction_execution import TransactionExecution

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionExecution from a JSON string
transaction_execution_instance = TransactionExecution.from_json(json)
# print the JSON string representation of the object
print(TransactionExecution.to_json())

# convert the object into a dict
transaction_execution_dict = transaction_execution_instance.to_dict()
# create an instance of TransactionExecution from a dict
transaction_execution_from_dict = TransactionExecution.from_dict(transaction_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


