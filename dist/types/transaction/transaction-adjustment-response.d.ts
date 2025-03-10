import { type ITransactionAdjustmentItemResponse, type ITotalAdjustmentsResponse, type IPayoutTotalsAdjustmentResponse } from '../index';
import { type AdjustmentAction, type CurrencyCode, type AdjustmentStatus } from '../../enums';
export interface ITransactionAdjustmentResponse {
    id: string;
    action: AdjustmentAction;
    transaction_id: string;
    subscription_id?: string | null;
    customer_id: string;
    reason: string;
    credit_applied_to_balance: boolean;
    currency_code: CurrencyCode;
    status: AdjustmentStatus;
    items: ITransactionAdjustmentItemResponse[];
    totals?: ITotalAdjustmentsResponse | null;
    payout_totals?: IPayoutTotalsAdjustmentResponse | null;
    created_at: string;
    updated_at: string;
}
