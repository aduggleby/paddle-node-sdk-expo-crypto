import { type ITransactionProrationResponse, type IUnitTotals, type ITotals, type ISharedProductResponse } from '../index';
export interface ITransactionLineItemResponse {
    id: string;
    price_id: string;
    quantity: number;
    proration?: ITransactionProrationResponse | null;
    tax_rate: string;
    unit_totals?: IUnitTotals | null;
    totals?: ITotals | null;
    product?: ISharedProductResponse | null;
}
