/* tslint:disable */
/* eslint-disable */
/**
 * Purplship API
 *  ## API Reference  Purplship is an open source multi-carrier shipping API that simplifies the integration of logistic carrier services.  The Purplship API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded  request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.  The Purplship API differs for every account as we release new versions. These docs are customized to your version of the API.   ## Versioning  When backwards-incompatible changes are made to the API, a new, dated version is released.  The current version is `2021.11`.   Read our API changelog and to learn more about backwards compatibility.  As a precaution, use API versioning to check a new API version before committing to an upgrade.   ## Pagination  All top-level API resources have support for bulk fetches via \"list\" API methods. For instance, you can list addresses,  list shipments, and list trackers. These list API methods share a common structure, taking at least these  two parameters: limit, and offset.  Purplship utilizes offset-based pagination via the offset and limit parameters. Both parameters take a number as value (see below) and return objects in reverse chronological order.  The offset parameter returns objects listed after an index.  The limit parameter take a limit on the number of objects to be returned from 1 to 100.   ```json {     \"next\": \"/v1/shipments?limit=25&offset=25\",     \"previous\": \"/v1/shipments?limit=25&offset=25\",     \"results\": [     ] } ```  ## Environments  The Purplship API offer the possibility to create and retrieve certain objects in `test_mode`. In development, it is therefore possible to add carrier connections, get live rates,  buy labels, create trackers and schedule pickups in `test_mode`.  
 *
 * The version of the OpenAPI document: 2021.11
 * Contact: hello@purplship.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ParcelData
 */
export interface ParcelData {
    /**
     * The parcel's weight
     * @type {number}
     * @memberof ParcelData
     */
    weight: number;
    /**
     * The parcel's width
     * @type {number}
     * @memberof ParcelData
     */
    width?: number | null;
    /**
     * The parcel's height
     * @type {number}
     * @memberof ParcelData
     */
    height?: number | null;
    /**
     * The parcel's length
     * @type {number}
     * @memberof ParcelData
     */
    length?: number | null;
    /**
     * 
     * The parcel's packaging type.
     * 
     * **Note that the packaging is optional when using a package preset**
     * 
     * values: <br/>- **envelope**<br/>- **pak**<br/>- **tube**<br/>- **pallet**<br/>- **small_box**<br/>- **medium_box**<br/>- **your_packaging**
     * 
     * For specific carriers packaging type, please consult [the reference](#operation/references).
     * @type {string}
     * @memberof ParcelData
     */
    packaging_type?: string | null;
    /**
     * 
     * The parcel's package preset.
     * 
     * For specific carriers package preset, please consult [the reference](#operation/references).
     * @type {string}
     * @memberof ParcelData
     */
    package_preset?: string | null;
    /**
     * The parcel's description
     * @type {string}
     * @memberof ParcelData
     */
    description?: string | null;
    /**
     * The parcel's content description
     * @type {string}
     * @memberof ParcelData
     */
    content?: string | null;
    /**
     * Indicates if the parcel is composed of documents only
     * @type {boolean}
     * @memberof ParcelData
     */
    is_document?: boolean | null;
    /**
     * The parcel's weight unit
     * @type {string}
     * @memberof ParcelData
     */
    weight_unit: ParcelDataWeightUnitEnum;
    /**
     * The parcel's dimension unit
     * @type {string}
     * @memberof ParcelData
     */
    dimension_unit?: ParcelDataDimensionUnitEnum;
}

/**
* @export
* @enum {string}
*/
export enum ParcelDataWeightUnitEnum {
    Kg = 'KG',
    Lb = 'LB'
}/**
* @export
* @enum {string}
*/
export enum ParcelDataDimensionUnitEnum {
    Cm = 'CM',
    In = 'IN'
}

export function ParcelDataFromJSON(json: any): ParcelData {
    return ParcelDataFromJSONTyped(json, false);
}

export function ParcelDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParcelData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'weight': json['weight'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'packaging_type': !exists(json, 'packaging_type') ? undefined : json['packaging_type'],
        'package_preset': !exists(json, 'package_preset') ? undefined : json['package_preset'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'is_document': !exists(json, 'is_document') ? undefined : json['is_document'],
        'weight_unit': json['weight_unit'],
        'dimension_unit': !exists(json, 'dimension_unit') ? undefined : json['dimension_unit'],
    };
}

export function ParcelDataToJSON(value?: ParcelData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'weight': value.weight,
        'width': value.width,
        'height': value.height,
        'length': value.length,
        'packaging_type': value.packaging_type,
        'package_preset': value.package_preset,
        'description': value.description,
        'content': value.content,
        'is_document': value.is_document,
        'weight_unit': value.weight_unit,
        'dimension_unit': value.dimension_unit,
    };
}

