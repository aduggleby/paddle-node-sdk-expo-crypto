"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paddle = void 0;
const client_1 = require("./internal/api/client");
const resources_1 = require("./resources");
const internal_1 = require("./internal");
const events_1 = require("./resources/events");
const notifications_1 = require("./notifications");
class Paddle {
    constructor(apiKey, options) {
        this.defaultPaddleOptions = {
            environment: internal_1.Environment.production,
        };
        this.client = new client_1.Client(apiKey, options ? Object.assign(Object.assign({}, this.defaultPaddleOptions), options) : Object.assign({}, this.defaultPaddleOptions));
        this.products = new resources_1.ProductsResource(this.client);
        this.prices = new resources_1.PricesResource(this.client);
        this.transactions = new resources_1.TransactionsResource(this.client);
        this.adjustments = new resources_1.AdjustmentsResource(this.client);
        this.customers = new resources_1.CustomersResource(this.client);
        this.addresses = new resources_1.AddressesResource(this.client);
        this.businesses = new resources_1.BusinessesResource(this.client);
        this.discounts = new resources_1.DiscountsResource(this.client);
        this.subscriptions = new resources_1.SubscriptionsResource(this.client);
        this.pricingPreview = new resources_1.PricingPreviewResource(this.client);
        this.events = new events_1.EventsResource(this.client);
        this.webhooks = new notifications_1.Webhooks();
        this.eventTypes = new resources_1.EventTypesResource(this.client);
        this.notificationSettings = new resources_1.NotificationSettingsResource(this.client);
        this.notifications = new resources_1.NotificationsResource(this.client);
        this.reports = new resources_1.ReportsResource(this.client);
    }
}
exports.Paddle = Paddle;
