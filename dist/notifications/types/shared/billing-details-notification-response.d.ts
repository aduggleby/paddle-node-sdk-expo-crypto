import { type ITimePeriodNotification } from '../index';
export interface IBillingDetailsNotificationResponse {
    enable_checkout?: boolean | null;
    purchase_order_number?: string | null;
    additional_information?: string | null;
    payment_terms: ITimePeriodNotification;
}
