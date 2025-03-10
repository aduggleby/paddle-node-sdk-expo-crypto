import { type IBillingDetailsCreate, type ICustomData, type ITransactionCheckout, type ITransactionItemWithNonCatalogPrice, type ITransactionsTimePeriod } from '../../../types';
import { type CollectionMode, type CurrencyCode, type TransactionStatus } from '../../../enums';
export interface CreateTransactionRequestBody {
    items: ITransactionItemWithNonCatalogPrice[];
    status?: TransactionStatus;
    customerId?: string | null;
    addressId?: string | null;
    businessId?: string | null;
    customData?: ICustomData | null;
    currencyCode?: CurrencyCode;
    collectionMode?: CollectionMode;
    discountId?: string | null;
    billingDetails?: IBillingDetailsCreate | null;
    billingPeriod?: ITransactionsTimePeriod | null;
    checkout?: ITransactionCheckout;
}
