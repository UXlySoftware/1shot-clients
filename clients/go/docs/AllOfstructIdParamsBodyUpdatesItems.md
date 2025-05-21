# AllOfstructIdParamsBodyUpdatesItems

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [default to null]
**Name** | **string** |  | [optional] [default to null]
**Description** | **string** |  | [optional] [default to null]
**Type_** | [***ESolidityAbiParameterType**](ESolidityAbiParameterType.md) |  | [optional] [default to null]
**Index** | **int32** | This is the relative index in the contract function. It should start at 0, and must not skip any numbers. | [optional] [default to null]
**Value** | **string** | This is an optional, static value for the parameter. If you set this, you will never be required or able to pass a value for this parameter when you execute the transaction, it will use the set value. This is useful for creating dedicated endpoints with specific functionalities, particularly when tied to API Credentials that can only execute specific transactions. For example, you can have a &#x27;transfer&#x27; transaction that is hardcoded to a specific amount, or to a specific receiver address. | [optional] [default to null]
**TypeSize** | **float64** | This is an optional field that specifies the main size of the Solidity type. For example, if your type is uint, by default it is a uint256. If you want a uint8 instead, set this value to 8. It works for int, uint, fixed, ufixed, and bytes types. Valid values for bytes are 1 to 32, for others it is 256 % 8 | [optional] [default to null]
**TypeSize2** | **int32** | This is identical to typeSize but only used for fixed and ufixed sizes. This is the second size of the fixed field, for example, fixed(typeSize)x(typeSize2). | [optional] [default to null]
**IsArray** | **bool** | If this parameter is an array type set this to true. By default, arrays can be of any size so you don&#x27;t need to set arraySize. | [optional] [default to null]
**ArraySize** | **int32** | If the parameter is a fixed size array, set this value. | [optional] [default to null]
**TypeStructId** | **string** | The ID of the sub-struct if the type is \&quot;struct\&quot;. When creating a param, you must set only one of either typeStructId (to re-use an existing Solidity Struct) or typeStruct (creates a new struct for the param) | [optional] [default to null]
**TypeStruct** | [***Object**](.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

