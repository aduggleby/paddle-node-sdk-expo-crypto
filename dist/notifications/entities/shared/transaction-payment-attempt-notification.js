"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionPaymentAttemptNotification = void 0;
const index_1 = require("../index");
class TransactionPaymentAttemptNotification {
    constructor(transactionPaymentAttempt) {
        var _a;
        this.paymentAttemptId = transactionPaymentAttempt.payment_attempt_id;
        this.paymentMethodId = (_a = transactionPaymentAttempt.payment_method_id) !== null && _a !== void 0 ? _a : null;
        this.storedPaymentMethodId = transactionPaymentAttempt.stored_payment_method_id;
        this.amount = transactionPaymentAttempt.amount;
        this.status = transactionPaymentAttempt.status;
        this.errorCode = transactionPaymentAttempt.error_code ? transactionPaymentAttempt.error_code : null;
        this.methodDetails = transactionPaymentAttempt.method_details
            ? new index_1.PaymentMethodDetailsNotification(transactionPaymentAttempt.method_details)
            : null;
        this.createdAt = transactionPaymentAttempt.created_at;
        this.capturedAt = transactionPaymentAttempt.captured_at ? transactionPaymentAttempt.captured_at : null;
    }
}
exports.TransactionPaymentAttemptNotification = TransactionPaymentAttemptNotification;
