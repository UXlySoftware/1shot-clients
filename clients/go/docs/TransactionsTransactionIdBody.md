# TransactionsTransactionIdBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Chain** | [***EChain**](EChain.md) |  | [optional] [default to null]
**ContractAddress** | **string** |  | [optional] [default to null]
**EscrowWalletId** | **string** |  | [optional] [default to null]
**Name** | **string** | The name of the transaction, used for organization purposes. | [optional] [default to null]
**Description** | **string** | An optional description of the transaction, for your own reference in the site. | [optional] [default to null]
**FunctionName** | **string** | The name of the function on the contract. This is case-sensitive, so be sure to check your ABI. | [optional] [default to null]
**Payable** | **bool** | Some transactions can move tokens with them. Check your ABI. | [optional] [default to null]
**NativeTransaction** | **bool** | It is possible to create a \&quot;native\&quot; transaction, one that is part of the EVM and not a smart contract. Set this to true to enable native transaction handling. | [optional] [default to null]
**CallbackUrl** | **string** | The desired URL for the callback. This will internally create a Webhook Trigger. Make sure to leave this undefined to not update the field, if you pass null it will clear the webhook. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

