import { type NotificationSettingsType } from '../../enums';
import { type IEventTypeResponse } from '../event-types';
export interface INotificationSettingsResponse {
    id: string;
    description: string;
    type: NotificationSettingsType;
    destination: string;
    active: boolean;
    api_version: number;
    include_sensitive_fields: boolean;
    subscribed_events: IEventTypeResponse[];
    endpoint_secret_key: string;
}
