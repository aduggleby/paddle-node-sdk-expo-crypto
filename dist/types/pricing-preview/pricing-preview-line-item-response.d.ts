import { type IPriceResponse } from '../price';
import { type ITotals, type IUnitTotals } from '../shared';
import { type IProductResponse } from '../product';
import { type IPricingPreviewDiscountsResponse } from './pricing-preview-discounts-response';
export interface IPricingPreviewLineItemResponse {
    price: IPriceResponse;
    quantity: number;
    tax_rate: string;
    unit_totals: IUnitTotals;
    formatted_unit_totals: IUnitTotals;
    totals: ITotals;
    formatted_totals: ITotals;
    product: IProductResponse;
    discounts: IPricingPreviewDiscountsResponse[];
}
