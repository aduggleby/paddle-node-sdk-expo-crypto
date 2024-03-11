import { CreditBalance, Customer, CustomerCollection } from '../../entities';
import { BaseResource } from '../../internal/base';
import { type CreateCustomerRequestBody, type GetCreditBalanceQueryParameters, type ListCustomerQueryParameters, type UpdateCustomerRequestBody } from './operations';
export * from './operations';
export declare class CustomersResource extends BaseResource {
    list(queryParams?: ListCustomerQueryParameters): CustomerCollection;
    create(createCustomerParameters: CreateCustomerRequestBody): Promise<Customer>;
    get(customerId: string): Promise<Customer>;
    update(customerId: string, updateCustomer: UpdateCustomerRequestBody): Promise<Customer>;
    getCreditBalance(customerId: string, queryParams?: GetCreditBalanceQueryParameters): Promise<CreditBalance[]>;
    archive(customerId: string): Promise<Customer>;
}
