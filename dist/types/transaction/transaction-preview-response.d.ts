import { type CurrencyCode, type AvailablePaymentMethod } from '../../enums';
import { type IAddressPreviewResponse } from '../../resources';
import { type ITransactionDetailsPreviewResponse } from '../shared';
import { type IPriceResponse } from '../price';
import { type ITransactionsTimePeriodResponse } from './transactions-time-period-response';
export interface IProrationResponse {
    rate: string;
    billing_period: ITransactionsTimePeriodResponse;
}
export interface ITransactionItemPreviewResponse {
    price?: IPriceResponse | null;
    quantity: number;
    include_in_totals?: boolean | null;
    proration?: IProrationResponse | null;
}
export interface ITransactionPreviewResponse {
    customer_id?: string | null;
    address_id?: string | null;
    business_id?: string | null;
    currency_code: CurrencyCode;
    discount_id?: string | null;
    customer_ip_address?: string | null;
    address?: IAddressPreviewResponse | null;
    ignore_trials?: boolean | null;
    items: ITransactionItemPreviewResponse[];
    details: ITransactionDetailsPreviewResponse;
    available_payment_method?: AvailablePaymentMethod | null;
}
