import { useMemo } from 'react';

import { getVehicles } from '@fetches/vehicles';

import useSWR from 'swr';

import Select, { FilteredSelectProps } from './Select';
import useTranslate from '@hooks/useTranslate';

export interface VehicleSelectProps extends FilteredSelectProps {}

export const VehicleSelect = ({ filter, ...props }: VehicleSelectProps) => {
  const { data } = useSWR(['vehicle', { limit: 100, ...filter }], (_, query) =>
    getVehicles(query)
  );
  const choices = useMemo(
    () =>
      data?.results.map((item: any) => ({
        text: `${item.brand} ${item.model} ${item.year}`,
        value: item.id,
      })),
    [data]
  );
  const t = useTranslate();
  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        {t('Vehículo')}
      </p>
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder={t("--Selecciona Vehiculo--")}
        {...props}
      />
    </div>
  );
};

export default VehicleSelect;
