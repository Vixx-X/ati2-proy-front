import React, { useEffect, useState } from 'react';

import LogInModal from '@components/modals/LogInModal';

import { SERVER_URLS } from '@config';

import ButtonSet from './ButtonSet';
import Container from './Container';
import Navbar from './Navbar';

interface HeaderProps {
  activate?: string;
}

export const Header = ({ activate }: HeaderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const options = [
    {
      link: SERVER_URLS.URL_LANDING,
      text: 'inicio',
    },
    {
      text: 'vehículo',
      options: [
        { link: SERVER_URLS.URL_CREATE_VEHICLE, text: 'publicar' },
        { link: SERVER_URLS.URL_VEHICLES, text: 'ver publicaciones' },
        { link: SERVER_URLS.URL_SEARCH_VEHICLE, text: 'buscar' },
        /* { link: SERVER_URLS.URL_EDIT_VEHICLE, text: 'modificar' }, */
      ],
    },
    { link: SERVER_URLS.URL_SERVICES, text: 'servicios' },
    { link: SERVER_URLS.URL_EMPLOYEE, text: 'empleos' },
    { link: SERVER_URLS.URL_CONTACT_US, text: 'contáctenos' },
    { text: 'idioma' },
  ];

  return (
    <div>
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
