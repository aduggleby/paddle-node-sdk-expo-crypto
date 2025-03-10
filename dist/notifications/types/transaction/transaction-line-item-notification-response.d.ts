import { type ITransactionProrationNotificationResponse, type IUnitTotalsNotification, type ITotalsNotification, type ISharedProductNotificationResponse } from '../index';
export interface ITransactionLineItemNotificationResponse {
    id: string;
    price_id: string;
    quantity: number;
    proration?: ITransactionProrationNotificationResponse | null;
    tax_rate: string;
    unit_totals?: IUnitTotalsNotification | null;
    totals?: ITotalsNotification | null;
    product?: ISharedProductNotificationResponse | null;
}
