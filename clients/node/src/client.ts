import { ClientConfig, TokenResponse } from './types.js';
import { Transactions } from './categories/transactions.js';
import { Executions } from './categories/executions.js';
import { Wallets } from './categories/wallets.js';
import { Structs } from './categories/structs.js';

export class OneShotClient {
  private config: ClientConfig;
  private accessToken: string | null = null;
  private tokenExpiry: Date | null = null;

  public readonly transactions: Transactions;
  public readonly executions: Executions;
  public readonly wallets: Wallets;
  public readonly structs: Structs;

  constructor(config: ClientConfig) {
    this.config = {
      ...config,
      baseUrl: config.baseUrl || 'https://api.1shotapi.com/v1',
    };
    this.transactions = new Transactions(this);
    this.executions = new Executions(this);
    this.wallets = new Wallets(this);
    this.structs = new Structs(this);
  }

  private async getAccessToken(): Promise<string> {
    if (this.accessToken && this.tokenExpiry && this.tokenExpiry > new Date()) {
      return this.accessToken;
    }

    const response = await fetch(`${this.config.baseUrl}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: this.config.apiKey,
        client_secret: this.config.apiSecret,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get access token: ${response.statusText}`);
    }

    const data: TokenResponse = await response.json();
    this.accessToken = data.access_token;
    this.tokenExpiry = new Date(Date.now() + data.expires_in * 1000);
    return this.accessToken;
  }

  async request<T>(method: string, path: string, body?: unknown): Promise<T> {
    const token = await this.getAccessToken();
    const response = await fetch(`${this.config.baseUrl}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }
}
