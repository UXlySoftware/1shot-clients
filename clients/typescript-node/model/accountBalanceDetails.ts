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

export class AccountBalanceDetails {
    'type'?: string;
    'ticker'?: string;
    /**
    * Id of a chain
    */
    'chainId'?: number;
    /**
    * string address of contract
    */
    'tokenAddress'?: string;
    /**
    * string address of a wallet insight platform holds keys for
    */
    'accountAddress'?: string;
    /**
    * The balance of the token as a Big Number String
    */
    'balance'?: string;
    /**
    * The number of decimals in the balance. Determined by the token type.
    */
    'decimals'?: number;
    /**
    * The current value of the token in USD as determined by the latest oracle information
    */
    'usdValue'?: number;
    'usdValueTimestamp'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "ticker",
            "baseName": "ticker",
            "type": "string"
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number"
        },
        {
            "name": "tokenAddress",
            "baseName": "tokenAddress",
            "type": "string"
        },
        {
            "name": "accountAddress",
            "baseName": "accountAddress",
            "type": "string"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "string"
        },
        {
            "name": "decimals",
            "baseName": "decimals",
            "type": "number"
        },
        {
            "name": "usdValue",
            "baseName": "usdValue",
            "type": "number"
        },
        {
            "name": "usdValueTimestamp",
            "baseName": "usdValueTimestamp",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AccountBalanceDetails.attributeTypeMap;
    }
}

