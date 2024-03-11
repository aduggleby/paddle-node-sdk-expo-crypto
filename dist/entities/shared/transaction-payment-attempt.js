"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionPaymentAttempt = void 0;
const index_1 = require("../index");
class TransactionPaymentAttempt {
    constructor(transactionPaymentAttempt) {
        this.paymentAttemptId = transactionPaymentAttempt.payment_attempt_id;
        this.paymentMethodId = transactionPaymentAttempt.payment_method_id;
        this.storedPaymentMethodId = transactionPaymentAttempt.stored_payment_method_id;
        this.amount = transactionPaymentAttempt.amount;
        this.status = transactionPaymentAttempt.status;
        this.errorCode = transactionPaymentAttempt.error_code ? transactionPaymentAttempt.error_code : null;
        this.methodDetails = transactionPaymentAttempt.method_details
            ? new index_1.PaymentMethodDetails(transactionPaymentAttempt.method_details)
            : null;
        this.createdAt = transactionPaymentAttempt.created_at;
        this.capturedAt = transactionPaymentAttempt.captured_at ? transactionPaymentAttempt.captured_at : null;
    }
}
exports.TransactionPaymentAttempt = TransactionPaymentAttempt;
