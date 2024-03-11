import { type ISharedPriceResponse, type ITransactionProrationResponse } from '../index';
export interface ITransactionItemResponse {
    price_id?: string | null;
    price?: ISharedPriceResponse | null;
    quantity: number;
    proration?: ITransactionProrationResponse | null;
}
