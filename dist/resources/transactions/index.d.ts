import { Transaction, TransactionCollection, TransactionInvoicePDF, TransactionPreview } from '../../entities';
import { BaseResource } from '../../internal/base';
import { type CreateTransactionQueryParameters, type CreateTransactionRequestBody, type GetTransactionQueryParameters, type ListTransactionQueryParameters, type TransactionPreviewRequestBody, type UpdateTransactionQueryParameters, type UpdateTransactionRequestBody } from './operations';
export * from './operations';
export declare class TransactionsResource extends BaseResource {
    list(queryParams?: ListTransactionQueryParameters): TransactionCollection;
    create(createTransactionParameters: CreateTransactionRequestBody, queryParams?: CreateTransactionQueryParameters): Promise<Transaction>;
    update(transactionId: string, updateTransaction: UpdateTransactionRequestBody, queryParams?: UpdateTransactionQueryParameters): Promise<Transaction>;
    get(transactionId: string, queryParams?: GetTransactionQueryParameters): Promise<Transaction>;
    getInvoicePDF(transactionId: string): Promise<TransactionInvoicePDF>;
    preview(previewTransactionParameters: TransactionPreviewRequestBody): Promise<TransactionPreview>;
}
