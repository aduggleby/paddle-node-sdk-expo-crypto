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
exports.SubscriptionsResource = void 0;
const entities_1 = require("../../entities");
const base_1 = require("../../internal/base");
const SubscriptionPaths = {
    get: '/subscriptions/{subscription_id}',
    update: '/subscriptions/{subscription_id}',
    updatePreview: '/subscriptions/{subscription_id}/preview',
    list: '/subscriptions',
    cancel: '/subscriptions/{subscription_id}/cancel',
    pause: '/subscriptions/{subscription_id}/pause',
    resume: '/subscriptions/{subscription_id}/resume',
    activate: '/subscriptions/{subscription_id}/activate',
    createOneTimeCharge: '/subscriptions/{subscription_id}/charge',
    previewOneTimeCharge: '/subscriptions/{subscription_id}/charge/preview',
    getTransactionToUpdatePaymentMethod: '/subscriptions/{subscription_id}/update-payment-method-transaction',
};
__exportStar(require("./operations"), exports);
class SubscriptionsResource extends base_1.BaseResource {
    previewUpdate(subscriptionId, updateSubscription) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(SubscriptionPaths.updatePreview, {
                subscription_id: subscriptionId,
            }).deriveUrl();
            const response = yield this.client.patch(urlWithPathParams, updateSubscription);
            const data = this.handleResponse(response);
            return new entities_1.SubscriptionPreview(data);
        });
    }
    update(subscriptionId, updateSubscription) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(SubscriptionPaths.update, {
                subscription_id: subscriptionId,
            }).deriveUrl();
            const response = yield this.client.patch(urlWithPathParams, updateSubscription);
            const data = this.handleResponse(response);
            return new entities_1.Subscription(data);
        });
    }
    list(queryParams) {
        const queryParameters = new base_1.QueryParameters(queryParams);
        return new entities_1.SubscriptionCollection(this.client, SubscriptionPaths.list + queryParameters.toQueryString());
    }
    get(subscriptionId, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = new base_1.QueryParameters(queryParams);
            const urlWithPathParams = new base_1.PathParameters(SubscriptionPaths.get, {
                subscription_id: subscriptionId,
            }).deriveUrl();
            const response = yield this.client.get(urlWithPathParams, queryParameters);
            const data = this.handleResponse(response);
            return new entities_1.Subscription(data);
        });
    }
    activate(subscriptionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(SubscriptionPaths.activate, {
                subscription_id: subscriptionId,
            }).deriveUrl();
            const response = yield this.client.post(urlWithPathParams, undefined);
            const data = this.handleResponse(response);
            return new entities_1.Subscription(data);
        });
    }
    pause(subscriptionId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(SubscriptionPaths.pause, {
                subscription_id: subscriptionId,
            }).deriveUrl();
            const response = yield this.client.post(urlWithPathParams, requestBody);
            const data = this.handleResponse(response);
            return new entities_1.Subscription(data);
        });
    }
    resume(subscriptionId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(SubscriptionPaths.resume, {
                subscription_id: subscriptionId,
            }).deriveUrl();
            const response = yield this.client.post(urlWithPathParams, requestBody);
            const data = this.handleResponse(response);
            return new entities_1.Subscription(data);
        });
    }
    cancel(subscriptionId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(SubscriptionPaths.cancel, {
                subscription_id: subscriptionId,
            }).deriveUrl();
            const response = yield this.client.post(urlWithPathParams, requestBody);
            const data = this.handleResponse(response);
            return new entities_1.Subscription(data);
        });
    }
    createOneTimeCharge(subscriptionId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(SubscriptionPaths.createOneTimeCharge, {
                subscription_id: subscriptionId,
            }).deriveUrl();
            const response = yield this.client.post(urlWithPathParams, requestBody);
            const data = this.handleResponse(response);
            return new entities_1.Subscription(data);
        });
    }
    previewOneTimeCharge(subscriptionId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(SubscriptionPaths.previewOneTimeCharge, {
                subscription_id: subscriptionId,
            }).deriveUrl();
            const response = yield this.client.post(urlWithPathParams, requestBody);
            const data = this.handleResponse(response);
            return new entities_1.SubscriptionPreview(data);
        });
    }
    getPaymentMethodChangeTransaction(subscriptionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(SubscriptionPaths.getTransactionToUpdatePaymentMethod, {
                subscription_id: subscriptionId,
            }).deriveUrl();
            const response = yield this.client.get(urlWithPathParams);
            const data = this.handleResponse(response);
            return new entities_1.Transaction(data);
        });
    }
}
exports.SubscriptionsResource = SubscriptionsResource;
