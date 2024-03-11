import { type CurrencyCode, type AvailablePaymentMethod } from '../../enums';
import { type IPricingPreviewResponse } from '../../types';
import { AddressPreview } from '../transaction';
import { PricingPreviewDetails } from './pricing-preview-details';
export declare class PricingPreview {
    readonly customerId: string | null;
    readonly addressId: string | null;
    readonly businessId: string | null;
    readonly currencyCode: CurrencyCode | null;
    readonly discountId: string | null;
    readonly address: AddressPreview | null;
    readonly customerIpAddress: string | null;
    readonly details: PricingPreviewDetails | null;
    readonly availablePaymentMethods: AvailablePaymentMethod | null;
    constructor(pricePreview: IPricingPreviewResponse);
}
