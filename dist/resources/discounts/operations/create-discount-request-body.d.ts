import { type CurrencyCode, type DiscountType } from '../../../enums';
import { type ICustomData } from '../../../types';
export interface CreateDiscountRequestBody {
    amount: string;
    description: string;
    type: DiscountType;
    enabledForCheckout?: boolean;
    code?: string | null;
    currencyCode?: CurrencyCode | null;
    recur?: boolean;
    maximumRecurringIntervals?: number | null;
    usageLimit?: number | null;
    restrictTo?: string[] | null;
    expiresAt?: string | null;
    customData?: ICustomData | null;
}
