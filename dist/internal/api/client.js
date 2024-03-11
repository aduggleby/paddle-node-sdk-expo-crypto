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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const constants_1 = require("./constants");
const node_fetch_1 = __importDefault(require("node-fetch"));
const version_1 = require("../../version");
const environment_1 = require("./environment");
const expo_crypto_1 = require("expo-crypto");
const logger_1 = require("../base/logger");
const case_helpers_1 = require("./case-helpers");
class Client {
    constructor(apiKey, options) {
        this.apiKey = apiKey;
        this.options = options;
        this.baseUrl = this.getBaseUrl(this.options.environment);
    }
    getBaseUrl(environment) {
        const urlBasedOnEnv = constants_1.API_ENVIRONMENT_TO_BASE_URL_MAP[environment !== null && environment !== void 0 ? environment : environment_1.Environment.production];
        return urlBasedOnEnv || environment;
    }
    getHeaders() {
        const uuid = (0, expo_crypto_1.randomUUID)();
        return {
            Authorization: `bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
            'user-agent': `PaddleSDK/node ${version_1.SDK_VERSION}`,
            'X-Transaction-ID': uuid,
        };
    }
    get(url, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let finalUrl = url.includes(this.baseUrl) ? url : `${this.baseUrl}${url}`;
            if (!finalUrl.includes('?') && queryParams) {
                finalUrl += queryParams.toQueryString();
            }
            const logUrl = finalUrl.split('?')[0];
            const headers = this.getHeaders();
            logger_1.Logger.logRequest('GET', logUrl, headers);
            const rawResponse = yield (0, node_fetch_1.default)(finalUrl, {
                headers,
            });
            logger_1.Logger.logResponse('GET', logUrl, headers, rawResponse);
            return rawResponse.json();
        });
    }
    post(url, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const logUrl = url.split('?')[0];
            const headers = this.getHeaders();
            logger_1.Logger.logRequest('POST', logUrl, headers);
            const rawResponse = yield (0, node_fetch_1.default)(`${this.baseUrl}${url}`, {
                method: 'POST',
                body: JSON.stringify((0, case_helpers_1.convertToSnakeCase)(requestBody)),
                headers,
            });
            logger_1.Logger.logResponse('POST', logUrl, headers, rawResponse);
            return rawResponse.json();
        });
    }
    patch(url, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const logUrl = url.split('?')[0];
            const headers = this.getHeaders();
            logger_1.Logger.logRequest('PATCH', logUrl, headers);
            const rawResponse = yield (0, node_fetch_1.default)(`${this.baseUrl}${url}`, {
                method: 'PATCH',
                body: JSON.stringify((0, case_helpers_1.convertToSnakeCase)(requestBody)),
                headers,
            });
            logger_1.Logger.logResponse('PATCH', logUrl, headers, rawResponse);
            return rawResponse.json();
        });
    }
    delete(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const logUrl = url.split('?')[0];
            const headers = this.getHeaders();
            logger_1.Logger.logRequest('DELETE', logUrl, headers);
            const rawResponse = yield (0, node_fetch_1.default)(`${this.baseUrl}${url}`, {
                method: 'DELETE',
                headers,
            });
            logger_1.Logger.logResponse('DELETE', logUrl, headers, rawResponse);
            return rawResponse;
        });
    }
}
exports.Client = Client;
