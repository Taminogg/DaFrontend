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


export interface CsinquiryDto { 
    id: number;
    abnumber: number;
    grossWeightInKg: number;
    incoterm: string;
    containersizeA: number;
    country: string;
    containersizeB: number;
    containersizeHc: number;
    freeDetention: number;
    thctb: boolean;
    thcc: boolean;
    isFastLine: boolean;
    isDirectLine: boolean;
    readyToLoad: string;
    approvedByCrCs: boolean;
    approvedByCrCsTime: string;
}

