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
import { EChain } from './eChain';

/**
* You need to provide a value for every parameter in the transaction via the name of the parameter
*/
export class TransactionsTransactionIdPutRequest {
    'chain'?: EChain;
    /**
    * string address of contract
    */
    'contractAddress'?: string;
    /**
    * The WebhookEndpointId
    */
    'escrowWalletId'?: string;
    /**
    * The name of the transaction, used for organization purposes.
    */
    'name'?: string;
    /**
    * An optional description of the transaction, for your own reference in the site.
    */
    'description'?: string;
    /**
    * The name of the function on the contract. This is case-sensitive, so be sure to check your ABI.
    */
    'functionName'?: string;
    /**
    * Some transactions can move tokens with them. Check your ABI.
    */
    'payable'?: boolean;
    /**
    * It is possible to create a \"native\" transaction, one that is part of the EVM and not a smart contract. Set this to true to enable native transaction handling.
    */
    'nativeTransaction'?: boolean;
    /**
    * The desired URL for the callback. This will internally create a Webhook Trigger. Make sure to leave this undefined to not update the field, if you pass null it will clear the webhook.
    */
    'callbackUrl'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chain",
            "baseName": "chain",
            "type": "EChain"
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
            "name": "payable",
            "baseName": "payable",
            "type": "boolean"
        },
        {
            "name": "nativeTransaction",
            "baseName": "nativeTransaction",
            "type": "boolean"
        },
        {
            "name": "callbackUrl",
            "baseName": "callbackUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionsTransactionIdPutRequest.attributeTypeMap;
    }
}

export namespace TransactionsTransactionIdPutRequest {
}
