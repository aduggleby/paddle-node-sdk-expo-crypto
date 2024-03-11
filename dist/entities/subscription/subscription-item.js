"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionItem = void 0;
const index_1 = require("../index");
class SubscriptionItem {
    constructor(subscriptionItem) {
        this.status = subscriptionItem.status;
        this.quantity = subscriptionItem.quantity;
        this.recurring = subscriptionItem.recurring;
        this.createdAt = subscriptionItem.created_at;
        this.updatedAt = subscriptionItem.updated_at;
        this.previouslyBilledAt = subscriptionItem.previously_billed_at ? subscriptionItem.previously_billed_at : null;
        this.nextBilledAt = subscriptionItem.next_billed_at ? subscriptionItem.next_billed_at : null;
        this.trialDates = subscriptionItem.trial_dates ? new index_1.SubscriptionTimePeriod(subscriptionItem.trial_dates) : null;
        this.price = subscriptionItem.price ? new index_1.Price(subscriptionItem.price) : null;
    }
}
exports.SubscriptionItem = SubscriptionItem;
