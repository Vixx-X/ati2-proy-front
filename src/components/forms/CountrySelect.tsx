import { useMemo } from 'react';

import { getCountries } from '@fetches/address';

import useTranslate from '@hooks/useTranslate';

import useSWR from 'swr';

import Select, { FilteredSelectProps } from './Select';

export interface CountrySelectProps extends FilteredSelectProps {}

export const CountrySelect = ({
  filter = [],
  name,
  all,
  ...props
}: CountrySelectProps) => {
  const t = useTranslate();
  const { data } = useSWR(
    !all || Object.values(filter).filter((item) => !!item).length > 0
      ? ['countries', { limit: 300, ...filter }]
      : null,
    (_, query) => getCountries(query)
  );
  const choices = useMemo(
    () =>
      data?.results.map((item: any) => ({
        text: item.name,
        value: item.iso_3166_1_a2,
      })),
    [data]
  );
  return (
    <div className="w-full">
      {!props.notitle && (
        <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded capitalize">
          {t('país')}
        </p>
      )}
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder={t('--Selecciona País--')}
        name={name}
        {...props}
      />
    </div>
  );
};

export default CountrySelect;
