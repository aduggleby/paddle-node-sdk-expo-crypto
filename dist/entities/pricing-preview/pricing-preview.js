"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingPreview = void 0;
const transaction_1 = require("../transaction");
const pricing_preview_details_1 = require("./pricing-preview-details");
class PricingPreview {
    constructor(pricePreview) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.customerId = (_a = pricePreview.customer_id) !== null && _a !== void 0 ? _a : null;
        this.addressId = (_b = pricePreview.address_id) !== null && _b !== void 0 ? _b : null;
        this.businessId = (_c = pricePreview.business_id) !== null && _c !== void 0 ? _c : null;
        this.currencyCode = (_d = pricePreview.currency_code) !== null && _d !== void 0 ? _d : null;
        this.discountId = (_e = pricePreview.discount_id) !== null && _e !== void 0 ? _e : null;
        this.address = pricePreview.address ? new transaction_1.AddressPreview(pricePreview.address) : null;
        this.customerIpAddress = (_f = pricePreview.customer_ip_address) !== null && _f !== void 0 ? _f : null;
        this.details = pricePreview.details ? new pricing_preview_details_1.PricingPreviewDetails(pricePreview.details) : null;
        this.availablePaymentMethods = (_g = pricePreview.available_payment_method) !== null && _g !== void 0 ? _g : null;
    }
}
exports.PricingPreview = PricingPreview;
