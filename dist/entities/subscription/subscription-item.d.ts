import { type ISubscriptionItemResponse } from '../../types';
import { Price, SubscriptionTimePeriod } from '../index';
import { type SubscriptionItemStatus } from '../../enums';
export declare class SubscriptionItem {
    readonly status: SubscriptionItemStatus;
    readonly quantity: number;
    readonly recurring: boolean;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly previouslyBilledAt: string | null;
    readonly nextBilledAt: string | null;
    readonly trialDates: SubscriptionTimePeriod | null;
    readonly price: Price | null;
    constructor(subscriptionItem: ISubscriptionItemResponse);
}
