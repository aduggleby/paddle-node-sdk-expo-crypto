import { type IChargebackFee } from '../index';
import { type PayoutCurrencyCode } from '../../enums';
export interface IPayoutTotalsAdjustmentResponse {
    subtotal: string;
    tax: string;
    total: string;
    fee: string;
    chargeback_fee?: IChargebackFee | null;
    earnings: string;
    currency_code: PayoutCurrencyCode;
}
