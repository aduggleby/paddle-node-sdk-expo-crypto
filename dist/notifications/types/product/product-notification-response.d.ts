import { type IImportMetaNotificationResponse, type ISharedPriceNotificationResponse } from '../index';
import { type TaxCategory, type Status, type CatalogType } from '../../../enums';
import { type ICustomData } from '../../../types';
export interface IProductNotificationResponse {
    id: string;
    name: string;
    type?: CatalogType | null;
    description?: string | null;
    tax_category: TaxCategory;
    image_url?: string | null;
    custom_data?: ICustomData | null;
    status: Status;
    created_at: string;
    import_meta?: IImportMetaNotificationResponse | null;
    prices?: ISharedPriceNotificationResponse[] | null;
}
