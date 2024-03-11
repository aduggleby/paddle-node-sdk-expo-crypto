import { type EventName, type IAddressNotificationResponse, type IAdjustmentNotificationResponse, type IBusinessNotificationResponse, type ICustomerNotificationResponse, type IDiscountNotificationResponse, type IPayoutNotificationResponse, type IPriceNotificationResponse, type IProductNotificationResponse, type IReportNotificationResponse, type ISubscriptionNotificationResponse, type ITransactionNotificationResponse } from '../../notifications';
export interface IEventsResponse<T = object> {
    event_id: string;
    notification_id: string;
    event_type: string;
    occurred_at: string;
    data: T;
}
interface IAddressCreated extends IEventsResponse<IAddressNotificationResponse> {
    event_type: EventName.AddressCreated;
}
interface IAddressUpdated extends IEventsResponse<IAddressNotificationResponse> {
    event_type: EventName.AddressUpdated;
}
interface IAddressImported extends IEventsResponse<IAddressNotificationResponse> {
    event_type: EventName.AddressImported;
}
interface IAdjustmentCreated extends IEventsResponse<IAdjustmentNotificationResponse> {
    event_type: EventName.AdjustmentCreated;
}
interface IAdjustmentUpdated extends IEventsResponse<IAdjustmentNotificationResponse> {
    event_type: EventName.AdjustmentUpdated;
}
interface IBusinessCreated extends IEventsResponse<IBusinessNotificationResponse> {
    event_type: EventName.BusinessCreated;
}
interface IBusinessUpdated extends IEventsResponse<IBusinessNotificationResponse> {
    event_type: EventName.BusinessUpdated;
}
interface IBusinessImported extends IEventsResponse<IBusinessNotificationResponse> {
    event_type: EventName.BusinessImported;
}
interface ICustomerCreated extends IEventsResponse<ICustomerNotificationResponse> {
    event_type: EventName.CustomerCreated;
}
interface ICustomerUpdated extends IEventsResponse<ICustomerNotificationResponse> {
    event_type: EventName.CustomerUpdated;
}
interface ICustomerImported extends IEventsResponse<ICustomerNotificationResponse> {
    event_type: EventName.CustomerImported;
}
interface IDiscountCreated extends IEventsResponse<IDiscountNotificationResponse> {
    event_type: EventName.DiscountCreated;
}
interface IDiscountUpdated extends IEventsResponse<IDiscountNotificationResponse> {
    event_type: EventName.DiscountUpdated;
}
interface IDiscountImported extends IEventsResponse<IDiscountNotificationResponse> {
    event_type: EventName.DiscountImported;
}
interface IPayoutCreated extends IEventsResponse<IPayoutNotificationResponse> {
    event_type: EventName.PayoutCreated;
}
interface IPayoutPaid extends IEventsResponse<IPayoutNotificationResponse> {
    event_type: EventName.PayoutPaid;
}
interface IPriceCreated extends IEventsResponse<IPriceNotificationResponse> {
    event_type: EventName.PriceCreated;
}
interface IPriceUpdated extends IEventsResponse<IPriceNotificationResponse> {
    event_type: EventName.PriceUpdated;
}
interface IPriceImported extends IEventsResponse<IPriceNotificationResponse> {
    event_type: EventName.PriceImported;
}
interface IProductCreated extends IEventsResponse<IProductNotificationResponse> {
    event_type: EventName.ProductCreated;
}
interface IProductUpdated extends IEventsResponse<IProductNotificationResponse> {
    event_type: EventName.ProductUpdated;
}
interface IProductImported extends IEventsResponse<IProductNotificationResponse> {
    event_type: EventName.ProductImported;
}
interface ISubscriptionActivated extends IEventsResponse<ISubscriptionNotificationResponse> {
    event_type: EventName.SubscriptionActivated;
}
interface ISubscriptionCanceled extends IEventsResponse<ISubscriptionNotificationResponse> {
    event_type: EventName.SubscriptionCanceled;
}
interface ISubscriptionCreated extends IEventsResponse<ISubscriptionNotificationResponse> {
    event_type: EventName.SubscriptionCreated;
}
interface ISubscriptionImported extends IEventsResponse<ISubscriptionNotificationResponse> {
    event_type: EventName.SubscriptionImported;
}
interface ISubscriptionPastDue extends IEventsResponse<ISubscriptionNotificationResponse> {
    event_type: EventName.SubscriptionPastDue;
}
interface ISubscriptionPaused extends IEventsResponse<ISubscriptionNotificationResponse> {
    event_type: EventName.SubscriptionPaused;
}
interface ISubscriptionResumed extends IEventsResponse<ISubscriptionNotificationResponse> {
    event_type: EventName.SubscriptionResumed;
}
interface ISubscriptionTrialing extends IEventsResponse<ISubscriptionNotificationResponse> {
    event_type: EventName.SubscriptionTrialing;
}
interface ISubscriptionUpdated extends IEventsResponse<ISubscriptionNotificationResponse> {
    event_type: EventName.SubscriptionUpdated;
}
interface ITransactionBilled extends IEventsResponse<ITransactionNotificationResponse> {
    event_type: EventName.TransactionBilled;
}
interface ITransactionCanceled extends IEventsResponse<ITransactionNotificationResponse> {
    event_type: EventName.TransactionCanceled;
}
interface ITransactionCompleted extends IEventsResponse<ITransactionNotificationResponse> {
    event_type: EventName.TransactionCompleted;
}
interface ITransactionCreated extends IEventsResponse<ITransactionNotificationResponse> {
    event_type: EventName.TransactionCreated;
}
interface ITransactionPaid extends IEventsResponse<ITransactionNotificationResponse> {
    event_type: EventName.TransactionPaid;
}
interface ITransactionPastDue extends IEventsResponse<ITransactionNotificationResponse> {
    event_type: EventName.TransactionPastDue;
}
interface ITransactionPaymentFailed extends IEventsResponse<ITransactionNotificationResponse> {
    event_type: EventName.TransactionPaymentFailed;
}
interface ITransactionReady extends IEventsResponse<ITransactionNotificationResponse> {
    event_type: EventName.TransactionReady;
}
interface ITransactionUpdated extends IEventsResponse<ITransactionNotificationResponse> {
    event_type: EventName.TransactionUpdated;
}
interface IReportCreated extends IEventsResponse<IReportNotificationResponse> {
    event_type: EventName.ReportCreated;
}
interface IReportUpdated extends IEventsResponse<IReportNotificationResponse> {
    event_type: EventName.ReportUpdated;
}
export type IEvents = IAddressCreated | IAddressUpdated | IAddressImported | IAdjustmentCreated | IAdjustmentUpdated | IBusinessCreated | IBusinessUpdated | IBusinessImported | ICustomerCreated | ICustomerUpdated | ICustomerImported | IDiscountCreated | IDiscountUpdated | IDiscountImported | IPayoutCreated | IPayoutPaid | IPriceCreated | IPriceUpdated | IPriceImported | IProductCreated | IProductUpdated | IProductImported | ISubscriptionActivated | ISubscriptionCanceled | ISubscriptionCreated | ISubscriptionImported | ISubscriptionPastDue | ISubscriptionPaused | ISubscriptionResumed | ISubscriptionTrialing | ISubscriptionUpdated | ITransactionBilled | ITransactionCanceled | ITransactionCompleted | ITransactionCreated | ITransactionPaid | ITransactionPastDue | ITransactionPaymentFailed | ITransactionReady | ITransactionUpdated | IReportCreated | IReportUpdated;
export {};
