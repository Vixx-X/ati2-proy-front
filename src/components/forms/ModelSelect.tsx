import { useMemo } from 'react';

import { getModels } from '@fetches/vehicles';

import useSWR from 'swr';

import Select, { FilteredSelectProps } from './Select';
import useTranslate from '@hooks/useTranslate';

export interface ModelSelectProps extends FilteredSelectProps {}

export const ModelSelect = ({ filter, ...props }: ModelSelectProps) => {
  const { data } = useSWR(['model', { limit: 300, ...filter }], (_, query) =>
    getModels(query)
  );

  const t = useTranslate();
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
        {t('Marcas de Vehiculos')}
      </p>
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder={t("--Selecciona Modelo--")}
        {...props}
      />
    </div>
  );
};

export default ModelSelect;
