"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionLineItem = void 0;
const index_1 = require("../index");
class TransactionLineItem {
    constructor(transactionLineItem) {
        this.id = transactionLineItem.id;
        this.priceId = transactionLineItem.price_id;
        this.quantity = transactionLineItem.quantity;
        this.proration = transactionLineItem.proration ? new index_1.TransactionProration(transactionLineItem.proration) : null;
        this.taxRate = transactionLineItem.tax_rate;
        this.unitTotals = transactionLineItem.unit_totals ? new index_1.UnitTotals(transactionLineItem.unit_totals) : null;
        this.totals = transactionLineItem.totals ? new index_1.Totals(transactionLineItem.totals) : null;
        this.product = transactionLineItem.product ? new index_1.Product(transactionLineItem.product) : null;
    }
}
exports.TransactionLineItem = TransactionLineItem;
