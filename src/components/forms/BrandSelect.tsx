import { useMemo } from 'react';

import { getBrand } from '@fetches/address';

import useSWR from 'swr';

import Select, { SelectProps } from './Select';

export interface BrandSelectProps extends Omit<SelectProps, 'choices'> {
  choices?: { value: string; text: string }[];
}

export const BrandSelect = (props: BrandSelectProps) => {
  const { data } = useSWR('brand', () => getBrand({ limit: 300 }));
  const choices = useMemo(
    () =>
      data?.results.map((item: any,index:any) => ({
        text: item.brand,
      })),
    [data]
  );
  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        Marcas de Vehiculos
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

export default BrandSelect;
