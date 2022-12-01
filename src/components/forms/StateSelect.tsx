import { useMemo } from 'react';

import { getStates } from '@fetches/address';

import useSWR from 'swr';

import Select, { SelectProps } from './Select';

export interface StateSelectProps extends Omit<SelectProps, 'choices'> {
  choices?: { value: string; text: string }[];
  countryId: number;
}

export const StateSelect = (props: StateSelectProps) => {
  const { countryId } = props;
  const { data } = useSWR('state', () => getStates({ limit: 300, country: countryId }));
  console.log("ESTADO",data)
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
        className="rounded"
        choices={choices}
        placeholder="--Selecciona Estado--"
        {...props}
      />
    </div>
  );
};

export default StateSelect;
