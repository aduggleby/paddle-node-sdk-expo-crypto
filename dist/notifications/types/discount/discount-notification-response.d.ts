import { type CurrencyCode, type DiscountStatus, type DiscountType } from '../../../enums';
import { type IImportMetaNotificationResponse } from '../shared';
import { type ICustomData } from '../../../types';
export interface IDiscountNotificationResponse {
    id: string;
    status: DiscountStatus;
    description: string;
    enabled_for_checkout: boolean;
    code?: string | null;
    type: DiscountType;
    amount: string;
    currency_code?: CurrencyCode | null;
    recur: boolean;
    maximum_recurring_intervals?: number | null;
    usage_limit?: number | null;
    restrict_to?: string[] | null;
    expires_at?: string | null;
    custom_data?: ICustomData | null;
    times_used: number;
    created_at: string;
    updated_at: string;
    import_meta?: IImportMetaNotificationResponse | null;
}
