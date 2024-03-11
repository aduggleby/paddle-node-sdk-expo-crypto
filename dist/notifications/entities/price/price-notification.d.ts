import { type IPriceNotificationResponse } from '../../types';
import { ImportMetaNotification, MoneyNotification, PriceQuantityNotification, TimePeriodNotification, UnitPriceOverrideNotification } from '../index';
import { type CatalogType, type Status, type TaxMode } from '../../../enums';
import { type ICustomData } from '../../../types';
export declare class PriceNotification {
    readonly id: string;
    readonly productId: string;
    readonly description: string;
    readonly name: string | null;
    readonly type: CatalogType | null;
    readonly billingCycle: TimePeriodNotification | null;
    readonly trialPeriod: TimePeriodNotification | null;
    readonly taxMode: TaxMode;
    readonly unitPrice: MoneyNotification;
    readonly unitPriceOverrides: UnitPriceOverrideNotification[];
    readonly quantity: PriceQuantityNotification;
    readonly status: Status;
    readonly customData: ICustomData | null;
    readonly importMeta: ImportMetaNotification | null;
    constructor(price: IPriceNotificationResponse);
}
