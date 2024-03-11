"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksValidator = void 0;
class WebhooksValidator {
    extractHeader(header) {
        const parts = header.split(';');
        let ts = '';
        let h1 = '';
        for (const part of parts) {
            const [key, value] = part.split('=');
            if (value) {
                if (key === 'ts') {
                    ts = value;
                }
                else if (key === 'h1') {
                    h1 = value;
                }
            }
        }
        if (ts && h1) {
            return { ts: parseInt(ts), h1 };
        }
        else {
            throw new Error('[Paddle] Invalid webhook signature');
        }
    }
    isValidSignature(requestBody, secretKey, signature) {
        const headers = this.extractHeader(signature);
        const payloadWithTime = `${headers.ts}:${requestBody}`;
        if (new Date().getTime() > new Date((headers.ts + WebhooksValidator.MAX_VALID_TIME_DIFFERENCE) * 1000).getTime()) {
            return false;
        }
        const computedHash = CryptoJS.HmacSHA256(payloadWithTime, secretKey).toString(CryptoJS.enc.Hex);
        return computedHash === headers.h1;
    }
}
exports.WebhooksValidator = WebhooksValidator;
WebhooksValidator.MAX_VALID_TIME_DIFFERENCE = 5;
