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
import { GenericAddressRequestDto } from './genericAddressRequestDto';
import { SiteAmenity } from './siteAmenity';
import { SiteType } from './siteType';
import { SiteUserRequest } from './siteUserRequest';

export class UpdateSiteRequest {
    /**
    * Name
    */
    'siteName': string;
    /**
    * Access code length
    */
    'accessCodeLength': number;
    /**
    * Site Types
    */
    'siteTypes': Array<SiteType>;
    /**
    * Amenity Ids
    */
    'siteAmenities'?: Array<SiteAmenity>;
    'address'?: GenericAddressRequestDto;
    /**
    * Site user(s)
    */
    'siteUsers'?: Array<SiteUserRequest>;
    /**
    * Phone number
    */
    'phoneNumber'?: string;
    /**
    * Email address
    */
    'email'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "siteName",
            "baseName": "siteName",
            "type": "string"
        },
        {
            "name": "accessCodeLength",
            "baseName": "accessCodeLength",
            "type": "number"
        },
        {
            "name": "siteTypes",
            "baseName": "siteTypes",
            "type": "Array<SiteType>"
        },
        {
            "name": "siteAmenities",
            "baseName": "siteAmenities",
            "type": "Array<SiteAmenity>"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "GenericAddressRequestDto"
        },
        {
            "name": "siteUsers",
            "baseName": "siteUsers",
            "type": "Array<SiteUserRequest>"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateSiteRequest.attributeTypeMap;
    }
}

