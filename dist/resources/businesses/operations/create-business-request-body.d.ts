import { type IBusinessContacts, type ICustomData } from '../../../types';
export interface CreateBusinessRequestBody {
    name: string;
    companyNumber?: string | null;
    taxIdentifier?: string | null;
    contacts?: IBusinessContacts[] | null;
    customData?: ICustomData | null;
}
