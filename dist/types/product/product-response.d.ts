import { type ICustomData, type IImportMetaResponse, type ISharedPriceResponse } from '../index';
import { type TaxCategory, type Status, type CatalogType } from '../../enums';
export interface IProductResponse {
    id: string;
    name: string;
    type?: CatalogType | null;
    description?: string | null;
    tax_category: TaxCategory;
    image_url?: string | null;
    custom_data?: ICustomData | null;
    status: Status;
    created_at: string;
    import_meta?: IImportMetaResponse | null;
    prices?: ISharedPriceResponse[] | null;
}
