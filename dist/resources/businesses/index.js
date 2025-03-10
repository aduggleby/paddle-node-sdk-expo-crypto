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
exports.BusinessesResource = void 0;
const entities_1 = require("../../entities");
const base_1 = require("../../internal/base");
const BusinessPaths = {
    list: '/customers/{customer_id}/businesses',
    create: '/customers/{customer_id}/businesses',
    get: '/customers/{customer_id}/businesses/{business_id}',
    update: '/customers/{customer_id}/businesses/{business_id}',
};
__exportStar(require("./operations"), exports);
class BusinessesResource extends base_1.BaseResource {
    list(customerId, queryParams) {
        const queryParameters = new base_1.QueryParameters(queryParams);
        const urlWithPathParams = new base_1.PathParameters(BusinessPaths.list, {
            customer_id: customerId,
        }).deriveUrl();
        return new entities_1.BusinessCollection(this.client, urlWithPathParams + queryParameters.toQueryString());
    }
    create(customerId, createBusinessParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(BusinessPaths.create, {
                customer_id: customerId,
            }).deriveUrl();
            const response = yield this.client.post(urlWithPathParams, createBusinessParameters);
            const data = this.handleResponse(response);
            return new entities_1.Business(data);
        });
    }
    get(customerId, businessId) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(BusinessPaths.get, {
                customer_id: customerId,
                business_id: businessId,
            }).deriveUrl();
            const response = yield this.client.get(urlWithPathParams);
            const data = this.handleResponse(response);
            return new entities_1.Business(data);
        });
    }
    update(customerId, businessId, updateBusiness) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlWithPathParams = new base_1.PathParameters(BusinessPaths.update, {
                customer_id: customerId,
                business_id: businessId,
            }).deriveUrl();
            const response = yield this.client.patch(urlWithPathParams, updateBusiness);
            const data = this.handleResponse(response);
            return new entities_1.Business(data);
        });
    }
    archive(customerId, addressId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.update(customerId, addressId, { status: 'archived' });
        });
    }
}
exports.BusinessesResource = BusinessesResource;
