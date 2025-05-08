import { IOneShotClient } from '../types/client.js';
import {
  SolidityStruct,
  SolidityStructParamUpdateRequest,
  NewSolidityStructParam,
} from '../types/struct.js';
import {
  structUpdateSchema,
  structParamUpdateRequestSchema,
  structParamUpdateSchema,
} from '../validation/struct.js';
import { z } from 'zod';

export class Structs {
  constructor(private client: IOneShotClient) {}

  /**
   * Update an existing solidity struct
   * @param structId The ID of the struct to update
   * @param name The new name for the struct
   * @returns Promise<SolidityStruct>
   * @throws {ZodError} If the name is invalid
   */
  async update(structId: string, name: string): Promise<SolidityStruct> {
    // Validate the update parameters
    const validatedData = structUpdateSchema.parse({ name });

    return this.client.request<SolidityStruct>('PUT', `/structs/${structId}`, validatedData);
  }

  /**
   * Add a parameter to an existing struct
   * @param businessId The business ID that owns the struct
   * @param structId The ID of the struct to add the parameter to
   * @param param The new parameter to add
   * @returns Promise<SolidityStruct>
   * @throws {ZodError} If the parameter is invalid
   */
  async addParam(
    businessId: string,
    structId: string,
    param: NewSolidityStructParam
  ): Promise<SolidityStruct> {
    // Validate the parameter
    const validatedData = structParamUpdateSchema.parse(param);

    return this.client.request<SolidityStruct>(
      'POST',
      `/business/${businessId}/structs/${structId}/params`,
      validatedData
    );
  }

  /**
   * Update multiple parameters of a struct
   * @param businessId The business ID that owns the struct
   * @param structId The ID of the struct to update
   * @param updates Array of parameter updates
   * @returns Promise<SolidityStruct>
   * @throws {ZodError} If any of the updates are invalid
   */
  async updateParams(
    businessId: string,
    structId: string,
    updates: SolidityStructParamUpdateRequest[]
  ): Promise<SolidityStruct> {
    // Validate all updates
    const validatedUpdates = updates.map((update) => structParamUpdateRequestSchema.parse(update));

    return this.client.request<SolidityStruct>(
      'PUT',
      `/business/${businessId}/structs/${structId}/params`,
      { updates: validatedUpdates }
    );
  }

  /**
   * Remove a parameter from a struct
   * @param structId The ID of the struct
   * @param structParamId The ID of the parameter to remove
   * @returns Promise<SolidityStruct>
   * @throws {ZodError} If the parameter ID is invalid
   */
  async removeParam(structId: string, structParamId: string): Promise<SolidityStruct> {
    // Validate the parameter ID
    const validatedId = z.string().uuid().parse(structParamId);

    return this.client.request<SolidityStruct>(
      'DELETE',
      `/structs/${structId}/params/${validatedId}`
    );
  }
}
