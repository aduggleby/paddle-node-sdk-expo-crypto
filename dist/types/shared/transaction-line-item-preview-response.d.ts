import { type IUnitTotals, type ITotals, type ISharedProductResponse } from '../index';
export interface ITransactionLineItemPreviewResponse {
    price_id: string;
    quantity: number;
    tax_rate: string;
    unit_totals: IUnitTotals;
    totals: ITotals;
    product: ISharedProductResponse;
}
