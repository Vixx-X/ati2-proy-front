import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import { makeAuthFetchOptions } from '@utils/makeFetchOptions';

export const postVehicle = async (data: any) => {
  const resp = await fetcher.post(
    API_URLS.URL_POST_VEHICLES,
    data,
    makeAuthFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};
