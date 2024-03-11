import { type CountryCode, type Status } from '../../../enums';
import { type CustomData, ImportMeta } from '../../../entities';
import { type IAddressNotificationResponse } from '../../types';
export declare class AddressNotification {
    readonly id: string;
    readonly description: string | null;
    readonly firstLine: string | null;
    readonly secondLine: string | null;
    readonly city: string | null;
    readonly postalCode: string | null;
    readonly region: string | null;
    readonly countryCode: CountryCode;
    readonly customData: CustomData | null;
    readonly status: Status;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly importMeta: ImportMeta | null;
    constructor(address: IAddressNotificationResponse);
}
