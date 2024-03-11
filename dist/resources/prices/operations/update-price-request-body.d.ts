import { type ICustomData, type IMoney, type IPriceQuantity, type ITimePeriod, type IUnitPriceOverride } from '../../../types';
import { type CatalogType, type Status, type TaxMode } from '../../../enums';
export interface UpdatePriceRequestBody {
    description?: string;
    name?: string | null;
    type?: CatalogType | null;
    billingCycle?: ITimePeriod | null;
    trialPeriod?: ITimePeriod | null;
    taxMode?: TaxMode;
    unitPrice?: IMoney;
    unitPriceOverrides?: IUnitPriceOverride[];
    quantity?: IPriceQuantity;
    status?: Status;
    customData?: ICustomData | null;
}
