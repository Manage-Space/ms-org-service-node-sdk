/**
 * ManageSpace Orgs API
 * ManageSpace Orgs API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Condition {
    /**
    * Unit Feature UUID
    */
    'conditionId': string;
    /**
    * Unit Condition Display Name
    */
    'displayName': string;
    /**
    * Unit Condition Code Name
    */
    'codeName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditionId",
            "baseName": "conditionId",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "codeName",
            "baseName": "codeName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Condition.attributeTypeMap;
    }
}

