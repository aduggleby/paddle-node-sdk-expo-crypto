import { type IBillingDetailsResponse, type ICustomData, type IImportMetaResponse, type INextTransactionResponse, type ISubscriptionDiscountResponse, type ISubscriptionItemResponse, type ISubscriptionManagementResponse, type ISubscriptionScheduledChangeResponse, type ISubscriptionTimePeriodResponse, type ITimePeriod, type ITransactionDetailsPreviewResponse } from '../index';
import { type CollectionMode, type CurrencyCode, type SubscriptionStatus } from '../../enums';
export interface ISubscriptionResponse {
    id: string;
    status: SubscriptionStatus;
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
    discount?: ISubscriptionDiscountResponse | null;
    collection_mode: CollectionMode;
    billing_details?: IBillingDetailsResponse | null;
    current_billing_period?: ISubscriptionTimePeriodResponse | null;
    billing_cycle: ITimePeriod;
    scheduled_change?: ISubscriptionScheduledChangeResponse | null;
    management_urls: ISubscriptionManagementResponse | null;
    items: ISubscriptionItemResponse[];
    custom_data?: ICustomData | null;
    next_transaction?: INextTransactionResponse | null;
    recurring_transaction_details?: ITransactionDetailsPreviewResponse | null;
    import_meta?: IImportMetaResponse | null;
}
