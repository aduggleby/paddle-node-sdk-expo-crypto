import { type PayoutCurrencyCode } from '../../enums';
export interface ITransactionPayoutTotalsResponse {
    subtotal: string;
    discount: string;
    tax: string;
    total: string;
    credit: string;
    balance: string;
    grand_total: string;
    credit_to_balance: string;
    fee: string;
    earnings: string;
    currency_code: PayoutCurrencyCode;
}
