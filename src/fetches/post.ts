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

export const postMedia = async (
  file: any,
  onUploadProgress: (progressEvent: any) => void
) => {
  const data = new FormData();
  data.append('media', file);

  const resp = await fetcher.post(
    API_URLS.URL_MEDIA,
    data,
    makeAuthFetchOptions({
      headers: {
        'Content-Type': `multipart/form-data`,
      },
      onUploadProgress,
      transformRequest: () => data,
    })
  );
  await assertApiError(resp);
  return resp.data;
};
