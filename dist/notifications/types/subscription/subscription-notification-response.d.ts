import { type IBillingDetailsNotificationResponse, type IImportMetaNotificationResponse, type ISubscriptionDiscountNotificationResponse, type ISubscriptionItemNotificationResponse, type ISubscriptionScheduledChangeNotificationResponse, type ISubscriptionTimePeriodNotificationResponse, type ITimePeriodNotification } from '../index';
import { type CollectionMode, type CurrencyCode, type SubscriptionStatus } from '../../../enums';
import { type ICustomData } from '../../../types';
export interface ISubscriptionNotificationResponse {
    id: string;
    status: SubscriptionStatus;
    transaction_id: string;
    customer_id: string;
    address_id: string;
    business_id?: string | null;
    currency_code: CurrencyCode;
    created_at: string;
    updated_at: string;
    started_at?: string | null;
    first_billed_at?: string | null;
    next_billed_at?: string | null;
    paused_at?: string | null;
    canceled_at?: string | null;
    discount?: ISubscriptionDiscountNotificationResponse | null;
    collection_mode: CollectionMode;
    billing_details?: IBillingDetailsNotificationResponse | null;
    current_billing_period?: ISubscriptionTimePeriodNotificationResponse | null;
    billing_cycle: ITimePeriodNotification;
    scheduled_change?: ISubscriptionScheduledChangeNotificationResponse | null;
    items: ISubscriptionItemNotificationResponse[];
    custom_data?: ICustomData | null;
    import_meta?: IImportMetaNotificationResponse | null;
}
