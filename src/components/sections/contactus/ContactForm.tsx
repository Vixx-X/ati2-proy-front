import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import TextArea from '@components/forms/TextArea';
import Button from '@components/layout/Button';

import { postContactUsInfo } from '@fetches/contact';

import useTranslate from '@hooks/useTranslate';

import pageStore from '@stores/PageStore';
import Alert from '@utils/alert';

import { FormikValues } from 'formik';
import { useMemo } from 'react';
import useSWR from 'swr';
import * as Yup from 'yup';

interface ContactUsForm {
  email: string;
  full_name: string;
  reason: string;
}

const ContactForm = ({ setLoading }: any) => {
  const email = pageStore((state) => state.email);
  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    setLoading(true);
    try {
      await postContactUsInfo(values);
      Alert('GREEN', t('Se ha enviardo su consulta satisfactoriamente'));
      setStatus({});
    } catch (exception: any) {
      Alert('RED', t('Opps... Ocurrio un error durante el envio'));
      setStatus(exception.data.detail);
    }
    setLoading(false);
  };
  const initValues: ContactUsForm = {
    email: '',
    full_name: '',
    reason: '',
  };

  const t = useTranslate();

  const ContactUsSchema = useMemo(()=>
    Yup.object().shape({
      email: Yup.string()
        .email(t('Correo invalido'))
        .required(t('Campo requerido'))
        .max(50, t('El maximo de la caracteres es de 50')),
      full_name: Yup.string()
        .required(t('Campo requerido'))
        .max(50, t('El maximo de la caracteres es de 50')),
      reason: Yup.string().required(t('Campo requerido')).max(150, t('El maximo de la caracteres es de 50')),
    })
  ,[t])

  return (
    <div className="w-2/4 border-2 border-black p-8 h-fit">
      <h2 className="font-bold text-lg text-center mb-4">
        {t('Formulario de contacto')}
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
                <label className="capitalize mr-2">{t('para')}:</label>
                <p className="px-2 border-none grow text-gray-600">{email}</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex border-b border-gray py-2">
                <label htmlFor="email" className="capitalize mr-2">
                  {t('de:')}
                </label>
                <Field
                  className="px-2 border-none grow text-gray-600"
                  name="email"
                  id="email"
                />
              </div>
              {errors.email && touched.email && (
                <div className="bg-red-600 border border-red text-red w-full p-3 my-3 py-2 rounded-lg text-sm font-normal">
                  <span>{t(errors.email as string)}</span>
                </div>
              )}
            </div>
            <div className="mb-4">
              <div className="flex border-b border-gray py-2">
                <label htmlFor="full_name" className="capitalize mr-2">
                  {t('nombre y apellido')}:
                </label>
                <Field
                  className="px-2 border-none grow"
                  name="full_name"
                  id="full_name"
                />
              </div>
              {errors.full_name && touched.full_name && (
                <div className="bg-red-600 border border-red text-red w-full p-3 my-3 py-2 rounded-lg text-sm font-normal">
                  <span>{t(errors.full_name as string)}</span>
                </div>
              )}
            </div>
            <div className="mb-8">
              <label htmlFor="reason" className="capitalize py-2 mb-2 block">
                {t('asunto')}:
              </label>
              <TextArea className="w-full h-56 resize-none" name="reason" />
            </div>
            {errors.reason && touched.reason && (
              <div className="bg-red-600 border border-red text-red w-full p-3 my-3 py-2 rounded-lg text-sm font-normal">
                <span>{t(errors.reason as string)}</span>
              </div>
            )}
            <div className="text-center">
              <Button
                bgColor="bg-darkprimary"
                type="submit"
                className="w-fit align-center capitalize"
              >
                {t('enviar')}
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};

export default ContactForm;
