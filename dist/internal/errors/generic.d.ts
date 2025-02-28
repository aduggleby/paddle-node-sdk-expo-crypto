import { type ErrorDetail, type ErrorField } from '../../internal';
export declare class ApiError extends Error {
    readonly type: string;
    readonly code: string;
    readonly detail: string;
    readonly documentationUrl: string;
    readonly errors: ErrorField[] | null;
    constructor(errorDetail: ErrorDetail);
}
