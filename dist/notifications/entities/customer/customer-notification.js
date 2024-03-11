"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerNotification = void 0;
const index_1 = require("../index");
class CustomerNotification {
    constructor(customer) {
        this.id = customer.id;
        this.name = customer.name ? customer.name : null;
        this.email = customer.email;
        this.marketingConsent = customer.marketing_consent;
        this.status = customer.status;
        this.customData = customer.custom_data ? customer.custom_data : null;
        this.locale = customer.locale;
        this.createdAt = customer.created_at;
        this.updatedAt = customer.updated_at;
        this.importMeta = customer.import_meta ? new index_1.ImportMetaNotification(customer.import_meta) : null;
    }
}
exports.CustomerNotification = CustomerNotification;
