import { useMemo } from 'react';

import { getStates } from '@fetches/address';

import { useFormikContext } from 'formik';
import useSWR from 'swr';

import Select, { SelectProps } from './Select';

export interface StateSelectProps extends Omit<SelectProps, 'choices'> {
  choices?: { value: string; text: string }[];
}

export const StateSelect = (props: StateSelectProps) => {
  const { values } = useFormikContext();
  const { data } = useSWR(
    ['state', { limit: 300, country: values?.country }],
    (_, query) => getStates(query)
  );
  const choices = useMemo(
    () =>
      data?.results.map((item: any) => ({
        text: item.name,
        value: item.id,
      })),
    [data]
  );

  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        Estado
      </p>
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder="--Selecciona Estado--"
        {...props}
      />
    </div>
  );
};

export default StateSelect;
