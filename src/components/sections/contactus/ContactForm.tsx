import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import TextArea from '@components/forms/TextArea';
import Button from '@components/layout/Button';

import { postContactUsInfo } from '@fetches/user';

import { FormikValues } from 'formik';

interface ContactUsForm {
  email: string;
  full_name: string;
  reason: string;
  body?: string;
}

const initValues: ContactUsForm = {
  email: '',
  full_name: '',
  reason: '',
  body: '',
};

const ContactForm = ({ setLoading }: any) => {
  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    setLoading(true);
    try {
      await postContactUsInfo(values);
      setStatus({});
    } catch (exception: any) {
      setStatus(exception.data.detail);
      setLoading(false);
    }
  };

  return (
    <div className="w-2/4 border-2 border-black p-8 h-fit">
      <h2 className="font-bold text-lg text-center mb-4">
        Formulario de contacto
      </h2>
      <Form initialValues={initValues} onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex border-b border-gray py-2">
            <label htmlFor="email" className="capitalize mr-2">
              para:
            </label>
            <Field className="px-2 border-none grow" name="email" id="email" />
          </div>
          <ErrorMsg name="email" />
        </div>
        <div className="mb-4">
          <div className="flex border-b border-gray py-2">
            <label htmlFor="full_name" className="capitalize mr-2">
              nombre y apellido:
            </label>
            <Field
              className="px-2 border-none grow"
              name="full_name"
              id="full_name"
            />
          </div>
          <ErrorMsg name="full_name" />
        </div>
        <div className="mb-4">
          <div className="flex border-b border-gray py-2">
            <label htmlFor="reason" className="capitalize mr-2">
              asunto:
            </label>
            <Field
              className="px-2 border-none grow"
              name="reason"
              id="reason"
            />
          </div>
          <ErrorMsg name="full_name" />
        </div>
        <div className="mb-8">
          {' '}
          <TextArea className="w-full h-56 resize-none" name="body" />
          <ErrorMsg name="body" />
        </div>
        <div className="text-center">
          <Button
            bgColor="bg-darkprimary"
            type="submit"
            className="w-fit align-center"
          >
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
