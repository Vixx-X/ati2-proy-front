import React from 'react';

import Button from '@components/layout/Button';
import Container from './Container';

interface ButtonSetProps {
  setShowModal: any;
}

export const ButtonSet = ({ setShowModal }: ButtonSetProps) => {
  return (
    <Container>
      <div className="flex justify-end gap-x-4">
        <Button
          className="w-auto rounded-t-md font-bold capitalize"
          onClick={() => setShowModal(true)}
        >
          iniciar sesión
        </Button>
        <Button className="w-auto rounded-t-md font-bold capitalize">
          registrarse
        </Button>
      </div>
    </Container>
  );
};

export default ButtonSet;
