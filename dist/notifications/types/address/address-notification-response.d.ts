import { type CountryCode, type Status } from '../../../enums';
import { type ICustomData, type IImportMetaResponse } from '../../../types';
export interface IAddressNotificationResponse {
    id: string;
    description?: string | null;
    first_line?: string | null;
    second_line?: string | null;
    city?: string | null;
    postal_code?: string | null;
    region?: string | null;
    country_code: CountryCode;
    custom_data?: ICustomData | null;
    status: Status;
    created_at: string;
    updated_at: string;
    import_meta?: IImportMetaResponse | null;
}
