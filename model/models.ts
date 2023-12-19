import localVarRequest from 'request';

export * from './badRequestError400Response';
export * from './badRequestError400ResponseError';
export * from './baseCreateUnit';
export * from './baseError';
export * from './condition';
export * from './conditionResponse';
export * from './createOrgGlobalAdmin200Response';
export * from './createOrgRequest';
export * from './createOrgSiteAmenity200Response';
export * from './createOrgSiteAmenityRequest';
export * from './createPricingGroupRequest';
export * from './createSettingRequest';
export * from './createSiteRequest';
export * from './createTaxRateRequest';
export * from './createUnit200Response';
export * from './createUnitFeatureRequest';
export * from './createUnitRequest';
export * from './createUnitsRequest';
export * from './dataTypes';
export * from './forbiddenError403Response';
export * from './forbiddenError403ResponseError';
export * from './genericAddressRequestDto';
export * from './getCondition200Response';
export * from './getMapFeatures200Response';
export * from './getOrgFeatures200Response';
export * from './getOrgSettings200Response';
export * from './getPricingGroupsBySite200Response';
export * from './getSites200Response';
export * from './getTaxRateBySite200Response';
export * from './internalServerError500Response';
export * from './internalServerError500ResponseError';
export * from './mapFeatureResponseDto';
export * from './orgResponse';
export * from './orgSiteAmenityResponse';
export * from './position';
export * from './pricingGroupResponse';
export * from './settingResponse';
export * from './settingResponseValue';
export * from './siteAmenity';
export * from './siteResponse';
export * from './siteType';
export * from './siteUserRequest';
export * from './standardMapFeatureTypeDto';
export * from './taxRateResponse';
export * from './unauthorizedError401Response';
export * from './unauthorizedError401ResponseError';
export * from './unitFeature';
export * from './unitFeatureResponse';
export * from './unitResponse';
export * from './updateOrgSiteAmenityRequest';
export * from './updateOrgUnitFeatureRequest';
export * from './updatePricingGroupRequest';
export * from './updateSettingRequest';
export * from './updateSiteRequest';
export * from './updateTaxRateRequest';
export * from './updateUnitRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { BadRequestError400Response } from './badRequestError400Response';
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';
import { BaseCreateUnit } from './baseCreateUnit';
import { BaseError } from './baseError';
import { Condition } from './condition';
import { ConditionResponse } from './conditionResponse';
import { CreateOrgGlobalAdmin200Response } from './createOrgGlobalAdmin200Response';
import { CreateOrgRequest } from './createOrgRequest';
import { CreateOrgSiteAmenity200Response } from './createOrgSiteAmenity200Response';
import { CreateOrgSiteAmenityRequest } from './createOrgSiteAmenityRequest';
import { CreatePricingGroupRequest } from './createPricingGroupRequest';
import { CreateSettingRequest } from './createSettingRequest';
import { CreateSiteRequest } from './createSiteRequest';
import { CreateTaxRateRequest } from './createTaxRateRequest';
import { CreateUnit200Response } from './createUnit200Response';
import { CreateUnitFeatureRequest } from './createUnitFeatureRequest';
import { CreateUnitRequest } from './createUnitRequest';
import { CreateUnitsRequest } from './createUnitsRequest';
import { DataTypes } from './dataTypes';
import { ForbiddenError403Response } from './forbiddenError403Response';
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';
import { GenericAddressRequestDto } from './genericAddressRequestDto';
import { GetCondition200Response } from './getCondition200Response';
import { GetMapFeatures200Response } from './getMapFeatures200Response';
import { GetOrgFeatures200Response } from './getOrgFeatures200Response';
import { GetOrgSettings200Response } from './getOrgSettings200Response';
import { GetPricingGroupsBySite200Response } from './getPricingGroupsBySite200Response';
import { GetSites200Response } from './getSites200Response';
import { GetTaxRateBySite200Response } from './getTaxRateBySite200Response';
import { InternalServerError500Response } from './internalServerError500Response';
import { InternalServerError500ResponseError } from './internalServerError500ResponseError';
import { MapFeatureResponseDto } from './mapFeatureResponseDto';
import { OrgResponse } from './orgResponse';
import { OrgSiteAmenityResponse } from './orgSiteAmenityResponse';
import { Position } from './position';
import { PricingGroupResponse } from './pricingGroupResponse';
import { SettingResponse } from './settingResponse';
import { SettingResponseValue } from './settingResponseValue';
import { SiteAmenity } from './siteAmenity';
import { SiteResponse } from './siteResponse';
import { SiteType } from './siteType';
import { SiteUserRequest } from './siteUserRequest';
import { StandardMapFeatureTypeDto } from './standardMapFeatureTypeDto';
import { TaxRateResponse } from './taxRateResponse';
import { UnauthorizedError401Response } from './unauthorizedError401Response';
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';
import { UnitFeature } from './unitFeature';
import { UnitFeatureResponse } from './unitFeatureResponse';
import { UnitResponse } from './unitResponse';
import { UpdateOrgSiteAmenityRequest } from './updateOrgSiteAmenityRequest';
import { UpdateOrgUnitFeatureRequest } from './updateOrgUnitFeatureRequest';
import { UpdatePricingGroupRequest } from './updatePricingGroupRequest';
import { UpdateSettingRequest } from './updateSettingRequest';
import { UpdateSiteRequest } from './updateSiteRequest';
import { UpdateTaxRateRequest } from './updateTaxRateRequest';
import { UpdateUnitRequest } from './updateUnitRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "DataTypes": DataTypes,
        "SiteUserRequest.JobTitleEnum": SiteUserRequest.JobTitleEnum,
        "UnitResponse.PaymentStatusEnum": UnitResponse.PaymentStatusEnum,
}

