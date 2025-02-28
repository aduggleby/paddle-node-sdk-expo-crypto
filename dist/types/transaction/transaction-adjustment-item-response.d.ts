import { type IAdjustmentItemTotals, type ITransactionProrationResponse } from '../index';
import { type AdjustmentType } from '../../enums';
export interface ITransactionAdjustmentItemResponse {
    id?: string | null;
    item_id: string;
    type: AdjustmentType;
    amount?: string | null;
    proration?: ITransactionProrationResponse | null;
    totals?: IAdjustmentItemTotals | null;
}
