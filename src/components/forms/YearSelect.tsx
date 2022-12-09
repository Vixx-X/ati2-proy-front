import { useMemo } from 'react';

import { getYears } from '@fetches/vehicles';

import useTranslate from '@hooks/useTranslate';

import useSWR from 'swr';

import Select, { FilteredSelectProps } from './Select';

export interface YearSelectProps extends FilteredSelectProps {}

export const YearSelect = ({ filter, ...props }: YearSelectProps) => {
  const { data } = useSWR(['year', { limit: 300, ...filter }], (_, query) =>
    getYears(query)
  );

  const t = useTranslate();
  const choices = useMemo(
    () =>
      data?.results.map((item: any) => ({
        text: item.year,
        value: item.year,
      })),
    [data]
  );
  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        {t('Año de Vehiculo')}
      </p>
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder={t('--Selecciona Año--')}
        {...props}
      />
    </div>
  );
};

export default YearSelect;
