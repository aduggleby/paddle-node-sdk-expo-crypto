import { Event } from '../../../entities/events/event';
import { BusinessNotification } from '../../entities';
import { type IEventsResponse } from '../../../types';
import { EventName } from '../../helpers';
import { type IBusinessNotificationResponse } from '../../types';
export declare class BusinessCreatedEvent extends Event {
    readonly eventType = EventName.BusinessCreated;
    readonly data: BusinessNotification;
    constructor(response: IEventsResponse<IBusinessNotificationResponse>);
}
