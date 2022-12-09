import { useMemo } from 'react';

import BrandSelect from '@components/forms/BrandSelect';
import ContinentSelect from '@components/forms/ContinentSelect';
import CountrySelect from '@components/forms/CountrySelect';
import Form from '@components/forms/Form';
import ModelSelect from '@components/forms/ModelSelect';
import RadioGroup from '@components/forms/RadioGroup';
import StateSelect from '@components/forms/StateSelect';
import Button from '@components/layout/Button';

import { SALE_TYPE_CHOICES } from '@config';

import useTranslate from '@hooks/useTranslate';

interface FastSearchInterface extends Props {
  className?: string;
  filters: any;
  onFilter: Function;
  autoSubmit?: boolean;
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
  autoSubmit = true,
}: FastSearchInterface) => {
  const t = useTranslate();
  const sale_type_options = useMemo(
    () =>
      SALE_TYPE_CHOICES.map(({ text, ...rest }) => ({
        text: t(text),
        ...rest,
      })),
    [t]
  );
  return (
    <Form
      className={`w-full ${className}`}
      initialValues={filters}
      onSubmit={onFilter as any}
      renderProps
      autoSubmit={autoSubmit}
    >
      {({ values, resetForm }) => (
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
            <Label>{t('Vehiculo en')}</Label>
            <RadioGroup name="sale_type" choices={sale_type_options} />
          </div>
          <BrandSelect name="brand" />
          <ModelSelect name="model" filter={{ brand: values?.brand }} />
          {!autoSubmit ? (
            <div className="flex lg:w-96 gap-x-4 lg:col-span-6 justify-center mx-auto">
              <Button type="submit">{t('Buscar')}</Button>
              <Button onClick={resetForm}>{t('Cancelar')}</Button>
            </div>
          ) : null}
        </>
      )}
    </Form>
  );
};

export default VehicleFastSearch;
