import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import TextArea from '@components/forms/TextArea';
import Button from '@components/layout/Button';

import { getBusinessInfo, postContactUsInfo } from '@fetches/contact';

import { FormikValues } from 'formik';
import useSWR from 'swr';
import * as Yup from 'yup';

interface ContactUsForm {
  email: string;
  full_name: string;
  reason: string;
}

const ContactUsSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correo invalido')
    .required('Campo requerido')
    .max(25, 'Cadena muy larga'),
  full_name: Yup.string()
    .required('Campo requerido')
    .max(50, 'Cadena muy larga'),
  reason: Yup.string().required('Campo requerido').max(150, 'Cadena muy larga'),
});

const ContactForm = ({ setLoading }: any) => {
  const { data } = useSWR('contact', () => getBusinessInfo());
  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    setLoading(true);
    try {
      await postContactUsInfo(values);
      setStatus({});
    } catch (exception: any) {
      setStatus(exception.data.detail);
    }
    setLoading(false);
  };
  const initValues: ContactUsForm = {
    email: '',
    full_name: '',
    reason: '',
  };

  return (
    <div className="w-2/4 border-2 border-black p-8 h-fit">
      <h2 className="font-bold text-lg text-center mb-4">
        Formulario de contacto
      </h2>
      <Form
        validationSchema={ContactUsSchema}
        initialValues={initValues}
        onSubmit={handleSubmit}
        renderProps
      >
        {({ errors, touched }) => (
          <>
            <div className="mb-4">
              <div className="flex border-b border-gray py-2">
                <label className="capitalize mr-2">para:</label>
                <p className="px-2 border-none grow text-gray-600">
                  {data?.email}
                </p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex border-b border-gray py-2">
                <label htmlFor="email" className="capitalize mr-2">
                  de:
                </label>
                <Field
                  className="px-2 border-none grow text-gray-600"
                  name="email"
                  id="email"
                />
              </div>
              {errors.email && touched.email && (
                <div className="bg-red-600 border border-red text-red w-full p-3 my-3 py-2 rounded-lg text-sm font-normal">
                  <span>{errors.email}</span>
                </div>
              )}
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
              {errors.full_name && touched.full_name && (
                <div className="bg-red-600 border border-red text-red w-full p-3 my-3 py-2 rounded-lg text-sm font-normal">
                  <span>{errors.full_name}</span>
                </div>
              )}
            </div>
            <div className="mb-8">
              <label htmlFor="reason" className="capitalize py-2 mb-2 block">
                asunto:
              </label>
              <TextArea className="w-full h-56 resize-none" name="reason" />
            </div>
            {errors.reason && touched.reason && (
              <div className="bg-red-600 border border-red text-red w-full p-3 my-3 py-2 rounded-lg text-sm font-normal">
                <span>{errors.reason}</span>
              </div>
            )}
            <div className="text-center">
              <Button
                bgColor="bg-darkprimary"
                type="submit"
                className="w-fit align-center"
              >
                Enviar
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};

export default ContactForm;
