import { BaseResource } from '../../internal/base';
import { NotificationSettings } from '../../entities';
import { type CreateNotificationSettingsRequestBody, type UpdateNotificationSettingsRequestBody } from './operations';
export * from './operations';
export declare class NotificationSettingsResource extends BaseResource {
    list(): Promise<NotificationSettings[]>;
    create(createNotificationSettings: CreateNotificationSettingsRequestBody): Promise<NotificationSettings>;
    get(notificationId: string): Promise<NotificationSettings>;
    update(notificationId: string, updateNotificationSettings: UpdateNotificationSettingsRequestBody): Promise<NotificationSettings>;
    delete(notificationId: string): Promise<undefined>;
}
