import { type ISharedProductNotificationResponse } from '../../types';
import { ImportMetaNotification } from '../index';
import { type TaxCategory, type Status, type CatalogType } from '../../../enums';
import { type CustomData } from '../../../entities';
export declare class ProductNotification {
    readonly id: string;
    readonly name: string;
    readonly type: CatalogType | null;
    readonly description: string | null;
    readonly taxCategory: TaxCategory;
    readonly imageUrl: string | null;
    readonly customData: CustomData | null;
    readonly status: Status;
    readonly createdAt: string;
    readonly importMeta: ImportMetaNotification | null;
    constructor(product: ISharedProductNotificationResponse);
}
