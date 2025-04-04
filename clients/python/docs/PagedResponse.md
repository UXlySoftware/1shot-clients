# PagedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | Which page to return. This is 1 indexed, and default to the first page, 1 | [optional] 
**page_size** | **int** | The size of the page to return. Defaults to 25 | [optional] 
**total_results** | **int** | The total number of results returned by a paged response | [optional] 

## Example

```python
from openapi_client.models.paged_response import PagedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PagedResponse from a JSON string
paged_response_instance = PagedResponse.from_json(json)
# print the JSON string representation of the object
print(PagedResponse.to_json())

# convert the object into a dict
paged_response_dict = paged_response_instance.to_dict()
# create an instance of PagedResponse from a dict
paged_response_from_dict = PagedResponse.from_dict(paged_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


