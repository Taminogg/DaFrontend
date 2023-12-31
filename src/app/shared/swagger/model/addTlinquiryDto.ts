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


export interface AddTlinquiryDto { 
    inquiryNumber: number;
    sped: string;
    country: string;
    acceptingPort: string;
    expectedRetrieveWeek: string;
    weightInKg: number;
    invoiceOn: string;
    retrieveDate: string;
    isContainer40: boolean;
    isContainerHc: boolean;
    retrieveLocation: string;
    debtCapitalGeneralForerunEur: number;
    debtCapitalMainDol: number;
    debtCapitalTrailingDol: number;
    portOfDeparture: string;
    ets: string;
    eta: string;
    boat: string;
}

