import { useState } from 'react';

import type { NextPage } from 'next';

import Page from '@components/Page';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import DocumentsModal from '@components/modals/DocumentsModal';
import HowPostSection from '@components/sections/home/searchSection/QuestionSection';
import SearchSection from '@components/sections/home/searchSection/SearchSection';

import Questions from '@data/Questions';

const Landing: NextPage = () => {
  const [section, setSection] = useState<string>();
  const [questionModal, setQuestionModal] = useState(false);

  return (
    <Page>
      <MainContainer activate="home">
        <h2 className="font-bold text-lg mt-10 text-center">
          Opciones de búsqueda
        </h2>
        <ol className="list-decimal">
          <li className="text-blue-600">
            - Haz click en la opción de tu preferencia
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
            Buscar vehículos
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
            Vender o alquilar vehículo
          </Button>
        </div>
        {section === 'search' ? <SearchSection /> : null}
        {section === 'post' ? <HowPostSection /> : null}
        <h2 className="font-bold text-lg mt-10">Preguntas frecuentes</h2>
        <p>
          Haga click aquí{' '}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={() => setQuestionModal(true)}
          >
            Ver preguntas frecuentes
          </span>
        </p>
      </MainContainer>
      <DocumentsModal
        showModal={questionModal}
        setShowModal={setQuestionModal}
        text={<Questions />}
        title={'preguntas frecuentes'}
      />
    </Page>
  );
};

export default Landing;
