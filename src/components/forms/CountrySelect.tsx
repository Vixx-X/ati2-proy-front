import { useMemo } from 'react';

import { getCountries } from '@fetches/address';

import { useFormikContext } from 'formik';
import useSWR from 'swr';

import Select, { SelectProps } from './Select';

export interface CountrySelectProps extends Omit<SelectProps, 'choices'> {
  choices?: { value: string; text: string }[];
  noTitle?: boolean
}

export const CountrySelect = (props: CountrySelectProps) => {
  const { values } = useFormikContext();
  const { data } = useSWR(
    ['countries', { limit: 300, continent: values?.continent }],
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
      { !props.noTitle && <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        Pais
      </p>}
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder="--Selecciona País--"
        {...props}
      />
    </div>
  );
};

export default CountrySelect;
