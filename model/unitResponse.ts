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
import { Condition } from './condition';
import { Position } from './position';
import { UnitFeature } from './unitFeature';

export class UnitResponse {
    /**
    * Unit ID
    */
    'unitId': string;
    /**
    * Unit Name
    */
    'unitName': string;
    /**
    * Unit Description
    */
    'unitDescription': string;
    /**
    * Org ID
    */
    'orgId': string;
    /**
    * Site ID
    */
    'siteId': string;
    /**
    * Location ID
    */
    'locationId': string;
    /**
    * Unit Type ID
    */
    'unitTypeId': number;
    /**
    * Status
    */
    'statusId': number;
    /**
    * Length
    */
    'length': number;
    /**
    * Width
    */
    'width': number;
    /**
    * Height
    */
    'height': number;
    /**
    * The dimensions of the unit
    */
    'dimensions': string;
    /**
    * Size
    */
    'size': number;
    /**
    * Metric
    */
    'metricId': number;
    /**
    * Standard Price
    */
    'standardPrice': number;
    /**
    * Tax
    */
    'tax': number;
    /**
    * Security Deposit
    */
    'unitSecurityDeposit': number;
    /**
    * Walk through order
    */
    'walkThroughOrder': number;
    /**
    * Currency
    */
    'currencyId': number;
    /**
    * Floor
    */
    'floor': number;
    /**
    * Unit Conditions
    */
    'conditions': Array<Condition>;
    /**
    * Inside Unit
    */
    'notes': string;
    /**
    * Unit Features
    */
    'unitFeatures': Array<UnitFeature>;
    'position': Position;
    /**
    * Created at.
    */
    'createdAt': Date;
    /**
    * Updated at.
    */
    'updatedAt': Date | null;
    /**
    * Paid through date.
    */
    'paidThrough': Date | null;
    /**
    * Payment ststus
    */
    'paymentStatus': UnitResponse.PaymentStatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "unitId",
            "baseName": "unitId",
            "type": "string"
        },
        {
            "name": "unitName",
            "baseName": "unitName",
            "type": "string"
        },
        {
            "name": "unitDescription",
            "baseName": "unitDescription",
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
            "name": "locationId",
            "baseName": "locationId",
            "type": "string"
        },
        {
            "name": "unitTypeId",
            "baseName": "unitTypeId",
            "type": "number"
        },
        {
            "name": "statusId",
            "baseName": "statusId",
            "type": "number"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "dimensions",
            "baseName": "dimensions",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "metricId",
            "baseName": "metricId",
            "type": "number"
        },
        {
            "name": "standardPrice",
            "baseName": "standardPrice",
            "type": "number"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number"
        },
        {
            "name": "unitSecurityDeposit",
            "baseName": "unitSecurityDeposit",
            "type": "number"
        },
        {
            "name": "walkThroughOrder",
            "baseName": "walkThroughOrder",
            "type": "number"
        },
        {
            "name": "currencyId",
            "baseName": "currencyId",
            "type": "number"
        },
        {
            "name": "floor",
            "baseName": "floor",
            "type": "number"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<Condition>"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "unitFeatures",
            "baseName": "unitFeatures",
            "type": "Array<UnitFeature>"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "Position"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "paidThrough",
            "baseName": "paidThrough",
            "type": "Date"
        },
        {
            "name": "paymentStatus",
            "baseName": "paymentStatus",
            "type": "UnitResponse.PaymentStatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return UnitResponse.attributeTypeMap;
    }
}

export namespace UnitResponse {
    export enum PaymentStatusEnum {
        Paid = <any> 'paid',
        Unpaid = <any> 'unpaid',
        Overdue = <any> 'overdue'
    }
}
