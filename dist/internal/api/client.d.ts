import { type QueryParameters } from '../base';
import { type PaddleOptions } from '../types/config';
import { type ErrorResponse } from '../types/response';
export declare class Client {
    private readonly apiKey;
    private readonly options;
    private readonly baseUrl;
    constructor(apiKey: string, options: PaddleOptions);
    private getBaseUrl;
    private getHeaders;
    get<Q, R>(url: string, queryParams?: QueryParameters<Q>): Promise<R>;
    post<B, R>(url: string, requestBody: B): Promise<R>;
    patch<B, R>(url: string, requestBody: B): Promise<R>;
    delete(url: string): Promise<ErrorResponse | undefined>;
}
