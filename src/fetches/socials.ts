import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import makeFetchOptions, {
  makeAuthFetchOptions,
} from '@utils/makeFetchOptions';
import { makeUrl } from '@utils/makeUrl';

export const getSocialMedias = async (query: any = {}) => {
    const resp = await fetcher.get(
      makeUrl(API_URLS.URL_SOCIAL_MEDIA, query),
      makeFetchOptions()
    );
    await assertApiError(resp);
    return resp.data;
  };