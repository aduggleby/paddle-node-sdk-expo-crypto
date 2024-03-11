import { type SubscriptionEffectiveFrom, type SubscriptionOnPaymentFailure } from '../../../enums';
import { type ISubscriptionNonCatalogPriceRequest } from '../../../types';
interface ITransactionItemBase {
    quantity: number;
}
interface ITransactionItemWithPriceId extends ITransactionItemBase {
    priceId: string;
    price?: never;
}
interface ITransactionItemWithPrice extends ITransactionItemBase {
    priceId?: never;
    price: ISubscriptionNonCatalogPriceRequest;
}
type ITransactionItem = ITransactionItemWithPriceId | ITransactionItemWithPrice;
export interface CreateSubscriptionCharge {
    effectiveFrom: SubscriptionEffectiveFrom;
    items: ITransactionItem[];
    onPaymentFailure?: SubscriptionOnPaymentFailure;
}
export {};
