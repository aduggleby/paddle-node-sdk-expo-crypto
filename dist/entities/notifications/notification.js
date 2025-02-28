"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const notifications_1 = require("../../notifications");
class Notification {
    constructor(notificationResponse) {
        var _a, _b, _c, _d;
        this.id = notificationResponse.id;
        this.type = notificationResponse.type;
        this.status = notificationResponse.status;
        this.payload = notifications_1.Webhooks.fromJson(notificationResponse.payload);
        this.occurredAt = notificationResponse.occurred_at;
        this.deliveredAt = (_a = notificationResponse.delivered_at) !== null && _a !== void 0 ? _a : null;
        this.replayedAt = (_b = notificationResponse.replayed_at) !== null && _b !== void 0 ? _b : null;
        this.origin = notificationResponse.origin;
        this.lastAttemptAt = (_c = notificationResponse.last_attempt_at) !== null && _c !== void 0 ? _c : null;
        this.retryAt = (_d = notificationResponse.retry_at) !== null && _d !== void 0 ? _d : null;
        this.timesAttempted = notificationResponse.times_attempted;
        this.notificationSettingId = notificationResponse.notification_setting_id;
    }
}
exports.Notification = Notification;
