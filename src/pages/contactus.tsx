import type { NextPage } from 'next';

import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import TextArea from '@components/forms/TextArea';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';

import authStore from '@stores/AuthStore';
import userStore from '@stores/UserStore';

import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormikHelpers, FormikValues } from 'formik';

interface ContactUsForm {
  target: string;
  name: string;
  reason: string;
  body?: string;
}

const ContactUs: NextPage = () => {
  // const logout = authStore((state: any) => state.logout);
  // const user = userStore((state: any) => state.user);
  return (
    <MainContainer
      activate="contáctenos"
      containerClassName="flex flex-col grow"
    >
      <div className="h-full flex">
        <div className="w-2/4 h-full flex flex-col justify-between items">
          <div>
            <h4 className="font-bold">Teléfonos</h4>
            <p>+58 (0212)-362-82-68</p>
            <p>+58+0414-389-74-44</p>
          </div>
          <div>
            <h4 className="font-bold">Atención al público</h4>
            <p className="flex">
              <span className="w-48 font-bold">Lunes a Viernes: </span>De 8 am a
              12 m. Y de 1pm a 5pm
            </p>
            <p className="flex">
              <span className="w-48 font-bold">Sábados y Domingos: </span>De 8
              am a 12 m. Y de 1pm a 5pm
            </p>
          </div>
          <div>
            <h4 className="font-bold">Correo electrónico</h4>
            <p>Envíanos tus preguntas o comentarios a nirvana01@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold">Enlaces de interés</h4>
            <ul>
              <li className="underline text-blue-600 cursor-pointer capitalize">
                <p>preguntas frecuentes</p>
              </li>
              <li className="underline text-blue-600 cursor-pointer capitalize">
                <p>términos de servicio</p>
              </li>
            </ul>
          </div>
          <div className="flex">
            <h4 className="font-bold">Síguenos</h4>
            <ul className="list-none">
              <li className="flex items-center mb-2">
                <FontAwesomeIcon
                  className="text-primary mr-2 w-8 h-8"
                  icon={faFacebook}
                />
                Facebook
              </li>
              <li className="flex items-center mb-2">
                <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </div>
                Twitter
              </li>
              <li className="flex items-center mb-2">
                <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </div>
                Youtube
              </li>
              <li className="flex items-center mb-2">
                <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </div>
                Instagram
              </li>
              <li className="flex items-center mb-2">
                <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </div>
                LinkedIn
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/4 border-2 border-black p-8 h-fit">
          <h2 className="font-bold text-lg text-center mb-4">
            Formulario de contacto
          </h2>
          <Form
            initialValues={{
              target: '',
              name: '',
              reason: '',
              body: '',
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <div className="py-2 border-b border-gray mb-4 flex">
              <label htmlFor="target" className="capitalize mr-2">
                para:
              </label>
              <Field
                className="px-2 border-none grow"
                name="target"
                id="target"
              />
            </div>
            <div className="py-2 border-b border-gray mb-4 flex">
              <label htmlFor="name" className="capitalize mr-2">
                Nombre y apellido:
              </label>
              <Field className="px-2 border-none grow" name="name" id="name" />
            </div>
            <div className="py-2 border-b border-gray mb-4 flex">
              <label htmlFor="reason" className="capitalize mr-2">
                Asunto:
              </label>
              <Field
                className="px-2 border-none grow"
                name="reason"
                id="reason"
              />
            </div>
            <TextArea className="w-full h-56 mb-8 resize-none" name="body" />
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
      </div>
    </MainContainer>
  );
};

export default ContactUs;
