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
import { OrgSiteAmenityResponse } from './orgSiteAmenityResponse';
import { SiteType } from './siteType';

export class SiteResponse {
    /**
    * Id of the site
    */
    'siteId': string;
    /**
    * Name of the site
    */
    'siteName': string;
    /**
    * Organization Id
    */
    'orgId': string;
    /**
    * Default Location Id
    */
    'defaultLocationId': string;
    /**
    * Access code length
    */
    'accessCodeLength': number;
    /**
    * Site Types
    */
    'siteTypes': Array<SiteType>;
    /**
    * Amenity Types
    */
    'siteAmenities': Array<OrgSiteAmenityResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "siteId",
            "baseName": "siteId",
            "type": "string"
        },
        {
            "name": "siteName",
            "baseName": "siteName",
            "type": "string"
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "defaultLocationId",
            "baseName": "defaultLocationId",
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
            "type": "Array<OrgSiteAmenityResponse>"
        }    ];

    static getAttributeTypeMap() {
        return SiteResponse.attributeTypeMap;
    }
}

