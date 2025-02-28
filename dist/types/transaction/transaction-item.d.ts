import { type INonCatalogPriceRequestBody } from '../price';
export interface ITransactionItemWithPriceId {
    priceId: string;
    price?: never;
    quantity: number;
}
export interface ITransactionItemWithPrice {
    priceId?: never;
    price: INonCatalogPriceRequestBody;
    quantity: number;
}
export type ITransactionItemWithNonCatalogPrice = ITransactionItemWithPriceId | ITransactionItemWithPrice;
