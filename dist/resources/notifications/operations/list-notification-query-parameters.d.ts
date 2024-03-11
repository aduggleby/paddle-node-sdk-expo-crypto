import { type NotificationStatus } from '../../../enums';
export interface ListNotificationQueryParameters {
    after?: string;
    notificationSettingId?: string[];
    orderBy?: string;
    perPage?: number;
    search?: string;
    status?: NotificationStatus[];
    filter?: string;
    to?: string;
    from?: string;
}
