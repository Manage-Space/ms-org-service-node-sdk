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
import { DataTypes } from './dataTypes';
import { SettingResponseValue } from './settingResponseValue';

export class SettingResponse {
    /**
    * Setting ID.
    */
    'settingId': string | null;
    /**
    * Standard setting type ID.
    */
    'standardSettingTypeId': string;
    /**
    * Organization ID.
    */
    'orgId': string | null;
    /**
    * Site ID.
    */
    'siteId': string | null;
    /**
    * The code name of the setting type.
    */
    'codeName': string;
    /**
    * The display name of the setting type.
    */
    'displayName': string;
    /**
    * The description of the setting type.
    */
    'description': string;
    'dataType': DataTypes;
    'value': SettingResponseValue;
    /**
    * The value of the setting in string format.
    */
    'valueEncoded': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "settingId",
            "baseName": "settingId",
            "type": "string"
        },
        {
            "name": "standardSettingTypeId",
            "baseName": "standardSettingTypeId",
            "type": "string"
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "siteId",
            "baseName": "siteId",
            "type": "string"
        },
        {
            "name": "codeName",
            "baseName": "codeName",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "dataType",
            "baseName": "dataType",
            "type": "DataTypes"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "SettingResponseValue"
        },
        {
            "name": "valueEncoded",
            "baseName": "valueEncoded",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SettingResponse.attributeTypeMap;
    }
}

export namespace SettingResponse {
}
