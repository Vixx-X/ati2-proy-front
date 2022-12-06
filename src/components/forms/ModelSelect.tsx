import { useMemo } from 'react';

import { getModels } from '@fetches/vehicles';

import useSWR from 'swr';

import Select, { FilteredSelectProps } from './Select';

export interface ModelSelectProps extends FilteredSelectProps {}

export const ModelSelect = ({
  filter,
  className,
  ...props
}: ModelSelectProps) => {
  const { data } = useSWR(['model', { limit: 300, ...filter }], (_, query) =>
    getModels(query)
  );

  const choices = useMemo(
    () =>
      data?.results.map((item: any) => ({
        text: item.model,
        value: item.model,
      })),
    [data]
  );
  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        Modelo de Vehiculos
      </p>
      <Select
        className={`w-full rounded ${className}`}
        choices={choices}
        placeholder="--Selecciona Modelo--"
        {...props}
      />
    </div>
  );
};

export default ModelSelect;
