# Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [default to null]
**BusinessId** | **string** |  | [default to null]
**Chain** | [***EChain**](EChain.md) |  | [default to null]
**ContractAddress** | **string** |  | [default to null]
**EscrowWalletId** | **string** |  | [default to null]
**Name** | **string** | Name of transaction | [default to null]
**Description** | **string** | Description of transaction | [default to null]
**FunctionName** | **string** | Name of the function on the contract to call for this transaction | [default to null]
**Inputs** | [**[]SolidityStructParam**](SolidityStructParam.md) |  | [default to null]
**Outputs** | [**[]SolidityStructParam**](SolidityStructParam.md) |  | [default to null]
**StateMutability** | [***ESolidityStateMutability**](ESolidityStateMutability.md) |  | [default to null]
**CallbackUrl** | **string** | The current destination for webhooks to be sent when this transaction is executed. Will be null if no webhook is assigned. | [default to null]
**PublicKey** | **string** | The current public key for verifying the integrity of the webhook when this transaction is executed. 1Shot will sign its webhooks with a private key and provide a signature for the webhook that can be validated with this key. It will be null if there is no webhook destination specified. | [default to null]
**Updated** | **float64** |  | [default to null]
**Created** | **float64** |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

