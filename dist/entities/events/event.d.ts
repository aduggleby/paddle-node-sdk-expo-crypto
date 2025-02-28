import { type IEventsResponse } from '../../types';
export declare class Event {
    eventId: string;
    notificationId: string | null;
    eventType: string;
    occurredAt: string;
    data: object;
    constructor(eventData: IEventsResponse);
}
