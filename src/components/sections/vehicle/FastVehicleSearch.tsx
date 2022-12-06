import BrandSelect from '@components/forms/BrandSelect';
import ContinentSelect from '@components/forms/ContinentSelect';
import CountrySelect from '@components/forms/CountrySelect';
import Form from '@components/forms/Form';
import ModelSelect from '@components/forms/ModelSelect';
import RadioGroup from '@components/forms/RadioGroup';
import StateSelect from '@components/forms/StateSelect';
import VehicleTypeSelect from '@components/forms/VehicleTypeSelect';

import { VEHICLE_STATE_CHOICES } from '@config';

interface FastSearchInterface extends Props {
  className?: string;
  filters: any;
  onFilter: Function;
}

const Label = ({ children }: Props) => (
  <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
    {children}
  </p>
);

const VehicleFastSearch = ({
  filters,
  onFilter,
  className,
}: FastSearchInterface) => {
  return (
    <Form
      className={`w-full ${className}`}
      initialValues={filters}
      onSubmit={onFilter as any}
      renderProps
      autoSubmit
    >
      {({ values }) => (
        <>
          <ContinentSelect name="continent" />
          <CountrySelect
            name="country"
            filter={{
              continent: values?.continent,
            }}
          />
          <StateSelect name="state" filter={{ country: values?.country }} />
          <div>
            <Label>Estado del Vehiculo</Label>
            <RadioGroup name="vehicle_state" choices={VEHICLE_STATE_CHOICES} />
          </div>
          <VehicleTypeSelect name="vehicle-type" />
          <BrandSelect name="brand" />
          <ModelSelect name="model" filter={{ brand: values?.brand }} />
        </>
      )}
    </Form>
  );
};

export default VehicleFastSearch;
