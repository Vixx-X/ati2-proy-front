import BrandSelect from '@components/forms/BrandSelect';
import CheckBox from '@components/forms/Checkbox';
import CitySelect from '@components/forms/CitySelect';
import ContinentSelect from '@components/forms/ContinentSelect';
import CountrySelect from '@components/forms/CountrySelect';
import Form from '@components/forms/Form';
import ModelSelect from '@components/forms/ModelSelect';
import RadioGroup from '@components/forms/RadioGroup';
import StateSelect from '@components/forms/StateSelect';
import YearSelect from '@components/forms/YearSelect';

import { SALE_TYPE_CHOICES, VEHICLE_STATE_CHOICES } from '@config';

import { Field } from 'formik';

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

const VehicleComplexSearch = ({
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
          <CitySelect
            name="city"
            filter={{ state: values?.filter?.address?.state }}
          />
          <div>
            <Label>Zona</Label>
            <Field name="line1" />
          </div>
          <div>
            <Label>Vehiculo en</Label>
            <RadioGroup name="sale_type" choices={SALE_TYPE_CHOICES} />
          </div>
          <BrandSelect name="brand" />
          <ModelSelect name="model" filter={{ brand: values?.brand }} />
          <YearSelect
            name="year"
            filter={{
              brand: values?.filter?.vehicle?.brand,
              model: values?.filter?.vehicle?.model,
            }}
          />
          <div>
            <Label>Vehiculo en</Label>
            <RadioGroup
              name="ordering"
              choices={[
                {
                  text: 'De mayor a menor precio',
                  value: '-price',
                },
                {
                  text: 'De menor a mayor precio',
                  value: 'price',
                },
              ]}
            />
          </div>
        </>
      )}
    </Form>
  );
};

export default VehicleComplexSearch;
