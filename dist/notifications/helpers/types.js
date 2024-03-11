"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventName = void 0;
var EventName;
(function (EventName) {
    EventName["AddressCreated"] = "address.created";
    EventName["AddressUpdated"] = "address.updated";
    EventName["AddressImported"] = "address.imported";
    EventName["AdjustmentCreated"] = "adjustment.created";
    EventName["AdjustmentUpdated"] = "adjustment.updated";
    EventName["BusinessCreated"] = "business.created";
    EventName["BusinessImported"] = "business.imported";
    EventName["BusinessUpdated"] = "business.updated";
    EventName["CustomerCreated"] = "customer.created";
    EventName["CustomerUpdated"] = "customer.updated";
    EventName["CustomerImported"] = "customer.imported";
    EventName["DiscountCreated"] = "discount.created";
    EventName["DiscountUpdated"] = "discount.updated";
    EventName["DiscountImported"] = "discount.imported";
    EventName["PayoutCreated"] = "payout.created";
    EventName["PayoutPaid"] = "payout.paid";
    EventName["PriceCreated"] = "price.created";
    EventName["PriceUpdated"] = "price.updated";
    EventName["PriceImported"] = "price.imported";
    EventName["ProductCreated"] = "product.created";
    EventName["ProductUpdated"] = "product.updated";
    EventName["ProductImported"] = "product.imported";
    EventName["SubscriptionActivated"] = "subscription.activated";
    EventName["SubscriptionCanceled"] = "subscription.canceled";
    EventName["SubscriptionImported"] = "subscription.imported";
    EventName["SubscriptionCreated"] = "subscription.created";
    EventName["SubscriptionPastDue"] = "subscription.past_due";
    EventName["SubscriptionPaused"] = "subscription.paused";
    EventName["SubscriptionResumed"] = "subscription.resumed";
    EventName["SubscriptionTrialing"] = "subscription.trialing";
    EventName["SubscriptionUpdated"] = "subscription.updated";
    EventName["TransactionBilled"] = "transaction.billed";
    EventName["TransactionCanceled"] = "transaction.canceled";
    EventName["TransactionCompleted"] = "transaction.completed";
    EventName["TransactionPaid"] = "transaction.paid";
    EventName["TransactionCreated"] = "transaction.created";
    EventName["TransactionPastDue"] = "transaction.past_due";
    EventName["TransactionPaymentFailed"] = "transaction.payment_failed";
    EventName["TransactionReady"] = "transaction.ready";
    EventName["TransactionUpdated"] = "transaction.updated";
    EventName["ReportCreated"] = "report.created";
    EventName["ReportUpdated"] = "report.updated";
})(EventName || (exports.EventName = EventName = {}));
