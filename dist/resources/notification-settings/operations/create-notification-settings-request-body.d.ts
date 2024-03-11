import { type NotificationSettingsType } from '../../../enums';
import { type IEventName } from '../../../notifications';
export interface CreateNotificationSettingsRequestBody {
    description: string;
    destination: string;
    subscribedEvents: IEventName[];
    type: NotificationSettingsType;
    apiVersion?: number | null;
    includeSensitiveFields?: boolean | null;
}
