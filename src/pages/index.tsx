import { useState } from 'react';

import type { NextPage } from 'next';

import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import DocumentsModal from '@components/modals/DocumentsModal';
import HowPostSection from '@components/sections/home/searchSection/QuestionSection';
import SearchSection from '@components/sections/home/searchSection/SearchSection';

import { SERVER_URLS } from '@config';

import Questions from '@data/Questions';
import useTranslate from '@hooks/useTranslate';

const { URL_VEHICLES } = SERVER_URLS;

const Landing: NextPage = () => {
  const [section, setSection] = useState<string>();
  const [questionModal, setQuestionModal] = useState(false);
  const t = useTranslate();

  return (
    <>
      <MainContainer activate="home">
        <h2 className="font-bold text-lg mt-10 text-center">
          {t('Opciones de búsqueda')}
        </h2>
        <ol className="list-decimal">
          <li className="text-blue-600">
            {t('- Haz click en la opción de tu preferencia')}
          </li>
        </ol>
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center py-10">
          <Button
            className="w-60"
            onClick={() => {
              if (section === 'search') {
                setSection('');
              } else {
                setSection('search');
              }
            }}
          >
            {t('Buscar vehículos')}
          </Button>
          <Button
            className="w-60"
            onClick={() => {
              if (section === 'post') {
                setSection('');
              } else {
                setSection('post');
              }
            }}
          >
            {t('Vender o alquilar vehículo')}
          </Button>
        </div>
        {section === 'search' ? <SearchSection /> : null}
        {section === 'post' ? <HowPostSection /> : null}
        <h2 className="font-bold text-lg mt-10">{t('Preguntas frecuentes')}</h2>
        <p>
          {t('Haga click aquí ')}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={() => setQuestionModal(true)}
          >
            {t('Ver preguntas frecuentes')}
          </span>
        </p>
      </MainContainer>
      <DocumentsModal
        showModal={questionModal}
        setShowModal={setQuestionModal}
        text={<Questions />}
        title={'preguntas frecuentes'}
      />
    </>
  );
};

export default Landing;
