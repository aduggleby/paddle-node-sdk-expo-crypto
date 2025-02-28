import { type ITimePeriod, type IMoneyResponse, type IUnitPriceOverrideResponse, type IPriceQuantity, type ICustomData, type IImportMetaResponse } from '../index';
import { type TaxMode, type Status, type CatalogType } from '../../enums';
export interface ISharedPriceResponse {
    id: string;
    product_id: string;
    description: string;
    type: CatalogType;
    name?: string | null;
    billing_cycle?: ITimePeriod | null;
    trial_period?: ITimePeriod | null;
    tax_mode: TaxMode;
    unit_price: IMoneyResponse;
    unit_price_overrides: IUnitPriceOverrideResponse[];
    quantity: IPriceQuantity;
    status: Status;
    custom_data?: ICustomData | null;
    import_meta?: IImportMetaResponse | null;
}
