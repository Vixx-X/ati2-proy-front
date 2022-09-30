import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import Button from '@components/layout/Button';
import BaseModal from '@components/modals/BaseModal';

interface LogInModalProps {
    showModal: boolean;
    setShowModal: any;
}

export const LogInModal = ({showModal, setShowModal} : LogInModalProps) => {
  return (
      <BaseModal
        showModal={showModal}
        title="iniciar sesion"
        setShowModal={setShowModal}
        backDrop={false}
      >
        <>
          <p>Seleccione la cuenta en la que desea acceder</p>
          <Form initialValues={{ email: '', password: '' }} onSubmit={() => {}}>
            <div className="flex flex-col gap-y-4 m-8 ">
              <div className="flex">
                <label className="basis-1/6">correo</label>
                <Field name="email" id="name"></Field>
              </div>
              <div className="flex">
                <label className="basis-1/6">contraseña</label>
                <Field name="password" id="password"></Field>
              </div>
            </div>
            <div className="text-center">
              <Button
                className="w-auto rounded-md font-bold"
                onClick={() => {}}
              >
                iniciar sesión
              </Button>
              <a className="mt-4 block underline ">Olvide mi Contraseña o mis datos</a>
            </div>
          </Form>
        </>
      </BaseModal>
  );
};

export default LogInModal;
