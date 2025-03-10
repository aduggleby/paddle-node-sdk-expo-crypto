"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const index_1 = require("../index");
class Transaction {
    constructor(transaction) {
        var _a;
        this.id = transaction.id;
        this.status = transaction.status;
        this.customerId = transaction.customer_id ? transaction.customer_id : null;
        this.addressId = transaction.address_id ? transaction.address_id : null;
        this.businessId = transaction.business_id ? transaction.business_id : null;
        this.customData = transaction.custom_data ? transaction.custom_data : null;
        this.currencyCode = transaction.currency_code;
        this.origin = transaction.origin;
        this.subscriptionId = transaction.subscription_id ? transaction.subscription_id : null;
        this.invoiceId = transaction.invoice_id ? transaction.invoice_id : null;
        this.invoiceNumber = transaction.invoice_number ? transaction.invoice_number : null;
        this.collectionMode = transaction.collection_mode;
        this.discountId = transaction.discount_id ? transaction.discount_id : null;
        this.billingDetails = transaction.billing_details ? new index_1.BillingDetails(transaction.billing_details) : null;
        this.billingPeriod = transaction.billing_period ? new index_1.TransactionsTimePeriod(transaction.billing_period) : null;
        this.items = transaction.items.map((item) => new index_1.TransactionItem(item));
        this.details = transaction.details ? new index_1.TransactionDetails(transaction.details) : null;
        this.payments = transaction.payments.map((payment) => new index_1.TransactionPaymentAttempt(payment));
        this.checkout = transaction.checkout ? new index_1.TransactionCheckout(transaction.checkout) : null;
        this.createdAt = transaction.created_at;
        this.updatedAt = transaction.updated_at;
        this.billedAt = transaction.billed_at ? transaction.billed_at : null;
        this.address = transaction.address ? new index_1.Address(transaction.address) : null;
        this.adjustments = transaction.adjustments
            ? (_a = transaction.adjustments) === null || _a === void 0 ? void 0 : _a.map((adjustment) => new index_1.TransactionAdjustment(adjustment))
            : null;
        this.adjustmentsTotals = transaction.adjustments_totals
            ? new index_1.AdjustmentTotals(transaction.adjustments_totals)
            : null;
        this.business = transaction.business ? new index_1.Business(transaction.business) : null;
        this.customer = transaction.customer ? new index_1.Customer(transaction.customer) : null;
        this.discount = transaction.discount ? new index_1.Discount(transaction.discount) : null;
        this.availablePaymentMethods = transaction.available_payment_methods ? transaction.available_payment_methods : null;
    }
}
exports.Transaction = Transaction;
