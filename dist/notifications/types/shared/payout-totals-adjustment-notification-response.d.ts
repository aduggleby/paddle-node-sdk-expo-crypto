import { type IChargebackFeeNotification } from '../index';
import { type PayoutCurrencyCode } from '../../../enums';
export interface IPayoutTotalsAdjustmentNotificationResponse {
    subtotal: string;
    tax: string;
    total: string;
    fee: string;
    chargeback_fee?: IChargebackFeeNotification | null;
    earnings: string;
    currency_code: PayoutCurrencyCode;
}
