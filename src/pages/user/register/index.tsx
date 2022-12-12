import { useRef, useState } from 'react';

import type { NextPage } from 'next';

import Form from '@components/forms/Form';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import AboutUs from '@components/sections/register/AbousUs';
import InfoRegister from '@components/sections/register/Info';
import LanguageSection from '@components/sections/register/LanguageSection';
import LoginSection from '@components/sections/register/LoginSection';
import NotificationSection from '@components/sections/register/NotificationSection';
import PayInfo from '@components/sections/register/PayInfo';
import {
  RegisterSection,
  UserType,
} from '@components/sections/register/RegisterSection';

import { postRegisterBusiness, postRegisterPerson } from '@fetches/user';

import useTranslate from '@hooks/useTranslate';

import authStore from '@stores/AuthStore';

import { classNames } from '@utils/classNames';

import { FormikValues } from 'formik';
import { Business, NaturalPerson } from 'user';
import Alert from '@utils/alert';

const initialValues1: any = {
  user: {
    password1: '',
    password2: '',
    email: '',
    language: 'ES',
    notification_setting: {
      active: false,
      frecuency: '',
      notification_method: {
        email: '',
        socials: [
          {
            social: '',
            value: '',
          },
        ],
        sms: '',
        other: '',
        facebook: '',
      },
    },
    about_website: {
      web: false,
      socials: [],
      friends: false,
      other: '',
    },
    payment_info: {
      source_bank: '',
      target_bank: '',
      country: '',
    },
  },
  name: '',
  tax_id: '',
  address: {
    line1: '',
    line2: '',
    // city: 1,
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
  country: '',
  filter: {
    address: {
      country: '',
    },
  },
  section: {
    socials: false,
    other: false,
    typeUser: '',
    notification: {},
  },
};

interface filtersType {
  filter: {
    address: {
      state?: any;
      country: any;
    };
  };
}

const initialValues: NaturalPerson | (Business & filtersType) = {
  user: {
    password1: 'abcd1234..',
    password2: 'abcd1234..',
    email: 'empresita@gmail.com',
    language: 'ES',
    notification_setting: {
      active: false,
      frecuency: '1 vez a la semana',
      notification_method: {
        email: 'gabyustariz@hotmail.com',
        socials: [
          {
            social: 'Facebook',
            value: '@gabyustariz',
          },
        ],
        sms: '+584241315948',
        other: '',
        facebook: '',
      },
    },
    about_website: {
      web: false,
      socials: [],
      friends: false,
      other: '',
    },
    payment_info: {
      source_bank: 'Banesco Panama',
      target_bank: 'Mercantil Panama',
      country: 'pa',
    },
  },
  name: 'Company 2',
  tax_id: 'J8896882',
  address: {
    line1: 'los chaguaramos',
    line2: 'av san francisco',
    city: 1,
  },
  representant: {
    first_name: 'Gabriela',
    last_name: 'Ustariz',
    email: 'gabyustariz@hotmail.com',
    phone: '+584241315948',
    local_phone: '+582121315948',
  },
  first_name: 'Pepita',
  last_name: 'Perez',
  document_id: 'V6677885',
  email: 'pepitaperez@gmail.com',
  phone: '+58123123123',
  local_phone: '+582123332244',
  country: '',
};

const Register: NextPage = () => {
  const [indexSection, setSection] = useState<number>(0);
  const refForm = useRef(null);
  const [load, setLoading] = useState<boolean>(false);
  const [userType, setUserType] = useState<UserType>(UserType.NATURAL);

  const login = authStore((state: any) => state.login);

  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    setLoading(true);
    const {
      user,
      representant,
      name,
      tax_id,
      address,
      filter,
      section,
      ...props
    } = values;
    const frecuency =
      user?.notification_setting.frecuency === 'other' &&
      user?.notification_setting.frecuency_other
        ? user?.notification_setting.frecuency_other
        : user?.notification_setting.frecuency;
    const commonUser = {
      user: {
        ...user,
        username: user?.email.split('@')[0],
        notification_setting: {
          notification_method: user?.notification_setting?.notification_method,
          frecuency: frecuency,
          active: user?.notification_setting?.active,
        },
      },
    };
    try {
      if (section?.typeUser === UserType.BUSINESS) {
        await postRegisterBusiness({
          ...commonUser,
          representant,
          name,
          tax_id,
          address,
        });
      } else {
        await postRegisterPerson({
          ...commonUser,
          ...props,
        });
      }
      Alert('GREEN', t('Usuario creado exitosamente'));
      setStatus({});
      await login(user.email, user.password1);
    } catch (exception: any) {
      Alert('RED', t('Ocurrió un error revise el formulario'));
      setStatus(exception.data.detail);
      setLoading(false);
    }
  };

  const t = useTranslate();
  const registerSections = [
    {
      index: 0,
      text: t('¿Cómo supo de nosotros?'),
    },
    {
      index: 1,
      text: t('Registrar usuario'),
    },
    {
      index: 2,
      text: t('Idioma del adiestamiento'),
    },
    {
      index: 3,
      text: t('Datos de inicio de sesión'),
    },
    {
      index: 4,
      text: t('frecuencia e información a recibir'),
    },
    {
      index: 5,
      text: t('datos de facturación'),
    },
  ];

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
      <section className="grid gap-4 md:grid-cols-custom items-center">
        <Button
          bgColor="bg-red"
          className={`h-fit ${indexSection <= 0 ? 'invisible' : 'visible'}`}
          onClick={() => setSection(indexSection - 1)}
        >
          {t('< Atrás')}
        </Button>
        <p className="font-bold text-white text-center bg-primary text-xl py-4 rounded-md uppercase">
          {registerSections[indexSection].text}
        </p>
        <Button
          bgColor="bg-red"
          className={`h-fit ${indexSection >= 5 ? 'invisible' : 'visible'}`}
          onClick={() => setSection(indexSection + 1)}
        >
          {t('Continuar >')}
        </Button>
      </section>
      <Form
        initialValues={initialValues1}
        innerRef={refForm}
        onSubmit={handleSubmit}
      >
        <section className="p-8 min-h-[35vh]">
          {indexSection == 0 && <AboutUs />}
          {indexSection == 1 && (
            <RegisterSection userType={userType} setUserType={setUserType} />
          )}
          {indexSection == 2 && <LanguageSection />}
          {indexSection == 3 && <LoginSection />}
          {indexSection == 4 && (
            <NotificationSection
              userType={userType}
              setUserType={setUserType}
            />
          )}
          {indexSection == 5 && <PayInfo />}
        </section>
        <div className="w-full justify-center gap-x-10 flex">
          <Button className="w-auto" onClick={() => {}}>
            cancelar
          </Button>
          {indexSection == 5 && (
            <Button type="submit" className="w-auto">
              registrar
            </Button>
          )}
        </div>
      </Form>
    </MainContainer>
  );
};

export default Register;
