import { verify } from '@noble/ed25519';

/**
 * Validates a webhook signature using ED25519.
 * This utility verifies that the webhook data was signed by the 1Shot API using the provided public key.
 *
 * @param data - The webhook data object (should include all fields except the signature)
 * @param publicKey - The base64-encoded public key provided by 1Shot
 * @returns boolean - True if the signature is valid, false otherwise
 *
 * @example
 * ```typescript
 * const isValid = validateWebhook(webhookData, "SBLzVF0dHNo/6tXo3+UOsYnCJ3Brq/SNxAFOAMWxTVo=");
 * if (isValid) {
 *   // Process the webhook
 * } else {
 *   // Reject the webhook
 * }
 * ```
 */
export async function validateWebhook(
  data: Record<string, any>,
  publicKey: string
): Promise<boolean> {
  try {
    // Extract the signature from the data
    const { signature, ...dataWithoutSignature } = data;

    if (!signature) {
      return false;
    }

    // Convert the public key from base64 to bytes
    const publicKeyBytes = Buffer.from(publicKey, 'base64');

    // Convert the signature from base64 to bytes
    const signatureBytes = Buffer.from(signature, 'base64');

    // Create a canonical JSON string from the data
    const message = JSON.stringify(dataWithoutSignature, Object.keys(dataWithoutSignature).sort());

    // Verify the signature
    return await verify(signatureBytes, message, publicKeyBytes);
  } catch (error) {
    // If any error occurs during validation, return false
    return false;
  }
}
