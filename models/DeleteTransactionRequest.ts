/**
 * NabooApi V1
 * Here you have the first version of the naboo api to create checkout automatically
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DeleteTransactionRequest {
    'orderId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeleteTransactionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
