import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import { makeAuthFetchOptions } from '@utils/makeFetchOptions';
import { makeUrl } from '@utils/makeUrl';

export const getCountries = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_COUNTRIES, query),
    makeAuthFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};
