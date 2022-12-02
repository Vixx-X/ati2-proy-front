import { useMemo } from 'react';

import { getModel } from '@fetches/address';

import { useFormikContext } from 'formik';
import useSWR from 'swr';

import Select, { SelectProps } from './Select';

export interface ModelSelectProps extends Omit<SelectProps, 'choices'> {
  choices?: { value: string; text: string }[];
}

export const ModelSelect = (props: ModelSelectProps) => {
  const { values } = useFormikContext();
  const { data } = useSWR(
    ['model', { limit: 300, brand: values?.brand }],
    (_, query) => getModel(query)
  );

  const choices = useMemo(
    () =>
      data?.results.map((item: any, index: any) => ({
        text: item.model,
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

export default ModelSelect;
