"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discount = void 0;
const index_1 = require("../index");
class Discount {
    constructor(discount) {
        var _a;
        this.id = discount.id;
        this.status = discount.status;
        this.description = discount.description;
        this.enabledForCheckout = discount.enabled_for_checkout;
        this.code = discount.code ? discount.code : null;
        this.type = discount.type;
        this.amount = discount.amount;
        this.currencyCode = discount.currency_code ? discount.currency_code : null;
        this.recur = discount.recur;
        this.maximumRecurringIntervals = discount.maximum_recurring_intervals ? discount.maximum_recurring_intervals : null;
        this.usageLimit = discount.usage_limit ? discount.usage_limit : null;
        this.restrictTo = discount.restrict_to ? discount.restrict_to : null;
        this.expiresAt = discount.expires_at ? discount.expires_at : null;
        this.customData = discount.custom_data ? discount.custom_data : null;
        this.timesUsed = (_a = discount.times_used) !== null && _a !== void 0 ? _a : null;
        this.createdAt = discount.created_at;
        this.updatedAt = discount.updated_at;
        this.importMeta = discount.import_meta ? new index_1.ImportMeta(discount.import_meta) : null;
    }
}
exports.Discount = Discount;
