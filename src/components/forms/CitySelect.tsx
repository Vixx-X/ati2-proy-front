import { useMemo } from 'react';

import { getCity } from '@fetches/address';

import useSWR from 'swr';

import Select, { SelectProps } from './Select';

export interface CitySelectProps extends Omit<SelectProps, 'choices'> {
  choices?: { value: string; text: string }[];
  stateId: number;
}

export const CitySelect = (props: CitySelectProps) => {
  const { stateId } = props;
  const { data } = useSWR('cities', () => getCity({ limit: 300, state: stateId }));
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
        Ciudad
      </p>
      <Select
        className="rounded"
        choices={choices}
        placeholder="--Selecciona Ciudad--"
        {...props}
      />
    </div>
  );
};

export default CitySelect;
