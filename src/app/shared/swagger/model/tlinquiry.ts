/**
 * Backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Order } from './order';


export interface Tlinquiry { 
    id?: number;
    inquiryNumber?: number;
    sped?: string | null;
    country?: string | null;
    acceptingPort?: string | null;
    expectedRetrieveWeek?: string;
    weightInKg?: number;
    invoiceOn?: string;
    retrieveDate?: string;
    isContainer40?: boolean;
    isContainerHc?: boolean;
    retrieveLocation?: string | null;
    debtCapitalGeneralForerunEur?: number;
    debtCapitalMainDol?: number;
    debtCapitalTrailingDol?: number;
    portOfDeparture?: string | null;
    ets?: string;
    eta?: string;
    boat?: string | null;
    readonly orders?: Array<Order> | null;
}

