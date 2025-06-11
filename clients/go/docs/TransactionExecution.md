# TransactionExecution

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [default to null]
**TransactionId** | **string** |  | [default to null]
**ApiCredentialId** | **string** | ID of the API Credential used to execute the transaction. Note, this is not the API Key itself. This will be null if a user initiated the execution and not an API Credential | [default to null]
**ApiKey** | **string** | The actual API key used | [optional] [default to null]
**UserId** | **string** | The User ID that executed the transaction. This will be null if an API key was used instead of a user token. | [default to null]
**Status** | [***ETransactionExecutionStatus**](ETransactionExecutionStatus.md) |  | [default to null]
**ChainTransactionId** | **string** | The ID of the actual chain transaction in the internal chain service. This is mostly for debugging purposes. | [default to null]
**TransactionHash** | **string** | The hash of the transaction. Only calculated once the status is Submitted. | [default to null]
**Name** | **string** | the name of the associated Transaction. Included as a convienience. | [optional] [default to null]
**FunctionName** | **string** | The functionName of the associated Transaction. Included as a convienience. | [optional] [default to null]
**Chain** | [***EChain**](EChain.md) |  | [optional] [default to null]
**Memo** | **string** | Optional text supplied when the transaction is executed. This can be a note to the user about why the execution was done, or formatted information such as JSON that can be used by the user&#x27;s system. | [optional] [default to null]
**Completed** | **float64** |  | [default to null]
**Updated** | **float64** |  | [default to null]
**Created** | **float64** |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

