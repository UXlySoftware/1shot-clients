# SolidityStructParam

A single defined parameter for a transaction. This is

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Internal ID of the parameter. | [optional] 
**struct_id** | **str** | Internal ID struct that owns this parameter. | [optional] 
**name** | **str** | A name to assign to the parameter. You will pass values to the parameter using this name. For clarity, this should be the name of the parameter on the underlying contract method, but you can set it as whatever you want. | [optional] 
**type** | [**ESolidityAbiParameterType**](ESolidityAbiParameterType.md) |  | [optional] 
**type_struct_id** | **str** | The ID of the sub-struct if the type is \&quot;struct\&quot; | [optional] 
**type_size** | **int** | The size of the type for int, uint and bytes. Also used for fixed and ufixed; it is the first size of the type. This must follow the rules for the type; valid values for bytes are 1 to 32, for others is 256 % 8. | [optional] 
**type_size2** | **int** | The second size for the type. Only used for fixed and ufixed types. | [optional] 
**is_array** | **bool** | Set to true if the parameter takes an array of the type. | [optional] 
**array_size** | **int** | If the type array takes a fixed number of elements (IE, 5), this will be set. | [optional] 
**index** | **int** | The index of the parameter in the contract method. This starts at 0 and must not skip numbers | [optional] 
**value** | **str** | The static value of the parameter, stored in the transaction itself. All parameters have to have a value at execution, but it can be a mix of static and dynamic parameters | [optional] 
**type_struct** | [**SolidityStructParamTypeStruct**](SolidityStructParamTypeStruct.md) |  | [optional] 

## Example

```python
from openapi_client.models.solidity_struct_param import SolidityStructParam

# TODO update the JSON string below
json = "{}"
# create an instance of SolidityStructParam from a JSON string
solidity_struct_param_instance = SolidityStructParam.from_json(json)
# print the JSON string representation of the object
print(SolidityStructParam.to_json())

# convert the object into a dict
solidity_struct_param_dict = solidity_struct_param_instance.to_dict()
# create an instance of SolidityStructParam from a dict
solidity_struct_param_from_dict = SolidityStructParam.from_dict(solidity_struct_param_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


