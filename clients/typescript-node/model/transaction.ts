/**
 * M2M Gateway API
 * The M2M Gateway API is for communication by 3rd party servers for automated tasks in the Framework
 *
 * The version of the OpenAPI document: 0.1
 * Contact: support@uxly.software
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SolidityStructParam } from './solidityStructParam';

/**
* A new transaction
*/
export class Transaction {
    'deleted'?: boolean;
    'updated'?: number;
    'created'?: number;
    /**
    * internal ID of the transaction object
    */
    'id'?: string;
    /**
    * The business that owns this transaction
    */
    'businessId'?: string;
    /**
    * Id of a chain
    */
    'chain'?: number;
    /**
    * string address of contract
    */
    'contractAddress'?: string;
    /**
    * Name of the escrowWallet that owns the transaction
    */
    'escrowWalletId'?: string;
    /**
    * Name of transaction
    */
    'name'?: string;
    /**
    * Description of transaction
    */
    'description'?: string;
    /**
    * Name of the function on the contract to call for this transaction
    */
    'functionName'?: string;
    'params'?: Array<SolidityStructParam>;
    'callbackUrl'?: string;
    'publicKey'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "number"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "businessId",
            "baseName": "businessId",
            "type": "string"
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "number"
        },
        {
            "name": "contractAddress",
            "baseName": "contractAddress",
            "type": "string"
        },
        {
            "name": "escrowWalletId",
            "baseName": "escrowWalletId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "functionName",
            "baseName": "functionName",
            "type": "string"
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "Array<SolidityStructParam>"
        },
        {
            "name": "callbackUrl",
            "baseName": "callbackUrl",
            "type": "string"
        },
        {
            "name": "publicKey",
            "baseName": "publicKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}

