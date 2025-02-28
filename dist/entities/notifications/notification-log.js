"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationLog = void 0;
class NotificationLog {
    constructor(notificationLogResponse) {
        var _a;
        this.id = notificationLogResponse.id;
        this.responseCode = notificationLogResponse.response_code;
        this.responseContentType = (_a = notificationLogResponse.response_content_type) !== null && _a !== void 0 ? _a : null;
        this.responseBody = notificationLogResponse.response_body;
        this.attemptedAt = notificationLogResponse.attempted_at;
    }
}
exports.NotificationLog = NotificationLog;
