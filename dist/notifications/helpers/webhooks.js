"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhooks = void 0;
const events_1 = require("../events");
const types_1 = require("./types");
const webhooks_validator_1 = require("./webhooks-validator");
const logger_1 = require("../../internal/base/logger");
class Webhooks {
    unmarshal(requestBody, secretKey, signature) {
        const isSignatureValid = new webhooks_validator_1.WebhooksValidator().isValidSignature(requestBody, secretKey, signature);
        if (isSignatureValid) {
            const parsedRequest = JSON.parse(requestBody);
            return Webhooks.fromJson(parsedRequest);
        }
        else {
            throw new Error('[Paddle] Webhook signature verification failed');
        }
    }
    isSignatureValid(requestBody, secretKey, signature) {
        return new webhooks_validator_1.WebhooksValidator().isValidSignature(requestBody, secretKey, signature);
    }
    static fromJson(data) {
        switch (data.event_type) {
            case types_1.EventName.AddressCreated:
                return new events_1.AddressCreatedEvent(data);
            case types_1.EventName.AddressUpdated:
                return new events_1.AddressUpdatedEvent(data);
            case types_1.EventName.AddressImported:
                return new events_1.AddressImportedEvent(data);
            case types_1.EventName.AdjustmentCreated:
                return new events_1.AdjustmentCreatedEvent(data);
            case types_1.EventName.AdjustmentUpdated:
                return new events_1.AdjustmentUpdatedEvent(data);
            case types_1.EventName.BusinessCreated:
                return new events_1.BusinessCreatedEvent(data);
            case types_1.EventName.BusinessUpdated:
                return new events_1.BusinessUpdatedEvent(data);
            case types_1.EventName.BusinessImported:
                return new events_1.BusinessImportedEvent(data);
            case types_1.EventName.CustomerCreated:
                return new events_1.CustomerCreatedEvent(data);
            case types_1.EventName.CustomerUpdated:
                return new events_1.CustomerUpdatedEvent(data);
            case types_1.EventName.CustomerImported:
                return new events_1.CustomerImportedEvent(data);
            case types_1.EventName.DiscountCreated:
                return new events_1.DiscountCreatedEvent(data);
            case types_1.EventName.DiscountImported:
                return new events_1.DiscountImportedEvent(data);
            case types_1.EventName.DiscountUpdated:
                return new events_1.DiscountUpdatedEvent(data);
            case types_1.EventName.PayoutCreated:
                return new events_1.PayoutCreatedEvent(data);
            case types_1.EventName.PayoutPaid:
                return new events_1.PayoutPaidEvent(data);
            case types_1.EventName.PriceCreated:
                return new events_1.PriceCreatedEvent(data);
            case types_1.EventName.PriceUpdated:
                return new events_1.PriceUpdatedEvent(data);
            case types_1.EventName.PriceImported:
                return new events_1.PriceImportedEvent(data);
            case types_1.EventName.ProductCreated:
                return new events_1.ProductCreatedEvent(data);
            case types_1.EventName.ProductUpdated:
                return new events_1.ProductUpdatedEvent(data);
            case types_1.EventName.ProductImported:
                return new events_1.ProductImportedEvent(data);
            case types_1.EventName.SubscriptionActivated:
                return new events_1.SubscriptionActivatedEvent(data);
            case types_1.EventName.SubscriptionCanceled:
                return new events_1.SubscriptionCanceledEvent(data);
            case types_1.EventName.SubscriptionCreated:
                return new events_1.SubscriptionCreatedEvent(data);
            case types_1.EventName.SubscriptionImported:
                return new events_1.SubscriptionImportedEvent(data);
            case types_1.EventName.SubscriptionPastDue:
                return new events_1.SubscriptionPastDueEvent(data);
            case types_1.EventName.SubscriptionPaused:
                return new events_1.SubscriptionPausedEvent(data);
            case types_1.EventName.SubscriptionResumed:
                return new events_1.SubscriptionResumedEvent(data);
            case types_1.EventName.SubscriptionTrialing:
                return new events_1.SubscriptionTrialingEvent(data);
            case types_1.EventName.SubscriptionUpdated:
                return new events_1.SubscriptionUpdatedEvent(data);
            case types_1.EventName.TransactionBilled:
                return new events_1.TransactionBilledEvent(data);
            case types_1.EventName.TransactionCanceled:
                return new events_1.TransactionCanceledEvent(data);
            case types_1.EventName.TransactionCompleted:
                return new events_1.TransactionCompletedEvent(data);
            case types_1.EventName.TransactionCreated:
                return new events_1.TransactionCreatedEvent(data);
            case types_1.EventName.TransactionPaid:
                return new events_1.TransactionPaidEvent(data);
            case types_1.EventName.TransactionPastDue:
                return new events_1.TransactionPastDueEvent(data);
            case types_1.EventName.TransactionPaymentFailed:
                return new events_1.TransactionPaymentFailedEvent(data);
            case types_1.EventName.TransactionReady:
                return new events_1.TransactionReadyEvent(data);
            case types_1.EventName.TransactionUpdated:
                return new events_1.TransactionUpdatedEvent(data);
            case types_1.EventName.ReportCreated:
                return new events_1.ReportCreatedEvent(data);
            case types_1.EventName.ReportUpdated:
                return new events_1.ReportUpdatedEvent(data);
            default:
                logger_1.Logger.log(`Unknown event_type ${data.event_type}`);
                return null;
        }
    }
}
exports.Webhooks = Webhooks;
