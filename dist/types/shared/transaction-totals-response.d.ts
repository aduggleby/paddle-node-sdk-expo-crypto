import { type CurrencyCode } from '../../enums';
export interface ITransactionTotalsResponse {
    subtotal: string;
    discount: string;
    tax: string;
    total: string;
    credit: string;
    credit_to_balance: string;
    balance: string;
    grand_total: string;
    fee?: string | null;
    earnings?: string | null;
    currency_code: CurrencyCode;
}
