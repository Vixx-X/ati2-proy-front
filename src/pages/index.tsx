import type { NextPage } from 'next';
import Link from 'next/link';

import BaseModal from '@components/modals';

import { SERVER_URLS } from '@config';

const Landing: NextPage = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <BaseModal title="PRUEBA" buttonText="BOTON MODAL">
          <p>PRUEBA DE MI PODEROSO Y CORPULEO MODAL</p>
        </BaseModal>
        <Link href={SERVER_URLS.URL_LOGIN}>
          <a className="bg-primary hover:bg-blue-700 text-light font-bold py-2 px-4 cursor-pointer rounded-full w-full uppercase text-center transition">
            Iniciar Sesión
          </a>
        </Link>
        <Link href={SERVER_URLS.URL_REGISTER}>
          <a className="bg-light hover:bg-slate-50  text-dark font-bold rounded-full py-2 px-4 cursor-pointer uppercase text-center transition">
            Regístrate
          </a>
        </Link>
      </div>
    </>
  );
};

export default Landing;
