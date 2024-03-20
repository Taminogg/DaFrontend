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
import { ProductionPlanning } from './productionPlanning';


export interface ArticlePP { 
    id?: number;
    articleNumber?: number;
    minHeigthRequired?: number;
    desiredDeliveryDate?: number;
    deliveryDate?: number;
    shortText?: string | null;
    factory?: string | null;
    nozzle?: string | null;
    productionOrder?: string | null;
    plannedOrder?: string | null;
    plant?: string | null;
    inquiryForFixedOrder?: boolean;
    inquiryForNonFixedOrder?: boolean;
    inquiryForQuotation?: boolean;
    pallets?: number;
    productionPlanningId?: number;
    productionPlanning?: ProductionPlanning;
}

