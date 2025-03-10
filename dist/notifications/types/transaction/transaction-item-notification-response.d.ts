import { type IPriceNotificationResponse, type ITransactionProrationNotificationResponse } from '../index';
export interface ITransactionItemNotificationResponse {
    price_id?: string | null;
    price?: IPriceNotificationResponse | null;
    quantity: number;
    proration?: ITransactionProrationNotificationResponse | null;
}
