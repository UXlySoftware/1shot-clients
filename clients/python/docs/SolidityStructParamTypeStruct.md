# SolidityStructParamTypeStruct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Internal ID of the struct. | [optional] 
**business_id** | **str** | Internal ID of the business that owns this struct | [optional] 
**name** | **str** | The name of the struct. Structs are used to define the parameters of a transaction, but these structs don&#39;t have names. | [optional] 
**params** | [**List[SolidityStructParam]**](SolidityStructParam.md) |  | [optional] 
**deleted** | **bool** |  | [optional] 
**updated** | **float** |  | [optional] 
**created** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.solidity_struct_param_type_struct import SolidityStructParamTypeStruct

# TODO update the JSON string below
json = "{}"
# create an instance of SolidityStructParamTypeStruct from a JSON string
solidity_struct_param_type_struct_instance = SolidityStructParamTypeStruct.from_json(json)
# print the JSON string representation of the object
print(SolidityStructParamTypeStruct.to_json())

# convert the object into a dict
solidity_struct_param_type_struct_dict = solidity_struct_param_type_struct_instance.to_dict()
# create an instance of SolidityStructParamTypeStruct from a dict
solidity_struct_param_type_struct_from_dict = SolidityStructParamTypeStruct.from_dict(solidity_struct_param_type_struct_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


