import { type ITimePeriod } from '../index';
export interface IBillingDetailsResponse {
    enable_checkout?: boolean | null;
    purchase_order_number?: string | null;
    additional_information?: string | null;
    payment_terms: ITimePeriod;
}
