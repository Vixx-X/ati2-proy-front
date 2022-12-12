import React from 'react';

import CheckBox from '@components/forms/Checkbox';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import PassField from '@components/forms/PassField';

import useTranslate from '@hooks/useTranslate';

const LoginSection = ({}) => {
  const t = useTranslate();
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-y-4 justify-center">
          <div className="flex">
            <label htmlFor="email" className="w-80">
              {t('Correo electrónico para acceder al portal')}
            </label>
            <div className="w-full">
              <Field name="user.email" id="user.email" />
              <ErrorMsg name="user.email" />
            </div>
          </div>
          <div className="flex">
            <label htmlFor="user.password1" className="w-80">
              {t('Contraseña')}
            </label>
            <div className="w-full">
              <PassField name="user.password1" id="user.password1" />
              <ErrorMsg name="user.password1" />
            </div>
          </div>
          <div className="flex">
            <label htmlFor="user.password2" className="w-80">
              {t('Confirmar la contraseña')}
            </label>
            <div className="w-full">
              <PassField name="user.password2" id="user.password2" />
              <ErrorMsg name="user.password2" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <CheckBox name="user.notification_setting.active" />
        {`Quiero mantenerme informado acerca de los servicios que ofrece la
        empresa, y otros aspectos de interés`}
      </div>
      <ErrorMsg name="user.notification_setting.active" />
    </>
  );
};

export default LoginSection;
