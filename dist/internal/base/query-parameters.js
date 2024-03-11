"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParameters = void 0;
const snakeCase_1 = __importDefault(require("lodash/snakeCase"));
class QueryParameters {
    constructor(queryParameters) {
        this.queryParameters = queryParameters;
    }
    toQueryString() {
        const urlSearchParam = new URLSearchParams();
        for (const key in this.queryParameters) {
            const value = this.queryParameters[key];
            if (key && value) {
                urlSearchParam.append((0, snakeCase_1.default)(key), `${value}`);
            }
        }
        return '?' + urlSearchParam.toString();
    }
}
exports.QueryParameters = QueryParameters;
