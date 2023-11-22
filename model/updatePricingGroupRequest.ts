/**
 * ManageSpace Orgs API
 * ManageSpace Orgs API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class UpdatePricingGroupRequest {
    /**
    * The name of the pricing group.
    */
    'name'?: string;
    /**
    * The description of the pricing group.
    */
    'description'?: string;
    /**
    * The price of the units per month.
    */
    'price'?: number;
    /**
    * The Unit ID\'s to add to the pricing group.
    */
    'unitIds'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "unitIds",
            "baseName": "unitIds",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePricingGroupRequest.attributeTypeMap;
    }
}

