"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static log(...args) {
        console.log('[Paddle] [LOG]', ...args);
    }
    static warn(...args) {
        console.warn('[Paddle] [WARN]', ...args);
    }
    static error(...args) {
        console.error('[Paddle] [ERROR]', ...args);
    }
    static logRequest(method, url, headers) {
        Logger.log('[Request]', method, url, 'Transaction ID:', headers['X-Transaction-ID']);
    }
    static logResponse(method, url, headers, promise) {
        Logger.log('[Response]', method, url, promise.status.toString(), 'Transaction ID:', headers['X-Transaction-ID'], 'Request ID:', promise.headers.get('Request-Id'));
    }
}
exports.Logger = Logger;
