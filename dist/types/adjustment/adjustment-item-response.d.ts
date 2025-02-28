import { type IAdjustmentItemTotals, type IAdjustmentsProrationResponse } from '../index';
import { type AdjustmentType } from '../../enums';
export interface IAdjustmentItemResponse {
    id: string;
    item_id: string;
    type: AdjustmentType;
    amount?: string | null;
    proration?: IAdjustmentsProrationResponse | null;
    totals?: IAdjustmentItemTotals | null;
}
