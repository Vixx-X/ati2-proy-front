import { useRef, useState } from 'react';

import type { NextPage } from 'next';

import Form from '@components/forms/Form';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import AboutUs from '@components/sections/register/AbousUs';
import InfoRegister from '@components/sections/register/Info';
import LanguageSection from '@components/sections/register/LanguageSection';
import LoginSection from '@components/sections/register/LoginSection';
import PayInfo from '@components/sections/register/PayInfo';
import { RegisterSection } from '@components/sections/register/RegisterSection';

import { classNames } from '@utils/classNames';

import { FormikValues } from 'formik';
import { Business, NaturalPerson } from 'user';

const registerSections = [
  {
    index: 0,
    text: '¿Cómo supo de nosotros?',
  },
  {
    index: 1,
    text: 'Registrar usuario',
  },
  {
    index: 2,
    text: 'Idioma del adiestamiento',
  },
  {
    index: 3,
    text: 'Datos de inicio de sesión',
  },
  {
    index: 4,
    text: 'frecuencia e información a recibir',
  },
  {
    index: 5,
    text: 'datos de facturación',
  },
];

const initialValues: NaturalPerson | Business = {
  user: {
    password: '',
    email: '',
    language: '',
    notification: {
      send_notificacion: false,
      notification_frecuency: '',
      notification_method: {
        email: '',
        socials: [],
        text_message: '',
        other: '',
        facebook: '',
      },
    },
    about_website: {
      web_portal: false,
      social: [],
      friends: false,
      other: '',
    },
    payment_info: {
      source_bank: '',
      target_bank: '',
      country_source: {
        name: '',
      },
    },
  },
  name: '',
  tax_id: '',
  address: {
    line1: '',
    line2: '',
  },
  representant: {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    local_phone: '',
  },
  first_name: '',
  last_name: '',
  document_id: '',
  email: '',
  phone: '',
  local_phone: '',
  country: {
    name: '',
  },
};

const Register: NextPage = () => {
  const [indexSection, setSection] = useState<number>(0);
  const refForm = useRef(null);
  const [load, setLoading] = useState<boolean>(false);

  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    setLoading(true);
    try {
      alert(JSON.stringify(values, null, 2));
      // await postRegisterUser({
      //   ...values,
      //   document_id: `${values.typeOfDocumentID}-${values.number}`,
      // });
      // await login(values.username, values.password1);
      setStatus({});
    } catch (exception: any) {
      setStatus(exception.data);
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <InfoRegister />
      <div className="max-w-2xl mx-auto w-full my-8">
        <div className="sm:grid-cols-2 md:grid-cols-3 grid gap-4">
          {registerSections.map(({ index, text }) => (
            <Button
              key={index}
              onClick={() => setSection(index)}
              className="w-auto rounded-md font-bold"
              bgColor={classNames(
                indexSection >= index ? 'bg-third' : 'bg-gray-300',
                indexSection == index ? 'underline' : ''
              )}
            >
              {`${index + 1}- ${text}`}
            </Button>
          ))}
        </div>
      </div>
      <section className="grid gap-4 grid-cols-custom items-center">
        <Button
          bgColor="bg-red"
          className={`h-fit ${indexSection <= 0 ? 'invisible' : 'visible'}`}
          onClick={() => setSection(indexSection - 1)}
        >
          &lt; Atrás
        </Button>
        <p className="font-bold text-white text-center bg-primary text-xl py-4 rounded-md uppercase">
          {registerSections[indexSection].text}
        </p>
        <Button
          bgColor="bg-red"
          className={`h-fit ${indexSection >= 5 ? 'invisible' : 'visible'}`}
          onClick={() => setSection(indexSection + 1)}
        >
          Continuar &gt;
        </Button>
      </section>
      <Form
        initialValues={initialValues}
        innerRef={refForm}
        onSubmit={handleSubmit}
      >
        <section className="p-8 min-h-[35vh]">
          {indexSection == 0 && <AboutUs />}
          {indexSection == 1 && <RegisterSection />}
          {indexSection == 2 && <LanguageSection />}
          {indexSection == 3 && <LoginSection />}
          {indexSection == 5 && <PayInfo />}
        </section>
        <div className="w-full justify-center gap-x-10 flex">
          <Button className="w-auto" onClick={() => {}}>
            cancelar
          </Button>
          {indexSection == 5 && (
            <Button type="submit" className="w-auto">
              registar
            </Button>
          )}
        </div>
      </Form>
    </MainContainer>
  );
};

export default Register;
