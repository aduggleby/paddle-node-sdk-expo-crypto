/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IEventsResponse, type IProductResponse } from '../../../types';

export const ProductUpdatedMock: IEventsResponse<IProductResponse> = {
  event_id: 'evt_01h7zcr13xte50ncas1jkgpbfk',
  event_type: 'product.updated',
  occurred_at: '2023-08-16T14:42:10.685247Z',
  notification_id: 'ntf_01h7zcr1683yvnvxf9mn8k7vcw',
  data: {
    id: 'pro_01h7zcgmdc6tmwtjehp3sh7azf',
    name: 'ChatApp for Schools',
    status: 'active',
    type: 'standard',
    image_url: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/2nmP8MQSret0aWeDemRw_icon1.png',
    created_at: '2023-08-16T14:38:08.3Z',
    custom_data: { features: { crm: false, reports: true, data_retention: true } },
    description:
      'Spend more time engaging with students with ChataApp Education. Includes features from our Pro plan, plus tools to help educators track student progress.',
    tax_category: 'standard',
    import_meta: null,
  },
};

export const ProductUpdatedMockExpectation = {
  data: {
    createdAt: '2023-08-16T14:38:08.3Z',
    customData: {
      features: {
        crm: false,
        data_retention: true,
        reports: true,
      },
    },
    description:
      'Spend more time engaging with students with ChataApp Education. Includes features from our Pro plan, plus tools to help educators track student progress.',
    id: 'pro_01h7zcgmdc6tmwtjehp3sh7azf',
    imageUrl: 'https://paddle-sandbox.s3.amazonaws.com/user/10889/2nmP8MQSret0aWeDemRw_icon1.png',
    importMeta: null,
    name: 'ChatApp for Schools',
    status: 'active',
    taxCategory: 'standard',
    type: 'standard',
  },
  eventId: 'evt_01h7zcr13xte50ncas1jkgpbfk',
  eventType: 'product.updated',
  notificationId: 'ntf_01h7zcr1683yvnvxf9mn8k7vcw',
  occurredAt: '2023-08-16T14:42:10.685247Z',
};
