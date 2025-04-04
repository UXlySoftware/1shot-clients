# BusinessBusinessIdTransactionsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain** | **float** | Id of a chain | 
**contract_address** | **str** | string address of contract | 
**escrow_wallet_id** | **str** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**function_name** | **str** |  | 
**params** | [**List[BusinessBusinessIdTransactionsPostRequestParamsInner]**](BusinessBusinessIdTransactionsPostRequestParamsInner.md) |  | 

## Example

```python
from openapi_client.models.business_business_id_transactions_post_request import BusinessBusinessIdTransactionsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessBusinessIdTransactionsPostRequest from a JSON string
business_business_id_transactions_post_request_instance = BusinessBusinessIdTransactionsPostRequest.from_json(json)
# print the JSON string representation of the object
print(BusinessBusinessIdTransactionsPostRequest.to_json())

# convert the object into a dict
business_business_id_transactions_post_request_dict = business_business_id_transactions_post_request_instance.to_dict()
# create an instance of BusinessBusinessIdTransactionsPostRequest from a dict
business_business_id_transactions_post_request_from_dict = BusinessBusinessIdTransactionsPostRequest.from_dict(business_business_id_transactions_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


