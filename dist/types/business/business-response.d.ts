import { type IBusinessContacts, type ICustomData, type IImportMetaResponse } from '../index';
import { type Status } from '../../enums';
export interface IBusinessResponse {
    id: string;
    name: string;
    company_number?: string | null;
    tax_identifier?: string | null;
    status: Status;
    contacts?: IBusinessContacts[] | null;
    created_at: string;
    updated_at: string;
    custom_data?: ICustomData | null;
    import_meta?: IImportMetaResponse | null;
}
