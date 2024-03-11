import { type ISubscriptionItemNotificationResponse } from '../../types';
import { SubscriptionPriceNotification, SubscriptionTimePeriodNotification } from '../index';
import { type SubscriptionItemStatus } from '../../../enums';
export declare class SubscriptionItemNotification {
    readonly status: SubscriptionItemStatus;
    readonly quantity: number;
    readonly recurring: boolean;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly previouslyBilledAt: string | null;
    readonly nextBilledAt: string | null;
    readonly trialDates: SubscriptionTimePeriodNotification | null;
    readonly price: SubscriptionPriceNotification | null;
    constructor(subscriptionItem: ISubscriptionItemNotificationResponse);
}
