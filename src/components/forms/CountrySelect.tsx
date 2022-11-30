import { useMemo } from 'react';

import { getCountries } from '@fetches/address';

import useSWR from 'swr';

import Select, { SelectProps } from './Select';

export interface CountrySelectProps extends Omit<SelectProps, 'choices'> {
  choices?: { value: string; text: string }[];
}

export const CountrySelect = (props: CountrySelectProps) => {
  const { data } = useSWR('countries', () => getCountries({limit:300}));
  const choices = useMemo(
    () =>
      data?.results.map((item: any) => ({
        text: item.name,
        value: item.iso_3166_1_a2,
      })),
    [data]
  );

  return (
    <Select choices={choices} placeholder="--Selecciona País--" {...props} />
  );
};

export default CountrySelect;
