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
import {
    Payment,
    PaymentFromJSON,
    PaymentFromJSONTyped,
    PaymentToJSON,
} from './Payment';

/**
 * 
 * @export
 * @interface ShipmentPurchaseData
 */
export interface ShipmentPurchaseData {
    /**
     * The shipment selected rate.
     * @type {string}
     * @memberof ShipmentPurchaseData
     */
    selected_rate_id: string;
    /**
     * The shipment label file type.
     * @type {string}
     * @memberof ShipmentPurchaseData
     */
    label_type?: ShipmentPurchaseDataLabelTypeEnum;
    /**
     * 
     * @type {Payment}
     * @memberof ShipmentPurchaseData
     */
    payment?: Payment;
    /**
     * The shipment reference
     * @type {string}
     * @memberof ShipmentPurchaseData
     */
    reference?: string | null;
}

/**
* @export
* @enum {string}
*/
export enum ShipmentPurchaseDataLabelTypeEnum {
    Pdf = 'PDF',
    Zpl = 'ZPL'
}

export function ShipmentPurchaseDataFromJSON(json: any): ShipmentPurchaseData {
    return ShipmentPurchaseDataFromJSONTyped(json, false);
}

export function ShipmentPurchaseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipmentPurchaseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'selected_rate_id': json['selected_rate_id'],
        'label_type': !exists(json, 'label_type') ? undefined : json['label_type'],
        'payment': !exists(json, 'payment') ? undefined : PaymentFromJSON(json['payment']),
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
    };
}

export function ShipmentPurchaseDataToJSON(value?: ShipmentPurchaseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'selected_rate_id': value.selected_rate_id,
        'label_type': value.label_type,
        'payment': PaymentToJSON(value.payment),
        'reference': value.reference,
    };
}

