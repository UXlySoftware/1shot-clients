import { IOneShotClient } from '../types/client.js';
import { ChainInfo, ListChains } from '../types/chain.js';
import { PagedResponse } from '../types/common.js';
import { chainListSchema, listChainsSchema } from '../validation/chain.js';

export class Chains {
  constructor(private client: IOneShotClient) {}

  /**
   * List all chains supported by 1Shot API
   * @param params Optional pagination parameters
   * @returns Promise<PagedResponse<ChainInfo>>
   * @throws {ZodError} If the parameters are invalid
   */
  async list(params?: ListChains): Promise<PagedResponse<ChainInfo>> {
    // Validate all parameters using the schema
    const validatedParams = listChainsSchema.parse(params || {});

    const queryParams = new URLSearchParams();
    if (validatedParams.pageSize != undefined) {
      queryParams.append('pageSize', validatedParams.pageSize.toString());
    }
    if (validatedParams.page != undefined) {
      queryParams.append('page', validatedParams.page.toString());
    }

    const queryString = queryParams.toString();
    const path = queryString ? `/chains?${queryString}` : '/chains';

    const response = await this.client.request<PagedResponse<ChainInfo>>('GET', path);

    // Validate the response
    return chainListSchema.parse(response);
  }
}
