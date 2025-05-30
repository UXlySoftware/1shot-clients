/*
 * M2M Gateway API
 *
 * The M2M Gateway API is for communication by 3rd party servers for automated tasks in the Framework
 *
 * API version: 0.1
 * Contact: support@uxly.software
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

type AllOfstructIdParamsBodyUpdatesItems struct {
	Id string `json:"id"`
	Name string `json:"name,omitempty"`
	Description string `json:"description,omitempty"`
	Type_ *ESolidityAbiParameterType `json:"type,omitempty"`
	// This is the relative index in the contract function. It should start at 0, and must not skip any numbers.
	Index int32 `json:"index,omitempty"`
	// This is an optional, static value for the parameter. If you set this, you will never be required or able to pass a value for this parameter when you execute the transaction, it will use the set value. This is useful for creating dedicated endpoints with specific functionalities, particularly when tied to API Credentials that can only execute specific transactions. For example, you can have a 'transfer' transaction that is hardcoded to a specific amount, or to a specific receiver address.
	Value string `json:"value,omitempty"`
	// This is an optional field that specifies the main size of the Solidity type. For example, if your type is uint, by default it is a uint256. If you want a uint8 instead, set this value to 8. It works for int, uint, fixed, ufixed, and bytes types. Valid values for bytes are 1 to 32, for others it is 256 % 8
	TypeSize float64 `json:"typeSize,omitempty"`
	// This is identical to typeSize but only used for fixed and ufixed sizes. This is the second size of the fixed field, for example, fixed(typeSize)x(typeSize2).
	TypeSize2 int32 `json:"typeSize2,omitempty"`
	// If this parameter is an array type set this to true. By default, arrays can be of any size so you don't need to set arraySize.
	IsArray bool `json:"isArray,omitempty"`
	// If the parameter is a fixed size array, set this value.
	ArraySize int32 `json:"arraySize,omitempty"`
	// The ID of the sub-struct if the type is \"struct\". When creating a param, you must set only one of either typeStructId (to re-use an existing Solidity Struct) or typeStruct (creates a new struct for the param)
	TypeStructId string `json:"typeStructId,omitempty"`
	TypeStruct *Object `json:"typeStruct,omitempty"`
}
