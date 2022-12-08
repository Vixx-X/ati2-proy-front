import { useState } from 'react';

import CountrySelect from '@components/forms/CountrySelect';
import { Field } from '@components/forms/Field';
import useTranslate from '@hooks/useTranslate';

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
      <div className="w-[30%] bg-secundary">
        <p className="w-full text-center text-white font-bold text-xl p-2">
          {t('Datos de contacto')}
        </p>
      </div>
      <div className="w-full border border-2 border-darkprimary p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="w-[25%] font-bold">
            {t('Nombre')} <span className="text-red-600">*</span>
          </p>
          <Field className="w-[70%]" type="text" name="contact.first_name" />
        </div>
        <div className="flex justify-between items-center">
          <p className="w-[25%] font-bold">
            {t('Apellido')} <span className="text-red-600">*</span>
          </p>
          <Field className="w-[70%]" type="text" name="contact.last_name" />
        </div>
        <div className="flex justify-between items-center">
          <p className="w-[25%] font-bold">
            {t('Correo Electrónico')} <span className="text-red-600">*</span>
          </p>
          <Field className="w-[70%]" type="text" name="contact.email" />
        </div>
        <p className="text-center">
          {t('Seleccione, el o los teléfonos de su preferencia')}
        </p>
        <div className="flex flex gap-2">
          <div className="flex gap-2 items-center w-full">
            <input
              onChange={handleChangeContactPhone}
              type="checkbox"
              value="mobile"
            />
            <label className="bg-secundary py-2 px-8 text-white w-[70%] text-center font-bold">
              {t('Móvil')}
            </label>
          </div>
          <div className="flex gap-2 items-center w-full">
            <input
              onChange={handleChangeContactPhone}
              type="checkbox"
              value="static"
            />
            <label className="bg-secundary py-2 px-8 text-white w-[70%] text-center font-bold">
              {t('Fijo')}
            </label>
          </div>
        </div>
        {enableContactMobilePhone ? (
          <div className="w-full flex gap-2">
            <CountrySelect name="contact.mobilePhoneCode" className="w-[30%]" />
            <Field
              placeholder={t("Telefono Movil")}
              name="contact.mobilePhoneValue"
            />
          </div>
        ) : null}
        {enableContactStaticPhone ? (
          <div className="w-full flex gap-2">
            <CountrySelect name="contact.staticPhoneCode" className="w-[30%]" />
            <Field
              placeholder={t("Telefono Fijo")}
              name="contact.staticPhoneValue"
            ></Field>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ContactUserData;
