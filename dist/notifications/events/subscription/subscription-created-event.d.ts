import { Event } from '../../../entities/events/event';
import { SubscriptionNotification } from '../../entities';
import { EventName } from '../../helpers';
import { type IEventsResponse } from '../../../types';
import { type ISubscriptionNotificationResponse } from '../../types';
export declare class SubscriptionCreatedEvent extends Event {
    readonly eventType = EventName.SubscriptionCreated;
    readonly data: SubscriptionNotification;
    constructor(response: IEventsResponse<ISubscriptionNotificationResponse>);
}
