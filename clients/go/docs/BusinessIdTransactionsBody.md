# BusinessIdTransactionsBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Chain** | [***EChain**](EChain.md) |  | [default to null]
**ContractAddress** | **string** |  | [default to null]
**EscrowWalletId** | **string** |  | [default to null]
**Name** | **string** | This is the name of the Transaction, which is used for display purposes and lookup- it is not the same as the functionName, but can be. | [default to null]
**Description** | **string** | A description of the Transaction. You should include details about what the transaction does and when it should be called. If you are using static parameters, describe the configured values. | [default to null]
**FunctionName** | **string** | The actual method name on the smart contract. Solidity names are case sensitive and must match precisely. | [default to null]
**StateMutability** | [***ESolidityStateMutability**](ESolidityStateMutability.md) |  | [default to null]
**Inputs** | [**[]NewSolidityStructParam**](NewSolidityStructParam.md) | An array of the input parameters for the smart contract method. These may be configured with static values. | [default to null]
**Outputs** | [**[]NewSolidityStructParam**](NewSolidityStructParam.md) | An array of the output parameters for the smart contract method. Static values can be configured but will be ignored. Output parameters for \&quot;payable\&quot; and \&quot;nonpayable\&quot; methods are generally ignored and do not need to be defined, but these are required for \&quot;pure\&quot; and \&quot;view\&quot; methods. | [optional] [default to null]
**CallbackUrl** | **string** | The URL that will be notified after the transaction is executed. This must be a valid HTTP or HTTPS URL and include the protocol. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

