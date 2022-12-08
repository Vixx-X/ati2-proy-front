import React, { useState } from 'react';

import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Select from '@components/forms/Select';
import BaseModal from '@components/modals/BaseModal';

import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslate from '@hooks/useTranslate';

export const NaturalUser = ({}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const t = useTranslate();
  return (
    <div className="flex justify-center">
      <div className="md:w-3/5 flex flex-col gap-y-4 justify-center">
        <p>{t('Ingrese los datos solicitados a continuación:')}</p>
        <div className="flex items-center">
          <label htmlFor="first_name" className="w-2/4 capitalize">
            {t('Nombre')}
          </label>
          <Field name="first_name" id="first_name" />
          <ErrorMsg name="first_name" />
        </div>
        <div className="flex items-center">
          <label htmlFor="last_name" className="w-2/4 capitalize">
            {t('Apellido')}
          </label>
          <Field name="last_name" id="last_name" />
          <ErrorMsg name="last_name" />
        </div>
        <div className="flex items-center">
          <label htmlFor="document_id" className="w-2/4 capitalize">
            {t('Documento de identidad')}
          </label>
          <Field name="document_id" id="document_id" />
          <ErrorMsg name="document_id" />
        </div>
        <div className="flex items-center">
          <label htmlFor="email" className="w-2/4 capitalize">
            {t('Correo electrónico')}
          </label>
          <Field name="email" id="email" />
          <ErrorMsg name="email" />
        </div>
        <div className="flex items-center">
          <label htmlFor="country" className="w-2/4 capitalize">
            {t('País')}
          </label>
          <Select choices={[]} name="country" placeholder={t("Select a country")} />
          <ErrorMsg name="country" />
        </div>
        <div className="flex items-center">
          <label htmlFor="phone" className="w-2/4 capitalize">
            {t('Teléfono')}
          </label>
        </div>
      </div>
      <div className="md:ml-16 mt-4">
        <div className="flex items-center">
          <FontAwesomeIcon
            className="text-red mr-2"
            icon={faExclamationCircle}
          />
          <div
            className="underline text-blue-600 cursor-pointer capitalize"
            onClick={() => setShowModal(true)}
          >
            <p>{t('Teléfono con formatos válidos')}</p>
            <p>{t('Haz click aqui para ver los formatos permitidos')}</p>
          </div>
        </div>
      </div>
      <BaseModal
        showModal={showModal}
        title="valid formats"
        setShowModal={setShowModal}
      >
        <p>Holi</p>
      </BaseModal>
    </div>
  );
};

export default NaturalUser;
