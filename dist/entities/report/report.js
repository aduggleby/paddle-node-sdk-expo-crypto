"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const index_1 = require("../index");
class Report {
    constructor(reportResponse) {
        var _a, _b, _c;
        this.id = reportResponse.id;
        this.status = reportResponse.status;
        this.rows = (_a = reportResponse.rows) !== null && _a !== void 0 ? _a : null;
        this.type = reportResponse.type;
        this.filters = (_b = reportResponse.filters) === null || _b === void 0 ? void 0 : _b.map((filter) => new index_1.ReportFilters(filter));
        this.expiresAt = (_c = reportResponse.expires_at) !== null && _c !== void 0 ? _c : null;
        this.createdAt = reportResponse.created_at;
    }
}
exports.Report = Report;
