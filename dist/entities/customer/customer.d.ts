import { type CustomData, ImportMeta } from '../index';
import { type Status } from '../../enums';
import { type ICustomerResponse } from '../../types';
export declare class Customer {
    readonly id: string;
    readonly name: string | null;
    readonly email: string;
    readonly marketingConsent: boolean;
    readonly status: Status;
    readonly customData: CustomData | null;
    readonly locale: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly importMeta: ImportMeta | null;
    constructor(customer: ICustomerResponse);
}
