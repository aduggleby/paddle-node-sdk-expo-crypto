"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceNotification = void 0;
const index_1 = require("../index");
class PriceNotification {
    constructor(price) {
        this.id = price.id;
        this.productId = price.product_id;
        this.description = price.description;
        this.type = price.type ? price.type : null;
        this.name = price.name ? price.name : null;
        this.billingCycle = price.billing_cycle ? new index_1.TimePeriodNotification(price.billing_cycle) : null;
        this.trialPeriod = price.trial_period ? new index_1.TimePeriodNotification(price.trial_period) : null;
        this.taxMode = price.tax_mode;
        this.unitPrice = new index_1.MoneyNotification(price.unit_price);
        this.unitPriceOverrides = price.unit_price_overrides.map((unit_price_override) => new index_1.UnitPriceOverrideNotification(unit_price_override));
        this.quantity = new index_1.PriceQuantityNotification(price.quantity);
        this.status = price.status;
        this.customData = price.custom_data ? price.custom_data : null;
        this.importMeta = price.import_meta ? new index_1.ImportMetaNotification(price.import_meta) : null;
    }
}
exports.PriceNotification = PriceNotification;
