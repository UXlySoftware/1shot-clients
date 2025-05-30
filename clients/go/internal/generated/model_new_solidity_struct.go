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

// The values required to create a completely new Solidity Struct.
type NewSolidityStruct struct {
	// The name of the struct. Structs are used to define the parameters of a transaction, but these structs don't have names.
	Name string `json:"name,omitempty"`
	Params []NewSolidityStructParam `json:"params"`
}
