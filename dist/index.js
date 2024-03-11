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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paddle = exports.SDK_VERSION = exports.Environment = void 0;
var internal_1 = require("./internal");
Object.defineProperty(exports, "Environment", { enumerable: true, get: function () { return internal_1.Environment; } });
var version_1 = require("./version");
Object.defineProperty(exports, "SDK_VERSION", { enumerable: true, get: function () { return version_1.SDK_VERSION; } });
var paddle_1 = require("./paddle");
Object.defineProperty(exports, "Paddle", { enumerable: true, get: function () { return paddle_1.Paddle; } });
__exportStar(require("./entities"), exports);
__exportStar(require("./enums"), exports);
__exportStar(require("./notifications"), exports);
__exportStar(require("./resources"), exports);
__exportStar(require("./types"), exports);
