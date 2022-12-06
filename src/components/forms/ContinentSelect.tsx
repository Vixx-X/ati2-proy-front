import { useMemo } from 'react';

import { getContinents } from '@fetches/address';

import useSWR from 'swr';

import Select, { SelectProps } from './Select';

export interface ContinentSelectProps extends Omit<SelectProps, 'choices'> {
  choices?: { value: string; text: string }[];
  noTitle?: boolean
}

export const ContinentSelect = (props: ContinentSelectProps) => {
  const { data } = useSWR('continents', () => getContinents({ limit: 300 }));
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
      { !props.noTitle && <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        Continente
      </p>}
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder="--Selecciona Continente--"
        {...props}
      />
    </div>
  );
};

export default ContinentSelect;
