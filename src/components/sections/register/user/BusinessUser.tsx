import React from 'react';

import CitySelect from '@components/forms/CitySelect';
import CountrySelect from '@components/forms/CountrySelect';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import TextArea from '@components/forms/TextArea';
import PhoneButtonSet from '@components/layout/PhoneButtonSet';

import useTranslate from '@hooks/useTranslate';

import { useFormikContext } from 'formik';

export const BusinessUser = ({}) => {
  const t = useTranslate();
  const { values }: any = useFormikContext();
  return (
    <>
      <div className="w-full justify-center flex gap-x-20">
        <div className="flex flex-col gap-y-4 md:w-2/4">
          <div className="bg-primary py-4 px-10 text-white capitalize text-xl font-bold">
            {t('Datos de la empresa')}
          </div>
          <div className="flex items-center">
            <label htmlFor="name" className="w-40 capitalize">
              {t('Nombre de la empresa')}
            </label>
            <div className="w-full">
              <Field name="name" id="name" />
              <ErrorMsg name="name" />
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="tax_id" className="w-40 capitalize">
              {t('RIF')}
            </label>
            <div className="w-full">
              <Field name="tax_id" id="tax_id" />
              <ErrorMsg name="tax_id" />
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="country" className="w-40 capitalize">
              {t('país')}
            </label>
            <div className="w-full">
              <CountrySelect
                notitle
                name="filter.address.country"
                id="country"
              />
            </div>
          </div>
          <div className="flex gap-x-4">
            <label htmlFor="city" className="w-40">
              {t('Ciudad')}
            </label>
            <div className="w-full">
              <CitySelect
                notitle
                name="address.city"
                filter={{ country: values?.filter?.address?.country }}
                id="city"
              />
              <ErrorMsg name="address.city" />
            </div>
          </div>
          <div className="flex gap-x-4">
            <label htmlFor="address.line1" className="w-40">
              {t('Dirección principal')}
            </label>
            <div className="w-full">
              <TextArea name="address.line1" id="address.line1" />
              <ErrorMsg name="address.line1" />
            </div>
          </div>
          <div className="flex gap-x-4">
            <label htmlFor="address.line2" className="w-40">
              {t('Más detalles de la dirección')}
            </label>
            <div className="w-full">
              <Field name="address.line2" id="address.line2" />
              <ErrorMsg name="address.line2" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:w-2/4">
          <div className="bg-primary py-4 px-10 text-white text-xl font-bold">
            {t('Datos representante de la empresa')}
          </div>
          <div className="flex gap-x-4">
            <label htmlFor="representant.first_name" className="w-40">
              {t('Nombre del representante')}
            </label>
            <div>
              <Field
                name="representant.first_name"
                id="representant.first_name"
              />
              <ErrorMsg name="representant.first_name" />
            </div>
          </div>
          <div className="flex gap-x-4">
            <label htmlFor="representant.last_name" className="w-40">
              {t('Apellido del representante')}
            </label>
            <div>
              <Field
                name="representant.last_name"
                id="representant.last_name"
              />
              <ErrorMsg name="representant.last_name" />
            </div>
          </div>
          <div className="flex gap-x-4">
            <label htmlFor="representant.email" className="w-40">
              {t('Correo del representante')}
            </label>
            <div>
              <Field name="representant.email" id="representant.email" />
              <ErrorMsg name="representant.email" />
            </div>
          </div>
          <div className="flex gap-x-4">
            <label htmlFor="representant.email" className="w-40">
              {t('Teléfonos del representante')}
            </label>
            <div className="w-full">
              <PhoneButtonSet
                phoneName="representant.phone"
                localPhoneName="representant.local_phone"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="justify-center flex text-darkprimary mt-8">
        <span className="text-red">*</span>{' '}
        {`Por favor verifique que sus datos
        sean los correctos, ya que serán utilizados para generar su publicación,
        enviarle sus datos de acceso, o notificar sus pagos`}
      </p>
    </>
  );
};

export default BusinessUser;
