"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResource = void 0;
const generic_1 = require("../errors/generic");
class BaseResource {
    constructor(client) {
        this.client = client;
    }
    handleError(error) {
        if (error.error) {
            throw new generic_1.ApiError(error.error);
        }
    }
    handleResponse(response) {
        const entityResponse = response;
        const error = response;
        this.handleError(error);
        return entityResponse.data;
    }
}
exports.BaseResource = BaseResource;
