import { type CurrencyCode } from '../../../enums';
export interface ITotalAdjustmentsNotificationResponse {
    subtotal: string;
    tax: string;
    total: string;
    fee: string;
    earnings: string;
    currency_code: CurrencyCode;
}
