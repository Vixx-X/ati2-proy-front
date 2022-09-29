import React, { useState } from 'react';

import Field from '@components/forms/Field';
import Form from '@components/forms/Form';

export const PayInfo = ({}) => {
  const [userType, setUserType] = useState<string>('');

  const handleUser = (event: any) => {
    setUserType(event.target.value);
  };
  return (
    <>
      <div className="bg-primary py-4 px-4 mx-auto w-fit text-white capitalize texx-xl font-bold">
        datos a utilizar, para facilitar las notificaciones de pago
      </div>
      <p className="m-4">
        Queremos ayudarte, facilitando el pago de la publicación de tu
        apartamento o casa , y para lo cual, te pedimos que proporciones los
        datos que consideras utilizar, para realizar tus transferencias o
        depósitos, especificados a continuación
      </p>
      <div className="grid gap-x-10 justify-center md:grid-cols-2">
        <div>
          <div className="bg-primary py-4 px-10 text-white capitalize texx-xl font-bold">
            banco origen
          </div>
          <Field name="user.payment_info.source_bank" />
          <div className="bg-primary py-4 px-10 text-white capitalize texx-xl font-bold">
            pais donde reside la cuenta del banco de origen
          </div>
          <Field name="user.payment_info.country_source" />
        </div>
        <div>
          <div className="h-fit bg-primary py-4 px-10 text-white capitalize texx-xl font-bold">
            banco destino
          </div>
          <Field name="user.payment_info.target_bank" />
        </div>
      </div>
    </>
  );
};

export default PayInfo;
