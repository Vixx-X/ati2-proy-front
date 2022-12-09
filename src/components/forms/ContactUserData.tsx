import { useState } from 'react';

import CountrySelect from '@components/forms/CountrySelect';
import { Field } from '@components/forms/Field';
import PhoneButtonSet from '@components/layout/PhoneButtonSet';

import useTranslate from '@hooks/useTranslate';

import ErrorMsg from './ErrorMsg';

export const ContactUserData = () => {
  const [enableContactStaticPhone, setEnableContactStaticPhone] =
    useState(false);
  const [enableContactMobilePhone, setEnableContactMobilePhone] =
    useState(false);

  const handleChangeContactPhone = (e: any) => {
    if (e.target.value === 'static') {
      setEnableContactStaticPhone(!enableContactStaticPhone);
    } else {
      setEnableContactMobilePhone(!enableContactMobilePhone);
    }
  };

  const t = useTranslate();
  return (
    <>
      <div className="w-full bg-secundary">
        <p className="w-full text-center text-white font-bold text-xl p-2">
          {t('Datos de contacto')}
        </p>
      </div>
      <div className="w-full border border-2 border-darkprimary p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="w-[25%] font-bold">
            {t('Nombre')} <span className="text-red-600">*</span>
          </p>
          <div>
            <Field className="w-[70%]" type="text" name="contact.first_name" />
            <ErrorMsg name="contact.first_name" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="w-[25%] font-bold">
            {t('Apellido')} <span className="text-red-600">*</span>
          </p>
          <div>
            <Field className="w-[70%]" type="text" name="contact.last_name" />
            <ErrorMsg name="contact.last_name" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="w-[25%] font-bold">
            {t('Correo Electrónico')} <span className="text-red-600">*</span>
          </p>
          <div>
            <Field className="w-[70%]" type="text" name="contact.email" />
            <ErrorMsg name="contact.email" />
          </div>
        </div>
        <p className="text-center">
          {t('Seleccione, el o los teléfonos de su preferencia')}
        </p>
        <PhoneButtonSet
          phoneName="contact.phone"
          localPhoneName="contact.local_phone"
        />
      </div>
    </>
  );
};

export default ContactUserData;
