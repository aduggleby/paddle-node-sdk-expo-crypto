import { ContactsNotification, ImportMetaNotification } from '../index';
import { type Status } from '../../../enums';
import { type IBusinessNotificationResponse } from '../../types';
import { type CustomData } from '../../../entities';
export declare class BusinessNotification {
    readonly id: string;
    readonly name: string;
    readonly companyNumber: string | null;
    readonly taxIdentifier: string | null;
    readonly status: Status;
    readonly contacts: ContactsNotification[] | null;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly customData: CustomData | null;
    readonly importMeta: ImportMetaNotification | null;
    constructor(business: IBusinessNotificationResponse);
}
