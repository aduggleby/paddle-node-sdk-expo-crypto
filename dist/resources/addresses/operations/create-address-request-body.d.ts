import { type ICustomData } from '../../../types';
import { type CountryCode } from '../../../enums';
export interface CreateAddressRequestBody {
    countryCode: CountryCode;
    description?: string | null;
    firstLine?: string | null;
    secondLine?: string | null;
    city?: string | null;
    postalCode?: string | null;
    region?: string | null;
    customData?: ICustomData | null;
}
