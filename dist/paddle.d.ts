import { AddressesResource, AdjustmentsResource, BusinessesResource, CustomersResource, DiscountsResource, EventTypesResource, NotificationSettingsResource, NotificationsResource, PricesResource, PricingPreviewResource, ProductsResource, ReportsResource, SubscriptionsResource, TransactionsResource } from './resources';
import { type PaddleOptions } from './internal';
import { EventsResource } from './resources/events';
import { Webhooks } from './notifications';
export declare class Paddle {
    private readonly client;
    private readonly defaultPaddleOptions;
    products: ProductsResource;
    prices: PricesResource;
    transactions: TransactionsResource;
    adjustments: AdjustmentsResource;
    customers: CustomersResource;
    addresses: AddressesResource;
    businesses: BusinessesResource;
    discounts: DiscountsResource;
    subscriptions: SubscriptionsResource;
    pricingPreview: PricingPreviewResource;
    events: EventsResource;
    webhooks: Webhooks;
    eventTypes: EventTypesResource;
    notificationSettings: NotificationSettingsResource;
    notifications: NotificationsResource;
    reports: ReportsResource;
    constructor(apiKey: string, options?: PaddleOptions);
}
