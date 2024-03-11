import { type IEventName } from '../../../notifications';
export interface UpdateNotificationSettingsRequestBody {
    description?: string;
    destination?: string;
    active?: boolean;
    apiVersion?: number;
    includeSensitiveFields?: boolean;
    subscribedEvents?: IEventName[];
}
