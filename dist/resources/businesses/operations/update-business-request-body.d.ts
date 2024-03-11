import { type IBusinessContacts, type ICustomData } from '../../../types';
import { type Status } from '../../../enums';
export interface UpdateBusinessRequestBody {
    name?: string;
    companyNumber?: string | null;
    taxIdentifier?: string | null;
    status?: Status;
    contacts?: IBusinessContacts[] | null;
    customData?: ICustomData | null;
}
