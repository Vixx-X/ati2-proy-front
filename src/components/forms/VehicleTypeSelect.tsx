import { VEHICLE_TYPE_CHOICES } from '@config';
import useTranslate from '@hooks/useTranslate';
import { useMemo } from 'react';

import Select, { FilteredSelectProps } from './Select';

export interface VehicleTypeSelectProps extends FilteredSelectProps {}

export const VehicleTypeSelect = ({
  filter,
  name,
  ...props
}: VehicleTypeSelectProps) => {
  const t = useTranslate();
  const vehicleTypeChoices = useMemo(
    () =>
    VEHICLE_TYPE_CHOICES.map(({ text, ...rest }) => ({
        text: t(text),
        ...rest,
      })),
    [t]
  );
  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        {t('Tipo de Vehiculo')}
      </p>
      <Select
        className="w-full rounded"
        choices={vehicleTypeChoices}
        placeholder={t("--Selecciona Tipo de Vehiculo--")}
        name={name}
        {...props}
      />
    </div>
  );
};

export default VehicleTypeSelect;
