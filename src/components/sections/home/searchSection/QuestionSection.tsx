import { useState } from 'react';

import { useRouter } from 'next/router';

import Button from '@components/layout/Button';
import LogInModal from '@components/modals/LogInModal';

import { SERVER_URLS } from '@config';

const { URL_REGISTER } = SERVER_URLS;

const HowPostSection = ({}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h3 className="text-red text-lg font-bold mb-10">
        ¿Cómo publico mi vehículo con ustedes?
      </h3>
      <ol className="list-decimal">
        <li className="my-4 w-full lg:w-2/4 flex flex-wrap items-center justify-between">
          1. - Debes registrarte haciendo clic aquí:{' '}
          <Button
            anchorTag
            href={URL_REGISTER}
            className="w-40 inline-block text-center"
          >
            Registrarme
          </Button>
        </li>
        <li className="my-4 w-full lg:w-2/4 flex flex-wrap items-center justify-between">
          2. - Luego debes iniciar sesión, haciendo clic en:
          <Button onClick={() => setShowModal(true)} className="w-40">
            Iniciar Sesión
          </Button>
        </li>
        <li className="my-4 w-full md:w-2/4 flex flex-wrap items-center justify-between">
          <div>
            3. - Luego de iniciar sesión seleccionas la opción{' '}
            <span className="text-blue-600 underline capitalize">
              vehículos
            </span>{' '}
            <span className="text-blue-600 underline capitalize">Publicar</span>
          </div>
        </li>
        <li className="my-4 w-full flex flex-wrap items-center justify-between">
          4. - Luego colocas los datos solicitados, y luego presiona el botón
          "Publicar vehículo"
        </li>
        <li className="my-4 w-full flex flex-wrap items-center justify-between">
          5. - Luego revisaremos la publicación, si todo esta bien, te
          notificaremos que ya tu vehículo está disponible para que otros
          usuarios la puedan visualizar, en un plazo de 3 días hábiles como
          máximo.
        </li>
      </ol>
      <LogInModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default HowPostSection;
