import React from 'react';

import CheckBox from '@components/forms/Checkbox';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import PassField from '@components/forms/PassField';

const LoginSection = ({}) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-y-4 justify-center">
          <div className="flex">
            <label htmlFor="email" className="w-80">
              Email to access to portal
            </label>
            <div className="w-full">
              <Field name="user.email" id="user.email" />
              <ErrorMsg name="user.email" />
            </div>
          </div>
          <div className="flex">
            <label htmlFor="user.password1" className="w-80">
              Password
            </label>
            <div className="w-full">
              {/* <PassField name="user.password1" id="user.password1" /> */}
              <ErrorMsg name="user.password1" />
            </div>
          </div>
          <div className="flex">
            <label htmlFor="user.password2" className="w-80">
              Confirm password
            </label>
            <div className="w-full">
              {/* <PassField name="user.password2" id="user.password2" /> */}
              <ErrorMsg name="user.password2" />
            </div>
          </div>

          {/* Setear un checkbox para saber si se debe recibir info */}
          {/* <CheckBox name="information-details" choices={"value", "option"}></CheckBox> */}
        </div>
      </div>
      <div className="flex">
        <CheckBox name="user.notification_setting.active" />
        Quiero mantenerme informado acerca de los servicios que ofrece la
        empresa, y otros aspectos de interés
      </div>
    </>
  );
};

export default LoginSection;
