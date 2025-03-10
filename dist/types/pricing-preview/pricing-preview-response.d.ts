import { type CurrencyCode, type AvailablePaymentMethod } from '../../enums';
import { type IAddressPreviewResponse } from '../../resources';
import { type IPricingPreviewItemResponse } from './pricing-preview-item-response';
import { type IPricingPreviewDetailsResponse } from './pricing-preview-details-response';
export interface IPricingPreviewResponse {
    customer_id?: string | null;
    address_id?: string | null;
    business_id?: string | null;
    currency_code?: CurrencyCode | null;
    discount_id?: string | null;
    address?: IAddressPreviewResponse | null;
    customer_ip_address?: string | null;
    items: IPricingPreviewItemResponse[];
    details?: IPricingPreviewDetailsResponse | null;
    available_payment_method?: AvailablePaymentMethod | null;
}
