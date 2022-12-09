import { useMemo, useState } from 'react';

import LogInModal from '@components/modals/LogInModal';

import { SERVER_URLS } from '@config';

import useTranslate from '@hooks/useTranslate';

import userStore from '@stores/UserStore';

import ButtonSet from './ButtonSet';
import Container from './Container';
import Navbar from './Navbar';

interface HeaderProps {
  activate?: string | Array<string>;
}

export const Header = ({ activate }: HeaderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const setLang = userStore((state) => state.setLang);
  const t = useTranslate();

  const options = useMemo(
    () => [
      {
        link: SERVER_URLS.URL_LANDING,
        text: t('inicio'),
        activate: 'home',
      },
      {
        text: t('vehículo'),
        activate: 'vehicle',
        options: [
          {
            link: SERVER_URLS.URL_CREATE_VEHICLE,
            text: t('publicar'),
            activate: 'create-post',
          },
          {
            link: SERVER_URLS.URL_VEHICLES,
            text: t('ver publicaciones'),
            activate: 'view-posts',
          },
          {
            text: t('modificar'),
            activate: 'edit-post',
          },
        ],
      },
      {
        link: SERVER_URLS.URL_CONTACT_US,
        text: t('contáctenos'),
        activate: 'contact-us',
      },
      {
        text: t('idioma'),
        activate: 'language',
        options: [
          {
            text: 'es',
            activate: 'ES',
            onClick: () => setLang('ES'),
          },
          {
            text: 'en',
            activate: 'EN',
            onClick: () => setLang('EN'),
          },
        ],
      },
    ],
    [t, setLang]
  );

  return (
    <div className="fixed top-0 w-full z-50">
      <ButtonSet setShowModal={setShowModal} />
      <header className="w-100 bg-primary relative">
        <Container>
          <ul className="px-0 mx-0">
            <Navbar
              options={options}
              visible={true}
              top={-56}
              activatePage={activate}
            />
          </ul>
        </Container>
      </header>
      <LogInModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Header;
