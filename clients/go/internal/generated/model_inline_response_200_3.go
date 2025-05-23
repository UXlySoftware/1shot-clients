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

type InlineResponse2003 struct {
	Response []EscrowWallet `json:"response,omitempty"`
	Page int32 `json:"page"`
	PageSize int32 `json:"pageSize"`
	TotalResults int32 `json:"totalResults"`
}
