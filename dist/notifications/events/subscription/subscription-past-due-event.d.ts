import { Event } from '../../../entities/events/event';
import { SubscriptionNotification } from '../../entities';
import { EventName } from '../../helpers';
import { type IEventsResponse } from '../../../types';
import { type ISubscriptionNotificationResponse } from '../../types';
export declare class SubscriptionPastDueEvent extends Event {
    readonly eventType = EventName.SubscriptionPastDue;
    readonly data: Omit<SubscriptionNotification, 'transactionId'>;
    constructor(response: IEventsResponse<ISubscriptionNotificationResponse>);
}
