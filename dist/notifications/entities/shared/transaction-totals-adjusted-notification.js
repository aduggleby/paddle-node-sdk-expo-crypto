"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTotalsAdjustedNotification = void 0;
class TransactionTotalsAdjustedNotification {
    constructor(transactionTotalsAdjusted) {
        this.subtotal = transactionTotalsAdjusted.subtotal;
        this.tax = transactionTotalsAdjusted.tax;
        this.total = transactionTotalsAdjusted.total;
        this.grandTotal = transactionTotalsAdjusted.grand_total;
        this.fee = transactionTotalsAdjusted.fee ? transactionTotalsAdjusted.fee : null;
        this.earnings = transactionTotalsAdjusted.earnings ? transactionTotalsAdjusted.earnings : null;
        this.currencyCode = transactionTotalsAdjusted.currency_code;
    }
}
exports.TransactionTotalsAdjustedNotification = TransactionTotalsAdjustedNotification;
