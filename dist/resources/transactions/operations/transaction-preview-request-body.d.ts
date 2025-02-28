import { type CountryCode, type CurrencyCode } from '../../../enums';
import { type ITransactionItemPreviewRequest } from '../../../types';
export interface IAddressPreviewResponse {
    postal_code?: string | null;
    country_code: CountryCode;
}
export interface IAddressPreview {
    postalCode?: string | null;
    countryCode: CountryCode;
}
export interface TransactionPreviewRequestBody {
    items: ITransactionItemPreviewRequest[];
    customerId?: string | null;
    addressId?: string | null;
    businessId?: string | null;
    currencyCode?: CurrencyCode | null;
    discountId?: string | null;
    customerIpAddress?: string | null;
    address?: IAddressPreview | null;
    ignoreTrials?: boolean | null;
}
