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
exports.NotificationSettingsResource = void 0;
const base_1 = require("../../internal/base");
const entities_1 = require("../../entities");
const NotificationSettingsPaths = {
    list: '/notification-settings',
    create: '/notification-settings',
    get: '/notification-settings/{notification_setting_id}',
    update: '/notification-settings/{notification_setting_id}',
    delete: '/notification-settings/{notification_setting_id}',
};
__exportStar(require("./operations"), exports);
class NotificationSettingsResource extends base_1.BaseResource {
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get(NotificationSettingsPaths.list);
            const data = this.handleResponse(response);
            return data.map((notificationSetting) => new entities_1.NotificationSettings(notificationSetting));
        });
    }
    create(createNotificationSettings) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post(NotificationSettingsPaths.create, createNotificationSettings);
            const data = this.handleResponse(response);
            return new entities_1.NotificationSettings(data);
        });
    }
    get(notificationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(NotificationSettingsPaths.get, {
                notification_setting_id: notificationId,
            }).deriveUrl();
            const response = yield this.client.get(urlWithPathParams);
            const data = this.handleResponse(response);
            return new entities_1.NotificationSettings(data);
        });
    }
    update(notificationId, updateNotificationSettings) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(NotificationSettingsPaths.update, {
                notification_setting_id: notificationId,
            }).deriveUrl();
            const response = yield this.client.patch(urlWithPathParams, updateNotificationSettings);
            const data = this.handleResponse(response);
            return new entities_1.NotificationSettings(data);
        });
    }
    delete(notificationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(NotificationSettingsPaths.update, {
                notification_setting_id: notificationId,
            }).deriveUrl();
            const response = yield this.client.delete(urlWithPathParams);
            if (response) {
                this.handleResponse(response);
            }
        });
    }
}
exports.NotificationSettingsResource = NotificationSettingsResource;
