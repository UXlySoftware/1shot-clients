# ContractFunctionDescription

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the function. This has to exactly match the name of the function in the Solidity contract, including the case and whitespace | [default to null]
**Description** | **string** | A human provided description of the function, what it does, and a basic overview of its parameters. | [default to null]
**Tags** | **[]string** | An array of tag names provided to the contract function | [default to null]
**Inputs** | [**[]ContractFunctionParamDescription**](ContractFunctionParamDescription.md) | An array of input parameters for the function. All inputs are required to be named. | [default to null]
**Outputs** | [**[]ContractFunctionParamDescription**](ContractFunctionParamDescription.md) | An array of input parameters for the function. All inputs are required to be named. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