let typeMap: {[index: string]: any} = {
    "BadRequestError400Response": BadRequestError400Response,
    "BadRequestError400ResponseError": BadRequestError400ResponseError,
    "BaseCreateUnit": BaseCreateUnit,
    "BaseError": BaseError,
    "Condition": Condition,
    "ConditionResponse": ConditionResponse,
    "CreateOrgGlobalAdmin200Response": CreateOrgGlobalAdmin200Response,
    "CreateOrgRequest": CreateOrgRequest,
    "CreateOrgSiteAmenity200Response": CreateOrgSiteAmenity200Response,
    "CreateOrgSiteAmenityRequest": CreateOrgSiteAmenityRequest,
    "CreatePricingGroupRequest": CreatePricingGroupRequest,
    "CreateSettingRequest": CreateSettingRequest,
    "CreateSiteRequest": CreateSiteRequest,
    "CreateTaxRateRequest": CreateTaxRateRequest,
    "CreateUnit200Response": CreateUnit200Response,
    "CreateUnitFeatureRequest": CreateUnitFeatureRequest,
    "CreateUnitRequest": CreateUnitRequest,
    "CreateUnitsRequest": CreateUnitsRequest,
    "ForbiddenError403Response": ForbiddenError403Response,
    "ForbiddenError403ResponseError": ForbiddenError403ResponseError,
    "GenericAddressRequestDto": GenericAddressRequestDto,
    "GetCondition200Response": GetCondition200Response,
    "GetMapFeatures200Response": GetMapFeatures200Response,
    "GetOrgFeatures200Response": GetOrgFeatures200Response,
    "GetOrgSettings200Response": GetOrgSettings200Response,
    "GetPricingGroupsBySite200Response": GetPricingGroupsBySite200Response,
    "GetSites200Response": GetSites200Response,
    "GetTaxRateBySite200Response": GetTaxRateBySite200Response,
    "InternalServerError500Response": InternalServerError500Response,
    "InternalServerError500ResponseError": InternalServerError500ResponseError,
    "MapFeatureResponseDto": MapFeatureResponseDto,
    "OrgResponse": OrgResponse,
    "OrgSiteAmenityResponse": OrgSiteAmenityResponse,
    "Position": Position,
    "PricingGroupResponse": PricingGroupResponse,
    "SettingResponse": SettingResponse,
    "SettingResponseValue": SettingResponseValue,
    "SiteAmenity": SiteAmenity,
    "SiteResponse": SiteResponse,
    "SiteType": SiteType,
    "SiteUserRequest": SiteUserRequest,
    "StandardMapFeatureTypeDto": StandardMapFeatureTypeDto,
    "TaxRateResponse": TaxRateResponse,
    "UnauthorizedError401Response": UnauthorizedError401Response,
    "UnauthorizedError401ResponseError": UnauthorizedError401ResponseError,
    "UnitFeature": UnitFeature,
    "UnitFeatureResponse": UnitFeatureResponse,
    "UnitResponse": UnitResponse,
    "UpdateOrgSiteAmenityRequest": UpdateOrgSiteAmenityRequest,
    "UpdateOrgUnitFeatureRequest": UpdateOrgUnitFeatureRequest,
    "UpdatePricingGroupRequest": UpdatePricingGroupRequest,
    "UpdateSettingRequest": UpdateSettingRequest,
    "UpdateSiteRequest": UpdateSiteRequest,
    "UpdateTaxRateRequest": UpdateTaxRateRequest,
    "UpdateUnitRequest": UpdateUnitRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
public accessToken: string | (() => string) = process.env.MS_TOKEN || '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
