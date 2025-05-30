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

// A single defined parameter for a transaction after it has been created.
type SolidityStructParam struct {
	// Internal ID of the parameter.
	Id string `json:"id"`
	// Internal ID struct that owns this parameter.
	StructId string `json:"structId"`
	TypeStruct *Object `json:"typeStruct,omitempty"`
}
