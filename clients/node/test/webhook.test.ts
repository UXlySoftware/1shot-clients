import { validateWebhook } from '../src/utils/webhook.js';

describe('validateWebhook', () => {
  // Placeholder data - replace with actual test data
  const mockWebhookData = {
    signature: 'base64-encoded-signature-here',
    event: 'transaction.completed',
    data: {
      transactionId: '123',
      status: 'completed',
    },
  };

  const mockPublicKey = 'base64-encoded-public-key-here';

  it('should return true for valid signatures', async () => {
    const isValid = await validateWebhook(mockWebhookData, mockPublicKey);
    expect(isValid).toBe(true);
  });

  it('should return false for missing signature', async () => {
    // Create a new object without the signature property
    const { ...dataWithoutSignature } = mockWebhookData;
    
    const isValid = await validateWebhook(dataWithoutSignature, mockPublicKey);
    expect(isValid).toBe(false);
  });

  it('should return false for invalid signatures', async () => {
    const dataWithInvalidSignature = {
      ...mockWebhookData,
      signature: 'invalid-signature',
    };
    
    const isValid = await validateWebhook(dataWithInvalidSignature, mockPublicKey);
    expect(isValid).toBe(false);
  });

  it('should return false for invalid public key', async () => {
    const isValid = await validateWebhook(mockWebhookData, 'invalid-public-key');
    expect(isValid).toBe(false);
  });
});
