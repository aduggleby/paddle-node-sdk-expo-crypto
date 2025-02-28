import { type ICustomData, type IImportMetaResponse } from '../index';
import { type Status } from '../../enums';
export interface ICustomerResponse {
    id: string;
    name?: string | null;
    email: string;
    marketing_consent: boolean;
    status: Status;
    custom_data?: ICustomData | null;
    locale: string;
    created_at: string;
    updated_at: string;
    import_meta?: IImportMetaResponse | null;
}
