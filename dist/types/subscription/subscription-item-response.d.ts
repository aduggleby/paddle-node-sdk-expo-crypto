import { type IPriceResponse, type ISubscriptionTimePeriodResponse } from '../index';
import { type SubscriptionItemStatus } from '../../enums';
export interface ISubscriptionItemResponse {
    status: SubscriptionItemStatus;
    quantity: number;
    recurring: boolean;
    created_at: string;
    updated_at: string;
    previously_billed_at?: string | null;
    next_billed_at?: string | null;
    trial_dates?: ISubscriptionTimePeriodResponse | null;
    price?: IPriceResponse | null;
}
