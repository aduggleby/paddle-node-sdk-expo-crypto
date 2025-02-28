import { type NotificationStatus, type Origin } from '../../enums';
import type { IEvents } from '../events';
import { type IEventName } from '../../notifications';
export interface INotificationResponse {
    id: string;
    type: IEventName;
    status: NotificationStatus;
    payload: IEvents;
    occurred_at: string;
    delivered_at?: null | string;
    replayed_at?: null | string;
    origin: Origin;
    last_attempt_at?: null | string;
    retry_at?: null | string;
    times_attempted: number;
    notification_setting_id: string;
}
