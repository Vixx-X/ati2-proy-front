import { useState } from 'react';

import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import PassField from '@components/forms/PassField';
import Button from '@components/layout/Button';
import BaseModal from '@components/modals/BaseModal';

import authStore from '@stores/AuthStore';

import { FormikValues } from 'formik';

interface LogInModalProps {
  showModal: boolean;
  setShowModal: any;
}

interface SigninForm {
  password: string;
  email: string;
}

export const LogInModal = ({ showModal, setShowModal }: LogInModalProps) => {
  const [loading, setLoading] = useState(false);

  const login = authStore((state: any) => state.login);

  const initValues = {
    password: '',
    email: '',
  } as SigninForm;

  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      setStatus({});
    } catch (exception: any) {
      setStatus(exception.data);
      setLoading(false);
    }
  };

  return (
    <BaseModal
      showModal={showModal}
      title="iniciar sesion"
      setShowModal={setShowModal}
    >
      <div className="min-w-[600px]">
        <p>Seleccione la cuenta en la que desea acceder</p>
        <Form initialValues={initValues} onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-4 m-8 ">
            <div className="flex">
              <label className="basis-1/6 capitalize" htmlFor="email">
                correo
              </label>
              <Field name="email" id="email" styles="basis-5/6" />
              <ErrorMsg name="email" />
            </div>
            <div className="flex">
              <label className="basis-1/6 capitalize" htmlFor="password">
                contraseña
              </label>
              <div className="basis-5/6 text-sm">
                <PassField name="password" id="password" />
              </div>
              <ErrorMsg name="password" />
            </div>
          </div>
          <div className="text-center">
            <Button className="w-auto rounded-md font-bold" type="submit">
              iniciar sesión
            </Button>
            <a className="mt-4 block underline ">
              Olvide mi Contraseña o mis datos
            </a>
          </div>
        </Form>
      </div>
    </BaseModal>
  );
};

export default LogInModal;
