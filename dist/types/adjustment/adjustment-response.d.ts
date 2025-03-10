import { type IAdjustmentItemResponse, type ITotalAdjustmentsResponse, type IPayoutTotalsAdjustmentResponse } from '../index';
import { type AdjustmentAction, type CurrencyCode, type AdjustmentStatus } from '../../enums';
export interface IAdjustmentResponse {
    id: string;
    action: AdjustmentAction;
    transaction_id: string;
    subscription_id?: string | null;
    customer_id: string;
    reason: string;
    credit_applied_to_balance: boolean;
    currency_code: CurrencyCode;
    status: AdjustmentStatus;
    items: IAdjustmentItemResponse[];
    totals: ITotalAdjustmentsResponse;
    payout_totals?: IPayoutTotalsAdjustmentResponse | null;
    created_at: string;
    updated_at: string;
}
