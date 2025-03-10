import { type ITransactionPaymentAttemptResponse } from '../../types';
import { PaymentMethodDetails } from '../index';
import { type PaymentAttemptStatus, type ErrorCode } from '../../enums';
export declare class TransactionPaymentAttempt {
    readonly paymentAttemptId: string;
    readonly paymentMethodId: string;
    readonly storedPaymentMethodId: string;
    readonly amount: string;
    readonly status: PaymentAttemptStatus;
    readonly errorCode: ErrorCode | null;
    readonly methodDetails: PaymentMethodDetails | null;
    readonly createdAt: string;
    readonly capturedAt: string | null;
    constructor(transactionPaymentAttempt: ITransactionPaymentAttemptResponse);
}
