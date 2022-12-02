import { API_URLS } from '@config';

import assertApiError from '@utils/assertApiError';
import fetcher from '@utils/fetcher';
import makeFetchOptions from '@utils/makeFetchOptions';
import { makeUrl } from '@utils/makeUrl';

export const getCountries = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_COUNTRIES, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getContinents = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_CONTINENTS, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getStates = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_STATES, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getCity = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_BRAND, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getBrand = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_BRAND, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getModel = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_MODEL, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};

export const getYear = async (query: any = {}) => {
  const resp = await fetcher.get(
    makeUrl(API_URLS.URL_YEAR, query),
    makeFetchOptions()
  );
  await assertApiError(resp);
  return resp.data;
};