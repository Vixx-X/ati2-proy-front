import { useMemo } from 'react';

import { getStates } from '@fetches/address';

import useSWR from 'swr';

import Select, { FilteredSelectProps } from './Select';

export interface StateSelectProps extends FilteredSelectProps {}

export const StateSelect = ({
  filter,
  className,
  ...props
}: StateSelectProps) => {
  const { data } = useSWR(['state', { limit: 300, ...filter }], (_, query) =>
    getStates(query)
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
        className={`w-full rounded ${className}`}
        choices={choices}
        placeholder="--Selecciona Estado--"
        {...props}
      />
    </div>
  );
};

export default StateSelect;
