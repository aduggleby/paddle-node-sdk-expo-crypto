"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const generic_1 = require("../errors/generic");
class Collection {
    constructor(client, initialUri) {
        this.client = client;
        this.hasMore = true;
        this.data = [];
        this.nextLink = initialUri;
    }
    next() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const response = yield this.client.get(this.nextLink);
            const handledResponse = this.handlePaginatedResponse(response);
            this.hasMore = (_a = handledResponse.meta.pagination.has_more) !== null && _a !== void 0 ? _a : false;
            this.nextLink = handledResponse.meta.pagination.next;
            this.data = handledResponse.data.map((data) => this.fromJson(data));
            return this.data.length > 0 ? this.data : [];
        });
    }
    handlePaginatedResponse(response) {
        const entityResponse = response;
        const error = response;
        if (error.error) {
            throw new generic_1.ApiError(error.error);
        }
        return entityResponse;
    }
    [Symbol.asyncIterator]() {
        return __asyncGenerator(this, arguments, function* _a() {
            while (this.hasMore) {
                yield __await(this.next());
                for (let index = 0; index < this.data.length; index++) {
                    if (this.data[index]) {
                        yield yield __await(this.data[index]);
                    }
                }
            }
        });
    }
}
exports.Collection = Collection;
