import { type ITaxRatesUsedResponse, type ITransactionTotalsResponse, type ITransactionTotalsAdjustedResponse, type ITransactionPayoutTotalsResponse, type ITransactionPayoutTotalsAdjustedResponse, type ITransactionLineItemResponse } from '../index';
export interface ITransactionDetailsResponse {
    tax_rates_used: ITaxRatesUsedResponse[];
    totals?: ITransactionTotalsResponse | null;
    adjusted_totals?: ITransactionTotalsAdjustedResponse | null;
    payout_totals?: ITransactionPayoutTotalsResponse | null;
    adjusted_payout_totals?: ITransactionPayoutTotalsAdjustedResponse | null;
    line_items: ITransactionLineItemResponse[];
}
