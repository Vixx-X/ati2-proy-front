import { useRef, useState } from 'react';

import type { NextPage } from 'next';

import CheckBox from '@components/forms/Checkbox';
import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import AboutUs from '@components/sections/register/AbousUs';
import InfoRegister from '@components/sections/register/Info';

import { classNames } from '@utils/classNames';
import { RegisterSection } from '@components/sections/register/RegisterSection';

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

const Register: NextPage = () => {
  const [indexSection, setSection] = useState<number>(0);
  const refForm = useRef(null);

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
        initialValues={{ checked: [] }}
        innerRef={refForm}
        onSubmit={() => {}}
      >
        <section className="p-8 min-h-[40vh]">
          {indexSection == 0 && <AboutUs />}
          {indexSection == 1 && <RegisterSection />}
        </section>
        <div className="w-full text-center">
          <Button className="w-auto" onClick={() => {}}>
            cancelar
          </Button>
        </div>
      </Form>
    </MainContainer>
  );
};

export default Register;
