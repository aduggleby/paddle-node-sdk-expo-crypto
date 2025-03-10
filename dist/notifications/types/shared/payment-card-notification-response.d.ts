import { type PaymentCardType } from '../../../enums';
export interface IPaymentCardNotificationResponse {
    type: PaymentCardType;
    last4: string;
    expiry_month: number;
    expiry_year: number;
    cardholder_name: string;
}
