import { useMemo } from 'react';

import { getCountries } from '@fetches/address';

import useSWR from 'swr';

import Select, { FilteredSelectProps } from './Select';
import useTranslate from '@hooks/useTranslate';

export interface CountrySelectProps extends FilteredSelectProps {}

export const CountrySelect = ({
  filter,
  name,
  ...props
}: CountrySelectProps) => {
  const t = useTranslate();
  const { data } = useSWR(
    ['countries', { limit: 300, ...filter }],
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
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        {t('País')}
      </p>
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder={t("--Selecciona País--")}
        name={name}
        {...props}
      />
    </div>
  );
};

export default CountrySelect;
