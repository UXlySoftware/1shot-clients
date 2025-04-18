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
import { BusinessBusinessIdTransactionsPostRequestParamsInner } from './businessBusinessIdTransactionsPostRequestParamsInner';

export class BusinessBusinessIdTransactionsPostRequest {
    /**
    * Id of a chain
    */
    'chain': number;
    /**
    * string address of contract
    */
    'contractAddress': string;
    'escrowWalletId': string;
    'name': string;
    'description': string;
    'functionName': string;
    'params': Array<BusinessBusinessIdTransactionsPostRequestParamsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "type": "Array<BusinessBusinessIdTransactionsPostRequestParamsInner>"
        }    ];

    static getAttributeTypeMap() {
        return BusinessBusinessIdTransactionsPostRequest.attributeTypeMap;
    }
}

