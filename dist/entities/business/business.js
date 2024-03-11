"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Business = void 0;
const index_1 = require("../index");
class Business {
    constructor(business) {
        this.id = business.id;
        this.name = business.name;
        this.companyNumber = business.company_number ? business.company_number : null;
        this.taxIdentifier = business.tax_identifier ? business.tax_identifier : null;
        this.status = business.status;
        this.contacts = business.contacts ? business.contacts.map((contact) => new index_1.Contacts(contact)) : null;
        this.createdAt = business.created_at;
        this.updatedAt = business.updated_at;
        this.customData = business.custom_data ? business.custom_data : null;
        this.importMeta = business.import_meta ? new index_1.ImportMeta(business.import_meta) : null;
    }
}
exports.Business = Business;
