import React, { useState } from 'react';

import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Select from '@components/forms/Select';
import BaseModal from '@components/modals/BaseModal';

import useTranslate from '@hooks/useTranslate';

import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CountrySelect from '../../../forms/CountrySelect';
import PhoneButtonSet from '../../../layout/PhoneButtonSet';

export const NaturalUser = ({}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const t = useTranslate();
  return (
    <div className="flex justify-center">
      <div className="md:w-3/5 flex flex-col gap-y-4 justify-center">
        <p>{t('Ingrese los datos solicitados a continuación:')}</p>
        <div className="flex items-center">
          <label htmlFor="first_name" className="w-2/4 capitalize">
            {t('nombre')}
          </label>
          <Field name="first_name" id="first_name" />
        </div>
        <ErrorMsg name="first_name" />
        <div className="flex items-center">
          <label htmlFor="last_name" className="w-2/4 capitalize">
            {t('apellido')}
          </label>
          <Field name="last_name" id="last_name" />
        </div>
        <ErrorMsg name="last_name" />
        <div className="flex items-center">
          <label htmlFor="document_id" className="w-2/4">
            {t('Documento de identidad')}
          </label>
          <Field name="document_id" id="document_id" />
        </div>
        <ErrorMsg name="document_id" />
        <div className="flex items-center">
          <label htmlFor="email" className="w-2/4">
            {t('Correo electrónico')}
          </label>
          <Field name="email" id="email" />
        </div>
        <ErrorMsg name="email" />
        <div className="flex items-center">
          <label htmlFor="email" className="w-2/4 capitalize">
            {t('país')}
          </label>
          <CountrySelect notitle name="country" />
        </div>
        <ErrorMsg name="country" />
        <div className="flex">
          <label htmlFor="phone" className="w-2/4 capitalize">
            {t('teléfonos')}
          </label>
          <PhoneButtonSet phoneName="phone" localPhoneName="local_phone" />
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
        <p>
          Los números de teléfono deben tener el formato estándar
          internacionalizado E.164. Los números con formato E.164 pueden tener
          un máximo de 15 dígitos y por lo general se escriben como sigue:
          [+][código de país][número del suscriptor incluido el código de área].
        </p>
      </BaseModal>
    </div>
  );
};

export default NaturalUser;
