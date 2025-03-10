import { type CurrencyCode, type DiscountType, type Status } from '../../../enums';
import { type ICustomData } from '../../../types';
export interface UpdateDiscountRequestBody {
    status?: Status;
    description?: string;
    enabledForCheckout?: boolean;
    code?: string | null;
    type?: DiscountType;
    amount?: string;
    currencyCode?: CurrencyCode | null;
    recur?: boolean;
    maximumRecurringIntervals?: number | null;
    usageLimit?: number | null;
    restrictTo?: string[] | null;
    expiresAt?: string | null;
    customData?: ICustomData | null;
}
