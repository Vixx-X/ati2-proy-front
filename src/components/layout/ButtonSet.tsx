import React, { useState } from 'react';

import Image from 'next/image';

import Button from '@components/layout/Button';

import { SERVER_URLS } from '@config';

import authStore from '@stores/AuthStore';
import userStore from '@stores/UserStore';

import Container from './Container';
import useTranslate from '@hooks/useTranslate';

interface ButtonSetProps {
  setShowModal: any;
}

const { URL_REGISTER } = SERVER_URLS;

export const ButtonSet = ({ setShowModal }: ButtonSetProps) => {
  const isAuth = authStore((state: any) => state.isAuth);
  const logout = authStore((state: any) => state.logout);
  const user = userStore((state: any) => state.user);
  const [open, setOpen] = useState(false);
  const t = useTranslate();
  return (
    <Container className="w-11/12">
      <div className="flex justify-end gap-x-4 h-12 bg-white">
        {!isAuth ? (
          <>
            <Button
              className="w-auto rounded-b-none"
              onClick={() => setShowModal(true)}
            >
              {t('iniciar sesión')}
            </Button>
            <Button
              className="w-auto rounded-b-none"
              href={URL_REGISTER}
              anchorTag={true}
            >
              {t('registrarse')}
            </Button>
          </>
        ) : (
          <>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="placeholder-user"
                className="w-12 h-12"
              />
            </div>
            <div className="font-bold">
              <p className="capitalize">{user?.username}</p>
              <p>{user?.email}</p>
            </div>
            <Button
              className="w-auto rounded-b-none"
              onClick={() => setOpen((prev) => !prev)}
            >
              {t('Usuario')}
            </Button>
            {open ? (
              <Button
                className="w-auto rounded-b-none"
                onClick={() => logout()}
              >
                {t('Cerrar sesión')}
              </Button>
            ) : null}
          </>
        )}
      </div>
    </Container>
  );
};

export default ButtonSet;
