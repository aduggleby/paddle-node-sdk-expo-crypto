import { type ICustomData, type IPriceResponse } from '../../types';
import { ImportMeta, Money, PriceQuantity, Product, TimePeriod, UnitPriceOverride } from '../index';
import { type CatalogType, type Status, type TaxMode } from '../../enums';
export declare class Price {
    readonly id: string;
    readonly productId: string;
    readonly description: string;
    readonly name: string | null;
    readonly type: CatalogType;
    readonly billingCycle: TimePeriod | null;
    readonly trialPeriod: TimePeriod | null;
    readonly taxMode: TaxMode;
    readonly unitPrice: Money;
    readonly unitPriceOverrides: UnitPriceOverride[];
    readonly quantity: PriceQuantity;
    readonly status: Status;
    readonly customData: ICustomData | null;
    readonly importMeta: ImportMeta | null;
    readonly product: Product | null;
    constructor(price: IPriceResponse);
}
