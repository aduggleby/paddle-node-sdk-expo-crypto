import { type Response } from 'node-fetch';
type LogInputProps = Array<string | undefined | null>;
export declare class Logger {
    static log(...args: LogInputProps): void;
    static warn(...args: LogInputProps): void;
    static error(...args: LogInputProps): void;
    static logRequest(method: string, url: string | undefined, headers: Record<string, string>): void;
    static logResponse(method: string, url: string | undefined, headers: Record<string, string>, promise: Response): void;
}
export {};
