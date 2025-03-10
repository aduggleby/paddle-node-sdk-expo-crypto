import { type IImportMetaNotificationResponse, type IMoneyNotificationResponse, type IPriceQuantityNotification, type ISharedProductNotificationResponse, type ITimePeriodNotification, type IUnitPriceOverrideNotificationResponse } from '../index';
import { type CatalogType, type Status, type TaxMode } from '../../../enums';
import type { ICustomData } from '../../../types';
export interface ISubscriptionPriceNotificationResponse {
    id: string;
    product_id: string;
    description: string;
    type?: CatalogType | null;
    name?: string | null;
    billing_cycle?: ITimePeriodNotification | null;
    trial_period?: ITimePeriodNotification | null;
    tax_mode: TaxMode;
    unit_price?: IMoneyNotificationResponse | null;
    unit_price_overrides?: IUnitPriceOverrideNotificationResponse[] | null;
    quantity?: IPriceQuantityNotification | null;
    status?: Status | null;
    custom_data?: ICustomData | null;
    import_meta?: IImportMetaNotificationResponse | null;
    product?: ISharedProductNotificationResponse | null;
}
