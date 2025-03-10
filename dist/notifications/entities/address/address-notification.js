"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressNotification = void 0;
const entities_1 = require("../../../entities");
class AddressNotification {
    constructor(address) {
        this.id = address.id;
        this.description = address.description ? address.description : null;
        this.firstLine = address.first_line ? address.first_line : null;
        this.secondLine = address.second_line ? address.second_line : null;
        this.city = address.city ? address.city : null;
        this.postalCode = address.postal_code ? address.postal_code : null;
        this.region = address.region ? address.region : null;
        this.countryCode = address.country_code;
        this.customData = address.custom_data ? address.custom_data : null;
        this.status = address.status;
        this.createdAt = address.created_at;
        this.updatedAt = address.updated_at;
        this.importMeta = address.import_meta ? new entities_1.ImportMeta(address.import_meta) : null;
    }
}
exports.AddressNotification = AddressNotification;
