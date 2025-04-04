# BusinessBusinessIdTransactionsPostRequestParamsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**type** | [**ESolidityAbiParameterType**](ESolidityAbiParameterType.md) |  | 
**index** | **int** | This is the relative index in the contract function. It should start at 0, and must not skip any numbers. | 
**value** | **str** | This is an optional value. This | [optional] 

## Example

```python
from openapi_client.models.business_business_id_transactions_post_request_params_inner import BusinessBusinessIdTransactionsPostRequestParamsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessBusinessIdTransactionsPostRequestParamsInner from a JSON string
business_business_id_transactions_post_request_params_inner_instance = BusinessBusinessIdTransactionsPostRequestParamsInner.from_json(json)
# print the JSON string representation of the object
print(BusinessBusinessIdTransactionsPostRequestParamsInner.to_json())

# convert the object into a dict
business_business_id_transactions_post_request_params_inner_dict = business_business_id_transactions_post_request_params_inner_instance.to_dict()
# create an instance of BusinessBusinessIdTransactionsPostRequestParamsInner from a dict
business_business_id_transactions_post_request_params_inner_from_dict = BusinessBusinessIdTransactionsPostRequestParamsInner.from_dict(business_business_id_transactions_post_request_params_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


