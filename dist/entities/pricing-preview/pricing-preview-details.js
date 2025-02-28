"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingPreviewDetails = void 0;
const pricing_preview_line_item_1 = require("./pricing-preview-line-item");
class PricingPreviewDetails {
    constructor(details) {
        this.lineItems = details.line_items.map((line_item) => new pricing_preview_line_item_1.PricingPreviewLineItem(line_item));
    }
}
exports.PricingPreviewDetails = PricingPreviewDetails;
