import { useMemo } from 'react';

import { getCountries } from '@fetches/address';

import useSWR from 'swr';

import Select, { SelectProps } from './Select';

export interface CountrySelectProps extends Omit<SelectProps, 'choices'> {
  choices?: { value: string; text: string }[];
  continentId?: number;
}

export const CountrySelect = (props: CountrySelectProps) => {
  const { continentId, label } = props;
  const { data } = useSWR('countries', () =>
    getCountries({ limit: 300, continent: continentId })
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
        Pais
      </p>
      <Select className="rounded" choices={choices} placeholder="--Selecciona País--" {...props} />
    </div>
  );
};

export default CountrySelect;
