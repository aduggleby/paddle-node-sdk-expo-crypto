import { Contacts, type CustomData, ImportMeta } from '../index';
import { type Status } from '../../enums';
import { type IBusinessResponse } from '../../types';
export declare class Business {
    readonly id: string;
    readonly name: string;
    readonly companyNumber: string | null;
    readonly taxIdentifier: string | null;
    readonly status: Status;
    readonly contacts: Contacts[] | null;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly customData: CustomData | null;
    readonly importMeta: ImportMeta | null;
    constructor(business: IBusinessResponse);
}
