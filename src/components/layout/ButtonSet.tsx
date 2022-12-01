import React from 'react';

import Button from '@components/layout/Button';

import { SERVER_URLS } from '@config';

import Container from './Container';

interface ButtonSetProps {
  setShowModal: any;
}

const { URL_REGISTER } = SERVER_URLS;

export const ButtonSet = ({ setShowModal }: ButtonSetProps) => {
  return (
    <Container>
      <div className="flex justify-end gap-x-4">
        <Button
          className="w-auto rounded-b-none"
          onClick={() => setShowModal(true)}
        >
          iniciar sesión
        </Button>
        <Button
          className="w-auto rounded-b-none"
          href={URL_REGISTER}
          anchorTag={true}
        >
          registrarse
        </Button>
      </div>
    </Container>
  );
};

export default ButtonSet;
