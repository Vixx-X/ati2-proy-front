import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import makeFetchOptions, {
  makeAuthFetchOptions,
} from '@utils/makeFetchOptions';
import { makeUrl } from '@utils/makeUrl';

export const postVehicle = async (data: any) => {
  const resp = await fetcher.post(
    API_URLS.URL_POSTS_VEHICLES,
    data,
    makeAuthFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getPostsVehicles = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_POSTS_VEHICLES, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getPostVehicleById = async (id: any) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_POST_VEHICLE, { id }),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const deletePostVehicle = async (id: any) => {
  const resp = await fetcher.delete(
    makeUrl(API_URLS.URL_POST_VEHICLE, { id }),
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
  data.append('file', file);

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

export const getContactDays = async () => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_DAY_OPTIONS),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data.results;
};

export const putVehicle = async (id: number, data: any) => {
  const resp = await fetcher.put(
    `${API_URLS.URL_POSTS_VEHICLES}${id}/`,
    data,
    makeAuthFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};
