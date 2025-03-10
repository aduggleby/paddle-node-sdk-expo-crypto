import { type IProductResponse } from '../../types';
import { type CustomData, ImportMeta, Price } from '../index';
import { type CatalogType, type Status, type TaxCategory } from '../../enums';
export declare class Product {
    readonly id: string;
    readonly name: string;
    readonly type: CatalogType | null;
    readonly description: string | null;
    readonly taxCategory: TaxCategory;
    readonly imageUrl: string | null;
    readonly customData: CustomData | null;
    readonly status: Status;
    readonly createdAt: string;
    readonly importMeta: ImportMeta | null;
    readonly prices: Price[] | null;
    constructor(product: IProductResponse);
}
