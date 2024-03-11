import { type IBillingDetailsUpdate, type ICustomData, type ITransactionCheckout, type ITransactionItemWithNonCatalogPrice, type ITransactionsTimePeriod } from '../../../types';
import { type CollectionMode, type CurrencyCode, type TransactionStatus } from '../../../enums';
export interface UpdateTransactionRequestBody {
    status?: TransactionStatus;
    customerId?: string | null;
    addressId?: string | null;
    businessId?: string | null;
    customData?: ICustomData | null;
    currencyCode?: CurrencyCode;
    collectionMode?: CollectionMode;
    discountId?: string | null;
    billingDetails?: IBillingDetailsUpdate | null;
    billingPeriod?: ITransactionsTimePeriod | null;
    items?: ITransactionItemWithNonCatalogPrice[];
    checkout?: ITransactionCheckout | null;
}
