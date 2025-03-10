import { type CatalogType, type Status, type TaxCategory } from '../../../enums';
export interface ListProductQueryParameters {
    after?: string;
    type?: CatalogType[];
    id?: string[];
    include?: string[];
    orderBy?: string;
    perPage?: number;
    status?: Status[];
    taxCategory?: TaxCategory[];
}
