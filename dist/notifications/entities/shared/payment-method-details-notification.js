"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodDetailsNotification = void 0;
const payment_card_notification_1 = require("./payment-card-notification");
class PaymentMethodDetailsNotification {
    constructor(paymentMethodDetails) {
        this.type = paymentMethodDetails.type;
        this.card = paymentMethodDetails.card ? new payment_card_notification_1.PaymentCardNotification(paymentMethodDetails.card) : null;
    }
}
exports.PaymentMethodDetailsNotification = PaymentMethodDetailsNotification;
