import { type IAdjustmentItemNotificationResponse, type ITotalAdjustmentsNotificationResponse, type IPayoutTotalsAdjustmentNotificationResponse } from '../index';
import { type AdjustmentAction, type CurrencyCode, type AdjustmentStatus } from '../../../enums';
export interface IAdjustmentNotificationResponse {
    id: string;
    action: AdjustmentAction;
    transaction_id: string;
    subscription_id?: string | null;
    customer_id: string;
    reason: string;
    credit_applied_to_balance: boolean;
    currency_code: CurrencyCode;
    status: AdjustmentStatus;
    items: IAdjustmentItemNotificationResponse[];
    totals: ITotalAdjustmentsNotificationResponse;
    payout_totals?: IPayoutTotalsAdjustmentNotificationResponse | null;
    created_at: string;
    updated_at: string;
}
