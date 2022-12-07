import { VEHICLE_TYPE_CHOICES } from '@config';

import Select, { FilteredSelectProps } from './Select';

export interface VehicleTypeSelectProps extends FilteredSelectProps {}

export const VehicleTypeSelect = ({
  filter,
  name,
  ...props
}: VehicleTypeSelectProps) => {
  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        Tipo de Vehiculo
      </p>
      <Select
        className="w-full rounded"
        choices={VEHICLE_TYPE_CHOICES}
        placeholder="--Selecciona Tipo de Vehiculo--"
        name={name}
        {...props}
      />
    </div>
  );
};

export default VehicleTypeSelect;
