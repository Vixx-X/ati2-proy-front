import { useState } from 'react';

import { Field } from '@components/forms/Field';

export const ContactUserData = () => {
  const [enableContactStaticPhone, setEnableContactStaticPhone] =
    useState(false);
  const [enableContactMobilePhone, setEnableContactMobilePhone] =
    useState(false);

  const handleChangeContactPhone = (e: any) => {
    console.log(e.target.value);
    if (e.target.value === 'static') {
      setEnableContactStaticPhone(!enableContactStaticPhone);
      console.log(enableContactStaticPhone);
    } else {
      setEnableContactMobilePhone(!enableContactMobilePhone);
      console.log(enableContactMobilePhone);
    }
  };

  return (
    <>
      <div className="w-[30%] bg-secundary">
        <p className="w-full text-center text-white font-bold text-xl p-2">
          Datos de contacto
        </p>
      </div>
      <div className="w-full border border-2 border-darkprimary p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="w-[25%] font-bold">
            Nombre <span className="text-red-600">*</span>
          </p>
          <Field required className="w-[70%]" type="text" name="contact.name" />
        </div>
        <div className="flex justify-between items-center">
          <p className="w-[25%] font-bold">
            Apellido <span className="text-red-600">*</span>
          </p>
          <Field className="w-[70%]" type="text" name="contact.lastName" />
        </div>
        <div className="flex justify-between items-center">
          <p className="w-[25%] font-bold">
            Correo Electronico <span className="text-red-600">*</span>
          </p>
          <Field className="w-[70%]" type="text" name="contact.email" />
        </div>
        <p className="text-center">
          Seleccione, el o los teléfonos de su preferencia
        </p>
        <div className="flex flex gap-2">
          <div className="flex gap-2 items-center w-full">
            <input
              onChange={handleChangeContactPhone}
              type="checkbox"
              value="mobile"
            />
            <label className="bg-secundary py-2 px-8 text-white w-[70%]">
              Movil
            </label>
          </div>
          <div className="flex gap-2 items-center w-full">
            <input
              onChange={handleChangeContactPhone}
              type="checkbox"
              value="static"
            />
            <label className="bg-secundary py-2 px-8 text-white w-[70%]">
              Fijo
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUserData;
