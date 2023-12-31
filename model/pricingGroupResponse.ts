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

export class PricingGroupResponse {
    /**
    * Pricing Group UUID
    */
    'pricingGroupId': string;
    /**
    * The name of the pricing group.
    */
    'name': string;
    /**
    * The description of the pricing group.
    */
    'description': string;
    /**
    * Unit ID\'s
    */
    'unitIds': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pricingGroupId",
            "baseName": "pricingGroupId",
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
            "name": "unitIds",
            "baseName": "unitIds",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return PricingGroupResponse.attributeTypeMap;
    }
}

