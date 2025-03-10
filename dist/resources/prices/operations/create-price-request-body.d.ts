import { type ICustomData, type IMoney, type IPriceQuantity, type ITimePeriod, type IUnitPriceOverride } from '../../../types';
import { type CatalogType, type TaxMode } from '../../../enums';
export interface CreatePriceRequestBody {
    name?: string | null;
    description: string;
    type?: CatalogType | null;
    productId: string;
    unitPrice: IMoney;
    billingCycle?: ITimePeriod | null;
    trialPeriod?: ITimePeriod | null;
    taxMode?: TaxMode;
    unitPriceOverrides?: IUnitPriceOverride[];
    quantity?: IPriceQuantity;
    customData?: ICustomData | null;
}
