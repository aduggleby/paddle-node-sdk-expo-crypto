import { type ITimePeriodNotification, type IMoneyNotificationResponse, type IUnitPriceOverrideNotificationResponse, type IPriceQuantityNotification, type IImportMetaNotificationResponse } from '../index';
import { type TaxMode, type Status, type CatalogType } from '../../../enums';
import { type ICustomData } from '../../../types';
export interface ISharedPriceNotificationResponse {
    id: string;
    product_id: string;
    description: string;
    type: CatalogType;
    name?: string | null;
    billing_cycle?: ITimePeriodNotification | null;
    trial_period?: ITimePeriodNotification | null;
    tax_mode: TaxMode;
    unit_price?: IMoneyNotificationResponse | null;
    unit_price_overrides?: IUnitPriceOverrideNotificationResponse[] | null;
    quantity?: IPriceQuantityNotification | null;
    status: Status;
    custom_data?: ICustomData | null;
    import_meta?: IImportMetaNotificationResponse | null;
}
