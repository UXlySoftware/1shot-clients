# BusinessBusinessIdTransactionsExecutionsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | Which page to return. This is 1 indexed, and default to the first page, 1 | [optional] 
**page_size** | **int** | The size of the page to return. Defaults to 25 | [optional] 
**total_results** | **int** | The total number of results returned by a paged response | [optional] 
**response** | [**List[TransactionExecution]**](TransactionExecution.md) |  | [optional] 

## Example

```python
from openapi_client.models.business_business_id_transactions_executions_get200_response import BusinessBusinessIdTransactionsExecutionsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessBusinessIdTransactionsExecutionsGet200Response from a JSON string
business_business_id_transactions_executions_get200_response_instance = BusinessBusinessIdTransactionsExecutionsGet200Response.from_json(json)
# print the JSON string representation of the object
print(BusinessBusinessIdTransactionsExecutionsGet200Response.to_json())

# convert the object into a dict
business_business_id_transactions_executions_get200_response_dict = business_business_id_transactions_executions_get200_response_instance.to_dict()
# create an instance of BusinessBusinessIdTransactionsExecutionsGet200Response from a dict
business_business_id_transactions_executions_get200_response_from_dict = BusinessBusinessIdTransactionsExecutionsGet200Response.from_dict(business_business_id_transactions_executions_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


