"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPriceNotification = void 0;
const index_1 = require("../index");
const entities_1 = require("../../../entities");
class SubscriptionPriceNotification {
    constructor(price) {
        var _a, _b;
        this.id = price.id;
        this.productId = price.product_id;
        this.description = price.description;
        this.type = (_a = price.type) !== null && _a !== void 0 ? _a : null;
        this.name = price.name ? price.name : null;
        this.billingCycle = price.billing_cycle ? new index_1.TimePeriodNotification(price.billing_cycle) : null;
        this.trialPeriod = price.trial_period ? new index_1.TimePeriodNotification(price.trial_period) : null;
        this.taxMode = price.tax_mode;
        this.unitPrice = price.unit_price ? new index_1.MoneyNotification(price.unit_price) : null;
        this.unitPriceOverrides = price.unit_price_overrides
            ? price.unit_price_overrides.map((unit_price_override) => new index_1.UnitPriceOverrideNotification(unit_price_override))
            : [];
        this.quantity = price.quantity ? new index_1.PriceQuantityNotification(price.quantity) : null;
        this.status = (_b = price.status) !== null && _b !== void 0 ? _b : null;
        this.customData = price.custom_data ? price.custom_data : null;
        this.importMeta = price.import_meta ? new entities_1.ImportMeta(price.import_meta) : null;
    }
}
exports.SubscriptionPriceNotification = SubscriptionPriceNotification;
