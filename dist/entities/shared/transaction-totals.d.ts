import { type ITransactionTotalsResponse } from '../../types';
import { type CurrencyCode } from '../../enums';
export declare class TransactionTotals {
    readonly subtotal: string;
    readonly discount: string;
    readonly tax: string;
    readonly total: string;
    readonly credit: string;
    readonly creditToBalance: string;
    readonly balance: string;
    readonly grandTotal: string;
    readonly fee: string | null;
    readonly earnings: string | null;
    readonly currencyCode: CurrencyCode;
    constructor(transactionTotals: ITransactionTotalsResponse);
}
