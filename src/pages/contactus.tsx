import { useState } from 'react';

import type { NextPage } from 'next';

import LoaderSpinner from '@components/LoaderSpinner';
import MainContainer from '@components/layout/MainContainer';
import DocumentsModal from '@components/modals/DocumentsModal';
import ContactForm from '@components/sections/contactus/ContactForm';

import { getBusinessInfo } from '@fetches/contact';

import Questions from '@data/Questions';
import TermsAndConditions from '@data/TermsAndConditions';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSWR from 'swr';

const ContactUs: NextPage = () => {
  const [load, setLoading] = useState<boolean>(false);
  const { data } = useSWR('contact', () => getBusinessInfo());
  const [questionModal, setQuestionModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);

  return (
    <>
      {load ? <LoaderSpinner /> : null}
      <MainContainer
        activate="contact-us"
        containerClassName="flex flex-col grow"
      >
        <div className="h-full flex">
          <div className="w-2/4 h-full flex flex-col justify-between items">
            <div>
              <h4 className="font-bold">Teléfonos</h4>
              <p>{data?.local_phone}</p>
              <p>{data?.phone}</p>
            </div>
            <div>
              <h4 className="font-bold">Atención al público</h4>
              <p className="flex">
                <span className="w-48 font-bold">Lunes a Viernes: </span>De 8 am
                a 12 m. Y de 1pm a 5pm
              </p>
              <p className="flex">
                <span className="w-48 font-bold">Sábados y Domingos: </span>De 8
                am a 12 m. Y de 1pm a 5pm
              </p>
            </div>
            <div>
              <h4 className="font-bold">Correo electrónico</h4>
              <p>Envíanos tus preguntas o comentarios a {data?.email}</p>
            </div>
            <div>
              <h4 className="font-bold">Enlaces de interés</h4>
              <ul>
                <li className="underline text-blue-600 cursor-pointer capitalize">
                  <p onClick={() => setQuestionModal(true)}>
                    preguntas frecuentes
                  </p>
                </li>
                <li className="underline text-blue-600 cursor-pointer capitalize">
                  <p onClick={() => setTermsModal(true)}>
                    términos de servicio
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex">
              <h4 className="font-bold">Síguenos</h4>
              <ul className="list-none">
                <li className="flex items-center mb-2">
                  <FontAwesomeIcon
                    className="text-primary mr-2 w-8 h-8"
                    icon={faFacebook as any}
                  />
                  Facebook
                </li>
                <li className="flex items-center mb-2">
                  <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                    <FontAwesomeIcon icon={faTwitter as any} size="lg" />
                  </div>
                  Twitter
                </li>
                <li className="flex items-center mb-2">
                  <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                    <FontAwesomeIcon icon={faYoutube as any} size="lg" />
                  </div>
                  Youtube
                </li>
                <li className="flex items-center mb-2">
                  <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                    <FontAwesomeIcon icon={faInstagram as any} size="lg" />
                  </div>
                  Instagram
                </li>
                <li className="flex items-center mb-2">
                  <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                    <FontAwesomeIcon icon={faLinkedinIn as any} size="lg" />
                  </div>
                  LinkedIn
                </li>
              </ul>
            </div>
          </div>
          <ContactForm setLoading={setLoading} />
        </div>
      </MainContainer>
      <DocumentsModal
        showModal={termsModal}
        setShowModal={setTermsModal}
        text={<TermsAndConditions />}
        title={'términos y condiciones'}
      />
      <DocumentsModal
        showModal={questionModal}
        setShowModal={setQuestionModal}
        text={<Questions />}
        title={'preguntas frecuentes'}
      />
    </>
  );
};

export default ContactUs;
