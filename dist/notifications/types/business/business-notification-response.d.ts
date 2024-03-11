import { type IBusinessContactsNotification, type IImportMetaNotificationResponse } from '../index';
import { type Status } from '../../../enums';
import { type ICustomData } from '../../../types';
export interface IBusinessNotificationResponse {
    id: string;
    name: string;
    company_number?: string | null;
    tax_identifier?: string | null;
    status: Status;
    contacts?: IBusinessContactsNotification[] | null;
    created_at: string;
    updated_at: string;
    custom_data?: ICustomData | null;
    import_meta?: IImportMetaNotificationResponse | null;
}
