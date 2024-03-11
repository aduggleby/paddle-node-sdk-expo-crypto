import { type NotificationSettingsType } from '../../enums';
import { EventType } from '../event-types';
import { type INotificationSettingsResponse } from '../../types/notification-settings';
export declare class NotificationSettings {
    readonly id: string;
    readonly description: string;
    readonly type: NotificationSettingsType;
    readonly destination: string;
    readonly active: boolean;
    readonly apiVersion: number;
    readonly includeSensitiveFields: boolean;
    readonly subscribedEvents: EventType[];
    readonly endpointSecretKey: string;
    constructor(notificationSettings: INotificationSettingsResponse);
}
