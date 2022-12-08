import React, { useState } from 'react';

import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Form from '@components/forms/Form';

import useTranslate from '@hooks/useTranslate';

export const PayInfo = ({}) => {
  const [userType, setUserType] = useState<string>('');

  const handleUser = (event: any) => {
    setUserType(event.target.value);
  };
  const t = useTranslate();
  return (
    <>
      <div className="bg-primary py-4 px-4 mx-auto w-fit text-white capitalize texx-xl font-bold">
        {t('Datos a utilizar, para facilitar las notificaciones de pago')}
      </div>
      <p className="m-4">
        {t(`Queremos ayudarte, facilitando el pago de la publicación de tu
        apartamento o casa , y para lo cual, te pedimos que proporciones los
        datos que consideras utilizar, para realizar tus transferencias o
        depósitos, especificados a continuación`)}
      </p>
      <div className="grid gap-x-10 justify-center md:grid-cols-2">
        <div>
          <div className="bg-primary py-4 px-10 text-white capitalize texx-xl font-bold">
            {t('Banco de origen')}
          </div>
          <Field name="user.payment_info.source_bank" />
          <ErrorMsg name="user.payment_info.source_bank" />
          <div className="bg-primary py-4 px-10 text-white capitalize texx-xl font-bold">
            {t('País donde reside la cuenta del banco de origen')}
          </div>
          <Field name="user.payment_info.country.name" />
          <ErrorMsg name="user.payment_info.country" />
        </div>
        <div>
          <div className="h-fit bg-primary py-4 px-10 text-white capitalize texx-xl font-bold">
            {t('Banco destino')}
          </div>
          <Field name="user.payment_info.target_bank" />
          <ErrorMsg name="user.payment_info.source_bank" />
        </div>
      </div>
    </>
  );
};

export default PayInfo;
