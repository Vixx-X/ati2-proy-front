import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import makeFetchOptions, {
  makeAuthFetchOptions,
} from '@utils/makeFetchOptions';
import { makeUrl } from '@utils/makeUrl';

export const postContactUsInfo = async (data: any) => {
  const resp = await fetcher.post(
    API_URLS.URL_CONTACT_US,
    data,
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getBusinessInfo = async () => {
  const resp = await fetcher.get(
    API_URLS.URL_MY_BUSINESS_INFO,
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};
