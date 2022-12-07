import React, { useEffect, useState } from 'react';

import LogInModal from '@components/modals/LogInModal';

import { SERVER_URLS } from '@config';

import ButtonSet from './ButtonSet';
import Container from './Container';
import Navbar from './Navbar';

interface HeaderProps {
  activate?: string | Array<string>;
}

export const Header = ({ activate }: HeaderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const options = [
    {
      link: SERVER_URLS.URL_LANDING,
      text: 'inicio',
      activate: 'home',
    },
    {
      text: 'vehículo',
      activate: 'vehicle',
      options: [
        {
          link: SERVER_URLS.URL_CREATE_VEHICLE,
          text: 'publicar',
          activate: 'create-post',
        },
        {
          link: SERVER_URLS.URL_VEHICLES,
          text: 'ver publicaciones',
          activate: 'view-posts',
        },
        {
          text: 'modificar',
          activate: 'edit-post',
        },
      ],
    },
    {
      link: SERVER_URLS.URL_CONTACT_US,
      text: 'contáctenos',
      activate: 'contact-us',
    },
    { text: 'idioma', activate: 'language' },
  ];

  return (
    <div className="fixed top-0 w-full">
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
