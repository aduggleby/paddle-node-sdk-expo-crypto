import { type INonCatalogPriceRequestBody } from '../price';
interface IBaseTransactionItemPreview {
    quantity: number;
    includeInTotals?: boolean | null;
}
interface ITransactionItemWithPriceId extends IBaseTransactionItemPreview {
    priceId: string;
    price?: never;
}
interface ITransactionItemWithPrice extends IBaseTransactionItemPreview {
    priceId?: never;
    price: INonCatalogPriceRequestBody;
}
export type ITransactionItemPreviewRequest = ITransactionItemWithPriceId | ITransactionItemWithPrice;
export {};
