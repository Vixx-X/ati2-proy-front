import { useMemo } from 'react';

import { getContinents } from '@fetches/address';

import useSWR from 'swr';

import Select, { FilteredSelectProps } from './Select';

export interface ContinentSelectProps extends FilteredSelectProps {}

export const ContinentSelect = ({
  filter,
  name,
  className,
  ...props
}: ContinentSelectProps) => {
  const { data } = useSWR(
    ['continents', { limit: 300, ...filter }],
    (_, query) => getContinents(query)
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
        Continente
      </p>
      <Select
        className={`w-full rounded ${className}`}
        name={name}
        choices={choices}
        placeholder="--Selecciona Continente--"
        {...props}
      />
    </div>
  );
};

export default ContinentSelect;
