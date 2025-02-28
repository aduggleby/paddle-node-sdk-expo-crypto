import { type CollectionMode, type TransactionStatus, type TransactionOrigin } from '../../../enums';
export interface ListTransactionQueryParameters {
    after?: string;
    billedAt?: string;
    'billedAt[LT]'?: string;
    'billedAt[GT]'?: string;
    'billedAt[LTE]'?: string;
    'billedAt[GTE]'?: string;
    collectionMode?: CollectionMode;
    createdAt?: string;
    'createdAt[LT]'?: string;
    'createdAt[GT]'?: string;
    'createdAt[LTE]'?: string;
    'createdAt[GTE]'?: string;
    customerId?: string[];
    id?: string[];
    include?: Array<'address' | 'adjustment' | 'adjustments_totals' | 'business' | 'customer' | 'discount'>;
    invoiceNumber?: string[];
    orderBy?: string;
    status?: TransactionStatus[];
    subscriptionId?: string[];
    perPage?: number;
    updatedAt?: string;
    'updatedAt[LT]'?: string;
    'updatedAt[GT]'?: string;
    'updatedAt[LTE]'?: string;
    'updatedAt[GTE]'?: string;
    origin?: TransactionOrigin[];
}
