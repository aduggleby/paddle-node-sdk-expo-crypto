"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSettings = void 0;
const event_types_1 = require("../event-types");
class NotificationSettings {
    constructor(notificationSettings) {
        this.id = notificationSettings.id;
        this.description = notificationSettings.description;
        this.type = notificationSettings.type;
        this.destination = notificationSettings.destination;
        this.active = notificationSettings.active;
        this.apiVersion = notificationSettings.api_version;
        this.includeSensitiveFields = notificationSettings.include_sensitive_fields;
        this.subscribedEvents = notificationSettings.subscribed_events.map((subscribed_event) => new event_types_1.EventType(subscribed_event));
        this.endpointSecretKey = notificationSettings.endpoint_secret_key;
    }
}
exports.NotificationSettings = NotificationSettings;
