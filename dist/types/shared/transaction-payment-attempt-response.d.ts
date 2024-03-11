import { type IPaymentMethodDetails } from '../index';
import { type PaymentAttemptStatus, type ErrorCode } from '../../enums';
export interface ITransactionPaymentAttemptResponse {
    payment_attempt_id: string;
    stored_payment_method_id: string;
    payment_method_id: string;
    amount: string;
    status: PaymentAttemptStatus;
    error_code?: ErrorCode | null;
    method_details?: IPaymentMethodDetails | null;
    created_at: string;
    captured_at?: string | null;
}
