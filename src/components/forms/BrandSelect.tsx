import { useMemo } from 'react';

import { getBrands } from '@fetches/vehicles';

import useSWR from 'swr';

import Select from './Select';

export const BrandSelect = ({ name, filter, className, ...props }: Props) => {
  const { data } = useSWR(['brand', { limit: 100, ...filter }], (_, query) =>
    getBrands(query)
  );
  const choices = useMemo(
    () =>
      data?.results.map((item: any) => ({
        text: item.brand,
        value: item.brand,
      })),
    [data]
  );
  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        Marcas de Vehículos
      </p>
      <Select
        name={name}
        className={`w-full rounded ${className}`}
        choices={choices}
        placeholder="--Selecciona Marca--"
        {...props}
      />
    </div>
  );
};

export default BrandSelect;
