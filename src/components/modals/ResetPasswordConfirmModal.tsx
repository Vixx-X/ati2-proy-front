import { useState } from 'react';

import { useRouter } from 'next/router';

import Loader from '@components/Loader';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import RadioGroup from '@components/forms/RadioGroup';
import Button from '@components/layout/Button';
import BaseModal from '@components/modals/BaseModal';

import { SERVER_URLS } from '@config';

import { postResetPasswordConfirm } from '@fetches/user';

import useTranslate from '@hooks/useTranslate';

import { FormikValues } from 'formik';
import PassField from '@components/forms/PassField';

interface ResetPasswordConfirmModalProps {
  showModal: boolean;
  setShowModal: any;
  uidb64: any;
  token: any;
}

interface ResetPasswordConfirmForm {
  new_password1: string;
  new_password2: string;
}

const STEPS = {
  FORM: 0,
  SUCCESS: 1,
};

export const ResetPasswordConfirmModal = ({
  showModal,
  setShowModal,
  uidb64,
  token,
}: ResetPasswordConfirmModalProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(STEPS.FORM);

  const initValues = {
    new_password1: '',
    new_password2: '',
  } as ResetPasswordConfirmForm;

  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    setLoading(true);
    try {
      await postResetPasswordConfirm(values, uidb64, token);
      setStatus({});
      setStep(STEPS.SUCCESS);
    } catch (exception: any) {
      setStatus(exception.data.detail);
      setLoading(false);
    }
  };

  const t = useTranslate();
  const OPTIONS = [
    {
      value: SERVER_URLS.URL_LOGIN,
      text: t('Iniciar sesión'),
    },
    {
      value: SERVER_URLS.URL_LANDING,
      text: t('Seguir navegando en el portal'),
    },
    {
      value: SERVER_URLS.URL_LANDING,
      text: t('Salir'),
    },
  ];
  return (
    <BaseModal
      showModal={showModal}
      title="Restablecer contraseña"
      setShowModal={setShowModal}
    >
      <Form initialValues={initValues} onSubmit={handleSubmit} renderProps>
        {({ values }) => (
          <>
            {step === STEPS.SUCCESS ? (
              <div>
                <p className="mb-4">{t('Su contraseña ha sido cambiada')}</p>
                <p className="mb-4">{t('¿Qué desea hacer?')}</p>

                <RadioGroup name="form_choice" choices={OPTIONS} />
                <div className="flex mt-3">
                  <Button
                    onClick={() => router.push(values.form_choice)}
                    disabled={!values?.form_choice}
                  >
                    {t('Aceptar')}
                  </Button>
                </div>
              </div>
            ) : step === STEPS.FORM ? (
              <>
                <div className="flex flex-col gap-y-4 m-8 ">
                  <ErrorMsg name="non_field_errors" />
                  <div className="flex">
                    <label className="basis-1/6" htmlFor="new_password1">
                      {t('contraseña')}
                    </label>
                    <PassField name="new_password1" id="new_password1" />
                    <ErrorMsg name="new_password1" />
                  </div>
                  <div className="flex">
                    <label className="basis-1/6" htmlFor="new_password2">
                      {t('confirmar contraseña')}
                    </label>
                    <PassField name="new_password2" id="new_password2" />
                    <ErrorMsg name="new_password2" />
                  </div>
                </div>
                <div className="flex justify-center mt-2">
                  <div className="flex">
                    <Button type="submit">{t('Cambiar contraseña')}</Button>
                  </div>
                </div>
                {loading && <Loader />}
              </>
            ) : null}
          </>
        )}
      </Form>
    </BaseModal>
  );
};

export default ResetPasswordConfirmModal;
