import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import makeFetchOptions from '@utils/makeFetchOptions';
import { makeUrl } from '@utils/makeUrl';

export const getBrands = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_BRANDS, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getModels = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_MODELS, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getYears = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_YEARS, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getVehicles = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_VEHICLES, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};
