import { type IBillingDetailsNotificationResponse, type ITransactionCheckoutNotification, type ITransactionDetailsNotificationResponse, type ITransactionItemNotificationResponse, type ITransactionPaymentAttemptNotificationResponse, type ITransactionsTimePeriodNotificationResponse } from '../index';
import { type CollectionMode, type CurrencyCode, type TransactionOrigin, type TransactionStatus } from '../../../enums';
import { type ICustomData } from '../../../types';
export interface ITransactionNotificationResponse {
    id: string;
    status: TransactionStatus;
    customer_id?: string | null;
    address_id?: string | null;
    business_id?: string | null;
    custom_data?: ICustomData | null;
    currency_code: CurrencyCode;
    origin: TransactionOrigin;
    subscription_id?: string | null;
    invoice_id?: string | null;
    invoice_number?: string | null;
    collection_mode: CollectionMode;
    discount_id?: string | null;
    billing_details?: IBillingDetailsNotificationResponse | null;
    billing_period?: ITransactionsTimePeriodNotificationResponse | null;
    items: ITransactionItemNotificationResponse[];
    details?: ITransactionDetailsNotificationResponse | null;
    payments: ITransactionPaymentAttemptNotificationResponse[];
    checkout?: ITransactionCheckoutNotification | null;
    created_at: string;
    updated_at: string;
    billed_at?: string | null;
}
