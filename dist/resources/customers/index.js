"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersResource = void 0;
const entities_1 = require("../../entities");
const base_1 = require("../../internal/base");
const CustomerPaths = {
    list: '/customers',
    create: '/customers',
    get: '/customers/{customer_id}',
    update: '/customers/{customer_id}',
    getCustomerBalance: '/customers/{customer_id}/credit-balances',
};
__exportStar(require("./operations"), exports);
class CustomersResource extends base_1.BaseResource {
    list(queryParams) {
        const queryParameters = new base_1.QueryParameters(queryParams);
        return new entities_1.CustomerCollection(this.client, CustomerPaths.list + queryParameters.toQueryString());
    }
    create(createCustomerParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post(CustomerPaths.create, createCustomerParameters);
            const data = this.handleResponse(response);
            return new entities_1.Customer(data);
        });
    }
    get(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(CustomerPaths.get, {
                customer_id: customerId,
            }).deriveUrl();
            const response = yield this.client.get(urlWithPathParams);
            const data = this.handleResponse(response);
            return new entities_1.Customer(data);
        });
    }
    update(customerId, updateCustomer) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(CustomerPaths.update, {
                customer_id: customerId,
            }).deriveUrl();
            const response = yield this.client.patch(urlWithPathParams, updateCustomer);
            const data = this.handleResponse(response);
            return new entities_1.Customer(data);
        });
    }
    getCreditBalance(customerId, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(CustomerPaths.getCustomerBalance, {
                customer_id: customerId,
            }).deriveUrl();
            const queryParameters = new base_1.QueryParameters(queryParams);
            const response = yield this.client.get(urlWithPathParams, queryParameters);
            const data = this.handleResponse(response);
            return data.map((balance) => new entities_1.CreditBalance(balance));
        });
    }
    archive(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.update(customerId, { status: 'archived' });
        });
    }
}
exports.CustomersResource = CustomersResource;
