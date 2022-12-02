import { useMemo } from 'react';

import { getYear } from '@fetches/address';

import { useFormikContext } from 'formik';
import useSWR from 'swr';

import Select, { SelectProps } from './Select';

export interface YearSelectProps extends Omit<SelectProps, 'choices'> {
  choices?: { value: string; text: string }[];
}

export const YearSelect = (props: YearSelectProps) => {
  const { values } = useFormikContext();
  const { data } = useSWR(
    ['year', { limit: 300, model: values.model }],
    (_, query) => getYear(query)
  );

  const choices = useMemo(
    () =>
      data?.results.map((item: any, index: any) => ({
        text: item.year,
      })),
    [data]
  );
  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        Año de Vehiculo
      </p>
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder="--Selecciona Continente--"
        {...props}
      />
    </div>
  );
};

export default YearSelect;
