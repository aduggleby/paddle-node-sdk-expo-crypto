"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsResource = void 0;
const base_1 = require("../../internal/base");
const entities_1 = require("../../entities");
const NotificationPaths = {
    list: '/notifications',
    get: '/notifications/{notification_id}',
    getLogs: '/notifications/{notification_id}/logs',
    replay: '/notifications/{notification_id}/replay',
};
__exportStar(require("./operations"), exports);
class NotificationsResource extends base_1.BaseResource {
    list(queryParams) {
        const queryParameters = new base_1.QueryParameters(queryParams);
        return new entities_1.NotificationCollection(this.client, NotificationPaths.list + queryParameters.toQueryString());
    }
    get(notificationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(NotificationPaths.get, {
                notification_id: notificationId,
            }).deriveUrl();
            const response = yield this.client.get(urlWithPathParams);
            const data = this.handleResponse(response);
            return new entities_1.Notification(data);
        });
    }
    replay(notificationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(NotificationPaths.replay, {
                notification_id: notificationId,
            }).deriveUrl();
            const response = yield this.client.post(urlWithPathParams, undefined);
            const data = this.handleResponse(response);
            return new entities_1.ReplayNotification(data);
        });
    }
    getLogs(notificationId, queryParams) {
        const queryParameters = new base_1.QueryParameters(queryParams);
        const urlWithPathParams = new base_1.PathParameters(NotificationPaths.getLogs, {
            notification_id: notificationId,
        }).deriveUrl();
        return new entities_1.NotificationLogCollection(this.client, urlWithPathParams + queryParameters.toQueryString());
    }
}
exports.NotificationsResource = NotificationsResource;
