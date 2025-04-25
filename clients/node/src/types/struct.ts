import { SolidityStructParam, SolidityStruct } from './solidity';

export interface SolidityStructParamUpdate {
  name?: string;
  description?: string;
  type?: 'address' | 'bool' | 'bytes' | 'int' | 'string' | 'uint' | 'struct';
  index?: number;
  value?: string;
  typeSize?: number;
  typeSize2?: number;
  isArray?: boolean;
  arraySize?: number;
  typeStructId?: string;
  typeStruct?: {
    name: string;
    params: SolidityStructParam[];
  };
}

export interface SolidityStructParamUpdateRequest {
  id: string;
  updates: SolidityStructParamUpdate;
}

export interface NewSolidityStructParam extends SolidityStructParamUpdate {
  name: string;
  type: 'address' | 'bool' | 'bytes' | 'int' | 'string' | 'uint' | 'struct';
  index: number;
}

export { SolidityStruct };
