import { useState } from 'react';

import type { NextPage } from 'next';

import LoaderSpinner from '@components/LoaderSpinner';
import Page from '@components/Page';
import MainContainer from '@components/layout/MainContainer';
import DocumentsModal from '@components/modals/DocumentsModal';
import ContactForm from '@components/sections/contactus/ContactForm';

import pageStore from '@stores/PageStore';

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
import useTranslate from '@hooks/useTranslate';

const ContactUs: NextPage = () => {
  const [load, setLoading] = useState<boolean>(false);
  const phone = pageStore((state) => state.phone);
  const local_phone = pageStore((state) => state.local_phone);
  const email = pageStore((state) => state.email);
  const [questionModal, setQuestionModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);
  const t = useTranslate();

  return (
    <Page>
      <>
        {load ? <LoaderSpinner /> : null}
        <MainContainer
          activate="contact-us"
          containerClassName="flex flex-col grow"
        >
          <div className="h-full flex">
            <div className="w-2/4 h-full flex flex-col justify-between items">
              <div>
                <h4 className="font-bold">{t('Teléfonos')}</h4>
                <p>{local_phone}</p>
                <p>{phone}</p>
              </div>
              <div>
                <h4 className="font-bold">{t('Atención al público')}</h4>
                <p className="flex">
                  <span className="w-48 font-bold">{t('Lunes a Viernes')}: </span>
                  {t('De 8 am a 12 m. Y de 1pm a 5pm')}
                </p>
                <p className="flex">
                  <span className="w-48 font-bold">{t('Sábados y Domingos')}: </span>
                  {t('De 8 am a 12 m. Y de 1pm a 5pm')}
                </p>
              </div>
              <div>
                <h4 className="font-bold">{t('Correo electrónico')}</h4>
                <p>{t('Envíanos tus preguntas o comentarios a ')} {email}</p>
              </div>
              <div>
                <h4 className="font-bold">{t('Enlaces de interés')}</h4>
                <ul>
                  <li className="underline text-blue-600 cursor-pointer capitalize">
                    <p onClick={() => setQuestionModal(true)}>
                      {t('preguntas frecuentes')}
                    </p>
                  </li>
                  <li className="underline text-blue-600 cursor-pointer capitalize">
                    <p onClick={() => setTermsModal(true)}>
                      {t('términos de servicio')}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex">
                <h4 className="font-bold">{t('Síguenos')}</h4>
                <ul className="list-none">
                  <li className="flex items-center mb-2">
                    <FontAwesomeIcon
                      className="text-primary mr-2 w-8 h-8"
                      icon={faFacebook as any}
                    />
                    {t('Facebook')}
                  </li>
                  <li className="flex items-center mb-2">
                    <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                      <FontAwesomeIcon icon={faTwitter as any} size="lg" />
                    </div>
                    {t('Twitter')}
                  </li>
                  <li className="flex items-center mb-2">
                    <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                      <FontAwesomeIcon icon={faYoutube as any} size="lg" />
                    </div>
                    {t('Youtube')}
                  </li>
                  <li className="flex items-center mb-2">
                    <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                      <FontAwesomeIcon icon={faInstagram as any} size="lg" />
                    </div>
                    {t('Instagram')}
                  </li>
                  <li className="flex items-center mb-2">
                    <div className="bg-primary rounded-full text-white w-8 h-8 flex items-center justify-center mr-2">
                      <FontAwesomeIcon icon={faLinkedinIn as any} size="lg" />
                    </div>
                    {t('LinkedIn')}
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
          title={t('términos y condiciones')}
        />
        <DocumentsModal
          showModal={questionModal}
          setShowModal={setQuestionModal}
          text={<Questions />}
          title={t('preguntas frecuentes')}
        />
      </>
    </Page>
  );
};

export default ContactUs;
