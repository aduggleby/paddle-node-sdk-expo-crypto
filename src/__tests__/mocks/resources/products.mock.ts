/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { IProductResponse } from '../../../types';
import { Response, ResponsePaginated } from '../../../internal';
import { CreateProductRequestBody, UpdateProductRequestBody } from '../../../resources';

export const CreateProductMock: CreateProductRequestBody = {
  name: 'Hayley',
  taxCategory: 'digital-goods',
};

export const UpdateProductMock: UpdateProductRequestBody = {
  name: 'Zion',
  description: 'suppellex vicissitudo a antiquus cognatus xiphias arca canto aliquam crux',
  type: 'custom',
  taxCategory: 'digital-goods',
  imageUrl: 'https://loremflickr.com/640/480?lock=3493989330190336',
  customData: { customer_reference_id: 'abcd1234' },
  status: 'active',
};

export const CreateProductExpectation = {
  name: 'Hayley',
  tax_category: 'digital-goods',
};

export const UpdateProductExpectation = {
  name: 'Zion',
  description: 'suppellex vicissitudo a antiquus cognatus xiphias arca canto aliquam crux',
  type: 'custom',
  tax_category: 'digital-goods',
  image_url: 'https://loremflickr.com/640/480?lock=3493989330190336',
  custom_data: { customer_reference_id: 'abcd1234' },
  status: 'active',
};

export const ProductMock: IProductResponse = {
  id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
  name: 'Ezekiel',
  description: 'spargo crux videlicet fugit tyrannus curatio coma stillicidium esse bardus',
  type: 'custom',
  tax_category: 'digital-goods',
  image_url: 'https://loremflickr.com/640/480?lock=7909378724200448',
  custom_data: { customer_reference_id: 'abcd1234' },
  status: 'active',
  created_at: '2024-10-12T07:20:50.52Z',
  import_meta: { external_id: '9b95b0b8-e10f-441a-862e-1936a6d818ab', imported_from: 'billing_platform' },
};

export const ProductMockResponse: Response<IProductResponse> = {
  data: ProductMock,
  meta: {
    request_id: '',
  },
};

export const ListProductMockResponse: ResponsePaginated<IProductResponse> = {
  data: [ProductMock],
  meta: {
    request_id: '',
    pagination: {
      estimated_total: 10,
      has_more: true,
      next: '/products?after=1',
      per_page: 10,
    },
  },
};
