import { useState } from 'react';

import Loader from '@components/Loader';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import RadioGroup from '@components/forms/RadioGroup';
import Button from '@components/layout/Button';
import BaseModal from '@components/modals/BaseModal';

import { postResetPassword } from '@fetches/user';

import { FormikValues } from 'formik';

interface ResetPasswordModalProps {
  showModal: boolean;
  setShowModal: any;
}

interface ResetPasswordForm {
  document_id: string;
  email: string;
}

const STEPS = {
  BASE: 0,
  FORM: 1,
  INFO: 2,
};

const OPTIONS = [
  {
    value: 'document_id',
    text: 'Cédula de identidad, DNI o pasaporte',
  },
  {
    value: 'email',
    text: 'Correo electrónico',
  },
  {
    value: 'phone_number',
    text: 'Teléfono celular o móvil',
  },
];

export const ResetPasswordModal = ({
  showModal,
  setShowModal,
}: ResetPasswordModalProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any | undefined>();
  const [step, setStep] = useState(STEPS.BASE);

  const initValues = {
    document_id: '',
    email: '',
  } as ResetPasswordForm;

  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    setLoading(true);
    try {
      const data = {} as any;
      if (values?.document_id) data['document_id'] = values?.document_id;
      if (values?.email) data['email'] = values?.email;
      const user = await postResetPassword(data);
      setUser(user);
      setStatus({});
      setStep(STEPS.INFO);
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
            {step === STEPS.INFO ? (
              <div>
                <p className="mb-4">
                  Acabamos de enviar tu usuario, y un link para restablecer tu
                  contraseña, al correo: {user?.email}
                </p>
                <p className="mb-4">
                  y al número de teléfono: {user?.phone_number ?? 'NO APLICA'}
                </p>
                <p className="mb-4">
                  Si este no es su correo o teléfono, debe modificar su correo
                  electrónico, o teléfono, en la cuenta que posee con la
                  empresa, y solicitar nuevamente el envío de dicha información
                </p>
              </div>
            ) : step === STEPS.BASE ? (
              <>
                <p className="mb-4">
                  Seleccione la información que va a proporcionar
                </p>
                <RadioGroup name="form_choice" choices={OPTIONS} />
                <div className="flex mt-3">
                  <Button
                    onClick={() => setStep(STEPS.FORM)}
                    disabled={!values?.form_choice}
                  >
                    Siguiente
                  </Button>
                  <Button onClick={() => setStep(STEPS.BASE)}>Cancelar</Button>
                </div>
              </>
            ) : step === STEPS.FORM ? (
              <>
                <p className="mb-3">
                  {values?.form_choice === 'email' ? (
                    <>Ingresa tu correo electrónico</>
                  ) : values?.form_choice === 'document_id' ? (
                    <>Ingresa tu cédula de identidad, DNI, o pasaporte</>
                  ) : values?.form_choice === 'phone_number' ? (
                    <>Ingresa tu número de teléfono móvil</>
                  ) : null}
                </p>
                <div className="flex flex-col gap-y-4 m-8 ">
                  <div className="flex">
                    <Field name={values?.form_choice} />
                  </div>
                  <ErrorMsg name={values?.form_choice} />
                  <ErrorMsg name={'non_field_errors'} />
                </div>
                <div className="flex justify-center mt-2">
                  <div className="flex">
                    <Button
                      type="submit"
                      disabled={values?.form_choice === 'phone_number'}
                    >
                      Siguiente
                    </Button>
                    <Button onClick={() => setStep(STEPS.BASE)}>
                      Cancelar
                    </Button>
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

export default ResetPasswordModal;
