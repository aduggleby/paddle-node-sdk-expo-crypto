/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IEventsResponse, type IAddressResponse } from '../../../types';

export const AddressCreatedMock: IEventsResponse<IAddressResponse> = {
  event_id: 'evt_01h848pezaj15tkt3dsa36xe59',
  event_type: 'address.created',
  occurred_at: '2023-08-18T12:07:37.194676Z',
  notification_id: 'ntf_01h848pf2kbkz7j9fd1554029j',
  data: {
    id: 'add_01h848pep46enq8y372x7maj0p',
    city: 'New York',
    region: 'NY',
    status: 'active',
    created_at: '2023-08-18T12:07:36.9Z',
    first_line: '4050 Jefferson Plaza, 41st Floor',
    updated_at: '2023-08-18T12:07:36.9Z',
    description: 'Head Office',
    postal_code: '10021',
    second_line: null,
    country_code: 'US',
    custom_data: null,
  },
};

export const AddressCreatedMockExpectation = {
  data: {
    city: 'New York',
    countryCode: 'US',
    createdAt: '2023-08-18T12:07:36.9Z',
    customData: null,
    description: 'Head Office',
    firstLine: '4050 Jefferson Plaza, 41st Floor',
    id: 'add_01h848pep46enq8y372x7maj0p',
    importMeta: null,
    postalCode: '10021',
    region: 'NY',
    secondLine: null,
    status: 'active',
    updatedAt: '2023-08-18T12:07:36.9Z',
  },
  eventId: 'evt_01h848pezaj15tkt3dsa36xe59',
  eventType: 'address.created',
  notificationId: 'ntf_01h848pf2kbkz7j9fd1554029j',
  occurredAt: '2023-08-18T12:07:37.194676Z',
};
