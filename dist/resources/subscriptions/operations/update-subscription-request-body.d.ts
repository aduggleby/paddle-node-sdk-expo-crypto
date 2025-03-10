import { type IBillingDetailsUpdate, type ICustomData, type ISubscriptionUpdateItem } from '../../../types';
import { type CollectionMode, type CurrencyCode, type ProrationBillingMode, type SubscriptionEffectiveFrom, type SubscriptionOnPaymentFailure } from '../../../enums';
export interface UpdateSubscriptionDiscount {
    id: string;
    effectiveFrom: SubscriptionEffectiveFrom;
}
export interface UpdateSubscriptionScheduledChange {
    action: 'cancel' | 'pause' | 'resume';
    effectiveAt: string;
    resumeAt?: string | null;
}
export interface UpdateSubscriptionRequestBody {
    customerId?: string;
    addressId?: string;
    businessId?: string | null;
    currencyCode?: CurrencyCode;
    nextBilledAt?: string;
    discount?: UpdateSubscriptionDiscount | null;
    collectionMode?: CollectionMode;
    billingDetails?: IBillingDetailsUpdate | null;
    scheduledChange?: UpdateSubscriptionScheduledChange | null;
    items?: ISubscriptionUpdateItem[];
    customData?: ICustomData | null;
    prorationBillingMode?: ProrationBillingMode;
    onPaymentFailure?: SubscriptionOnPaymentFailure;
}
