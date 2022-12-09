import React, { useState } from 'react';

import CountrySelect from '@components/forms/CountrySelect';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import Select from '@components/forms/Select';

import { getBusinessInfo } from '@fetches/contact';

import useTranslate from '@hooks/useTranslate';

import useSWR from 'swr';

export const PayInfo = ({}) => {
  const { data, mutate: refeatchUser } = useSWR(
    'page-settings',
    getBusinessInfo
  );

  const arr = Object.keys(data.bank_detail).reduce(function (res, v) {
    return res.concat(data.bank_detail[v]);
  }, []);

  const bankDetailOption = { value: arr.join(' - '), text: arr.join(' - ') };
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
        <div className="flex flex-col gap-y-10">
          <div>
            <div className="bg-primary py-4 px-10 text-white capitalize texx-xl font-bold">
              {t('Banco de origen')}
            </div>
            <Field name="user.payment_info.source_bank" />
            <ErrorMsg name="user.payment_info.source_bank" />
          </div>
          <div>
            <div className="bg-primary py-4 px-10 text-white capitalize font-bold">
              {t('País donde reside la cuenta del banco de origen')}
            </div>
            <CountrySelect
              name="user.payment_info.country.name"
              notitle
              className="text-gray-600 w-full text-sm py-3"
            />
            <ErrorMsg name="user.payment_info.country" />
          </div>
        </div>
        <div>
          <div className="h-fit bg-primary py-4 px-10 text-white capitalize font-bold">
            {t('Banco destino')}
          </div>
          <Select
            name="user.payment_info.target_bank"
            choices={[bankDetailOption]}
            placeholder={t('--Selecciona banco destino--')}
          />
          <ErrorMsg name="user.payment_info.target_bank" />
        </div>
      </div>
      <section className="grid md:grid-cols-2 md:gap-x-10 mt-10">
        <div className="border border-darkprimary p-6">
          <h3 className="text-red font-bold text-lg">
            {t('Sugerencia para realizar sus pagos')}
          </h3>
          <p>
            {t(
              'Se recomienda que inicie sesión en el portal Web de la empresa, para que los datos que ha proporcionado, puedan ser utilizados, para facilitarle, el proceso de notificación de pago de su publicación.'
            )}
          </p>
          <p>
            {t(
              'De lo contrario, deberá llenar la información solicitada, en el portal Web de la empresa, y en el portal de notificación de pagos.'
            )}
          </p>
        </div>
        <div className="border border-darkprimary p-6">
          <h3 className="text-red font-bold text-lg">
            {t('Horario de atención al público')}
          </h3>
          <p className="font-bold">{t('Lunes a Viernes')}</p>
          <p>{t('De 8.00am a 12.00m')}</p>
          <p>{t('y de 1:00pm a 5:00pm')}</p>
          <h3 className="text-red font-bold text-lg capitalize mt-4">
            {t('teléfonos')}:
          </h3>
          <p>{data.phone}</p>
          <p>{data.local_phone}</p>
          <h3 className="text-red font-bold text-lg">
            Email:{' '}
            <span className="text-black text-base font-normal">
              {data.email}
            </span>
          </h3>
        </div>
        <div className="border border-darkprimary p-6">
          <h3 className="text-red font-bold text-lg">
            {t('Pasos para notificar su pago')}
          </h3>
          <ol className="list-decimal">
            <li>
              {t(
                '- Cuando usted se registra, el portal le genera el código de cliente, que ve en pantalla, y que le será enviado a su correo, junto con sus datos de acceso'
              )}
            </li>
            <li>
              {t(
                '- Luego utilice el código proporcionado, y acceda al sistema de notificación de pagos de la empresa, haciendo clic aquí:'
              )}
              <span className="underline cursor-pointer text-blue-600">
                {t('notificarPagos')}
              </span>
            </li>
            <li>
              {t(
                '- Introduzca el código del cliente, en el sistema de notificación de pago'
              )}
            </li>
            <li>
              {t('- Presione el botón ')}
              <span className="font-bold">{t('Notificar pago')}</span>,{' '}
              {t('en el sistema de notificación de pagos')}
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default PayInfo;
