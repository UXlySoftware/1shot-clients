# EntityBookKeeping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updated** | **float** |  | [optional] 
**created** | **float** |  | [optional] 
**deleted** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.entity_book_keeping import EntityBookKeeping

# TODO update the JSON string below
json = "{}"
# create an instance of EntityBookKeeping from a JSON string
entity_book_keeping_instance = EntityBookKeeping.from_json(json)
# print the JSON string representation of the object
print(EntityBookKeeping.to_json())

# convert the object into a dict
entity_book_keeping_dict = entity_book_keeping_instance.to_dict()
# create an instance of EntityBookKeeping from a dict
entity_book_keeping_from_dict = EntityBookKeeping.from_dict(entity_book_keeping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


