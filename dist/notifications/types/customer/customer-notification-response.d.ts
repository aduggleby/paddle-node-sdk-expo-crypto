import { type IImportMetaNotificationResponse } from '../index';
import { type Status } from '../../../enums';
import { type ICustomData } from '../../../types';
export interface ICustomerNotificationResponse {
    id: string;
    name?: string | null;
    email: string;
    marketing_consent: boolean;
    status: Status;
    custom_data?: ICustomData | null;
    locale: string;
    created_at: string;
    updated_at: string;
    import_meta?: IImportMetaNotificationResponse | null;
}
