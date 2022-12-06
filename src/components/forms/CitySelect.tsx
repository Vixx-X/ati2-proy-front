import { useMemo } from 'react';

import { getCities } from '@fetches/address';

import useSWR from 'swr';

import Select, { FilteredSelectProps } from './Select';

export interface CitySelectProps extends FilteredSelectProps {}

export const CitySelect = ({
  filter,
  name,
  className,
  ...props
}: CitySelectProps) => {
  const { data } = useSWR(['cities', { limit: 300, ...filter }], (_, query) =>
    getCities(query)
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
        Ciudad
      </p>
      <Select
        className={`w-full rounded ${className}`}
        choices={choices}
        placeholder="--Selecciona Ciudad--"
        name={name}
        {...props}
      />
    </div>
  );
};

export default CitySelect;
