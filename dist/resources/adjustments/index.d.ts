import { AdjustmentCollection, Adjustment } from '../../entities';
import { BaseResource } from '../../internal/base';
import { type CreateAdjustmentRequestBody, type ListAdjustmentQueryParameters } from './operations';
export * from './operations';
export declare class AdjustmentsResource extends BaseResource {
    list(queryParams?: ListAdjustmentQueryParameters): AdjustmentCollection;
    create(createAdjustmentParameters: CreateAdjustmentRequestBody): Promise<Adjustment>;
}
