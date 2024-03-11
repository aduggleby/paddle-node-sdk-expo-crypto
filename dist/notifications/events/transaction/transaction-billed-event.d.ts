import { Event } from '../../../entities/events/event';
import { TransactionNotification } from '../../entities';
import { EventName } from '../../helpers';
import { type IEventsResponse } from '../../../types';
import { type ITransactionNotificationResponse } from '../../types';
export declare class TransactionBilledEvent extends Event {
    readonly eventType = EventName.TransactionBilled;
    readonly data: TransactionNotification;
    constructor(response: IEventsResponse<ITransactionNotificationResponse>);
}
