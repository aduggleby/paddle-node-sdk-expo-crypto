import { type ITotals } from '../../types';
export declare class Totals {
    readonly subtotal: string;
    readonly discount: string;
    readonly tax: string;
    readonly total: string;
    constructor(totals: ITotals);
}
