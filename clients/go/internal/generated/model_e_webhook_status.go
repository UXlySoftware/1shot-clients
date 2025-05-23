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
// EWebhookStatus : The current status of the webhook
type EWebhookStatus string

// List of EWebhookStatus
const (
	UNSENT_EWebhookStatus EWebhookStatus = "Unsent"
	SUCCESS_EWebhookStatus EWebhookStatus = "Success"
	RETRYING_EWebhookStatus EWebhookStatus = "Retrying"
	FAILED_EWebhookStatus EWebhookStatus = "Failed"
)
