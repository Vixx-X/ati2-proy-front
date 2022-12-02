import React, { useEffect, useState } from 'react';

import LogInModal from '@components/modals/LogInModal';

import { SERVER_URLS } from '@config';

import ButtonSet from './ButtonSet';
import Container from './Container';
import Navbar from './Navbar';

interface HeaderProps {
  activate?: string;
}

const {
  URL_CONTACT_US,
  URL_EMPLOYEE,
  URL_SERVICES,
  URL_VEHICLES,
  URL_EDIT_VEHICLE,
  URL_SEARCH_VEHICLE,
  URL_LANDING,
} = SERVER_URLS;

export const Header = ({ activate }: HeaderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const options = [
    {
      link: URL_LANDING,
      text: 'inicio',
    },
    {
      text: 'vehículo',
      options: [
        { link: URL_EDIT_VEHICLE, text: 'publicar' },
        { link: URL_VEHICLES, text: 'ver publicaciones' },
        { link: URL_SEARCH_VEHICLE, text: 'buscar' },
        { link: URL_EDIT_VEHICLE, text: 'modificar' },
      ],
    },
    { link: URL_SERVICES, text: 'servicios' },
    { link: URL_EMPLOYEE, text: 'empleos' },
    { link: URL_CONTACT_US, text: 'contáctenos' },
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
