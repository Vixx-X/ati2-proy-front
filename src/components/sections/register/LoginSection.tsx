import React from 'react';

import CheckBox from '@components/forms/Checkbox';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';

const LoginSection = ({}) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-y-4 justify-center">
          <div className="flex items-center">
            <label htmlFor="email" className="w-80 capitalize">
              email to access to portal
            </label>
            <Field name="user.email" id="user.email" />
            <ErrorMsg name="user.email" />
          </div>
          <div className="flex items-center">
            <label htmlFor="user.password" className="w-80 capitalize">
              password
            </label>
            <Field name="user.password" type="password" id="user.password" />
            <ErrorMsg name="user.password" />
          </div>
          {/* Setear un checkbox para saber si se debe recibir info */}
          {/* <CheckBox name="information-details" choices={"value", "option"}></CheckBox> */}
        </div>
      </div>
      <div className="flex">
        <CheckBox name="user.notification.send_notification" />
        Quiero mantenerme informado acerca de los servicios que ofrece la
        empresa, y otros aspectos de interés
      </div>
    </>
  );
};

export default LoginSection;
