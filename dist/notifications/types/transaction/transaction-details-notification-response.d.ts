import { type ITaxRatesUsedNotificationResponse, type ITransactionTotalsNotificationResponse, type ITransactionTotalsAdjustedNotificationResponse, type ITransactionPayoutTotalsNotificationResponse, type ITransactionPayoutTotalsAdjustedNotificationResponse, type ITransactionLineItemNotificationResponse } from '../index';
export interface ITransactionDetailsNotificationResponse {
    tax_rates_used: ITaxRatesUsedNotificationResponse[];
    totals?: ITransactionTotalsNotificationResponse | null;
    adjusted_totals?: ITransactionTotalsAdjustedNotificationResponse | null;
    payout_totals?: ITransactionPayoutTotalsNotificationResponse | null;
    adjusted_payout_totals?: ITransactionPayoutTotalsAdjustedNotificationResponse | null;
    line_items: ITransactionLineItemNotificationResponse[];
}
