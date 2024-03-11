import { type ICustomData } from '../../../types';
import { type CountryCode, type Status } from '../../../enums';
export interface UpdateAddressRequestBody {
    description?: string | null;
    firstLine?: string | null;
    secondLine?: string | null;
    city?: string | null;
    postalCode?: string | null;
    region?: string | null;
    countryCode?: CountryCode;
    customData?: ICustomData | null;
    status?: Status;
}
