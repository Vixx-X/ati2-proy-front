import { useState } from 'react';

import Link from 'next/link';

import Loader from '@components/Loader';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import PassField from '@components/forms/PassField';
import Button from '@components/layout/Button';
import BaseModal from '@components/modals/BaseModal';

import { SERVER_URLS } from '@config';

import useTranslate from '@hooks/useTranslate';

import authStore from '@stores/AuthStore';

import Alert from '@utils/alert';

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
      Alert('GREEN', t('Ingreso exitoso'));
      setShowModal(false);
    } catch {
      Alert('RED', t('Ocurrió un error revise el formulario'));
      setStatus({});
    }
    setLoading(false);
  };

  const t = useTranslate();
  return (
    <BaseModal
      showModal={showModal}
      title="iniciar sesion"
      setShowModal={setShowModal}
    >
      <>
        <p>{t('Seleccione la cuenta en la que desea acceder')}</p>
        <Form initialValues={initValues} onSubmit={handleSubmit}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="flex flex-col gap-y-4 m-8 min-w-[500px] ">
                <div className="flex">
                  <label className="basis-2/6" htmlFor="email">
                    {t('Correo electrónico')}
                  </label>
                  <div className="basis-4/6">
                    <Field name="email" id="email" />
                    <ErrorMsg name="email" />
                  </div>
                </div>
                <div className="flex">
                  <label className="basis-2/6 capitalize" htmlFor="password">
                    {t('contraseña')}
                  </label>
                  <div className="basis-4/6">
                    <PassField name="password" id="password" />
                    <ErrorMsg name="password" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button className="w-auto rounded-md font-bold" type="submit">
                  {t('Iniciar sesión')}
                </Button>
                <Link href={SERVER_URLS.URL_PASSWORD_RESET} passHref>
                  <a className="mt-4 block underline ">
                    {t('Olvide mi Contraseña o mis datos')}
                  </a>
                </Link>
              </div>
            </>
          )}
        </Form>
      </>
    </BaseModal>
  );
};

export default LogInModal;
