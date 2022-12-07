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

import { FormikValues } from 'formik';

interface ResetPasswordConfirmModalProps {
  showModal: boolean;
  setShowModal: any;
  uidb64: any;
  token: any;
}

interface ResetPasswordConfirmForm {
  password1: string;
  password2: string;
}

const STEPS = {
  FORM: 0,
  SUCCESS: 1,
};

const OPTIONS = [
  {
    value: SERVER_URLS.URL_LOGIN,
    text: 'Iniciar sesión',
  },
  {
    value: SERVER_URLS.URL_LANDING,
    text: 'Seguir navegando en el portal',
  },
  {
    value: SERVER_URLS.URL_LANDING,
    text: 'Salir',
  },
];

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
    password1: '',
    password2: '',
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

  return (
    <BaseModal
      showModal={showModal}
      title="reset password"
      setShowModal={setShowModal}
    >
      <Form initialValues={initValues} onSubmit={handleSubmit} renderProps>
        {({ values }) => (
          <>
            {step === STEPS.SUCCESS ? (
              <div>
                <p className="mb-4">Su contraseña ha sido cambiada</p>
                <p className="mb-4">¿Qué desea hacer?</p>

                <RadioGroup name="form_choice" choices={OPTIONS} />
                <div className="flex mt-3">
                  <Button
                    onClick={() => router.push(values.form_choice)}
                    disabled={!values?.form_choice}
                  >
                    Aceptar
                  </Button>
                </div>
              </div>
            ) : step === STEPS.FORM ? (
              <>
                <div className="flex flex-col gap-y-4 m-8 ">
                  <ErrorMsg name="non_field_errors" />
                  <div className="flex">
                    <label className="basis-1/6" htmlFor="password1">
                      contraseña
                    </label>
                    <Field name="password1" id="password1" />
                  </div>
                  <div className="flex">
                    <label className="basis-1/6" htmlFor="password2">
                      confirmar contraseña
                    </label>
                    <Field name="password2" id="password2" />
                  </div>
                </div>
                <div className="flex justify-center mt-2">
                  <div className="flex">
                    <Button type="submit">Cambiar contraseña</Button>
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
