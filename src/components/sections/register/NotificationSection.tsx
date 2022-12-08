import React, { useEffect, useMemo, useState } from 'react';

import CheckBox from '@components/forms/Checkbox';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import RadioGroup from '@components/forms/RadioGroup';
import Select from '@components/forms/Select';

import { getServices } from '@fetches/contact';
import { getSocialMedias } from '@fetches/socials';

import useTranslate from '@hooks/useTranslate';

import { useFormikContext } from 'formik';
import useSWR from 'swr';

const NotificationSection = ({ userType, setUserType }: any) => {
  const [sections, setSections] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const services = useSWR('services', getServices);
  const servicesOptions = services.data?.results.map(({ name }: any) => {
    return { text: name, value: name };
  });

  const { values }: any = useFormikContext();
  const { data } = useSWR('socialMedia', () => getSocialMedias());
  const socialsMediaOptions = useMemo(
    () =>
      data?.results.map((item: any) => ({
        text: item.name,
        value: item.name,
      })),
    [data]
  );

  const handleSection = (event: any, index: number) => {
    const tempArray = [...sections];
    tempArray[index] = event.target.checked;
    setSections(tempArray);
  };

  const t = useTranslate();
  const choicesNotificationFrecuency = [
    {
      value: '1w',
      text: t('1 vez a la semana'),
    },
    {
      value: '2w',
      text: t('cada 2 semanas'),
    },
    {
      value: '1m',
      text: t('1 vez al mes'),
    },
    {
      value: 'other',
      text: t('otra'),
    },
  ];

  const choicesNotificationMethod = [
    {
      value: 'email',
      text: t('Correo electrónico según sus preferencias'),
    },
    {
      value: 'socials',
      text: t('Redes sociales de la empresa'),
    },
    {
      value: 'sms',
      text: t('Mensaje de texto'),
    },
    {
      value: 'other',
      text: t('Otro(s)'),
    },
    {
      value: 'facebook',
      text: t('Mensaje privado en mi cuenta de Facebook'),
    },
  ];
  return (
    <div className="flex flex-col justify-center  mx-auto">
      <div className="flex flex-col gap-y-4 justify-center">
        <p className="font-bold">
          {`¿Con que frecuencia le gustaría mantenerse informado acerca de los
          servicios que ofrece la empresa?`}
        </p>
        <ErrorMsg name="user.notification_setting.frecuency" />
        <RadioGroup
          name="user.notification_setting.frecuency"
          className="flex justify-between"
          choices={choicesNotificationFrecuency}
          moreElements={
            <div
              className={`w-fit ${
                values.user.notification_setting.frecuency == 'other'
                  ? 'visible'
                  : 'invisible'
              }`}
            >
              <Field
                name="user.notification_setting.frecuency_other"
                placeholder={t('Ej:9 días')}
              />
              <p className="w-72 text-sm opacity-40 mt-4">
                {t(`* Importante colocar número seguido del intervalo de tiempo
                después de que se quiera recibir "días"
                "semanas" "meses"`)}
              </p>
            </div>
          }
        />
        <div className="flex justify-between">
          <p className="font-bold">{t('Servicios de interés')}</p>
          <p>{t('Puede seleccionar más de 1 categoría, si lo desea')}</p>
          <CheckBox name="user.services" choices={servicesOptions} />
        </div>

        <p className="font-bold">
          {t('Medio(s) por los que le gustaría ser informado')}
        </p>
        <div className="flex flex-col gap-y-8">
          {choicesNotificationMethod.map(({ text, value }, index) => (
            <div className="flex" key={`${value}-${index}`}>
              <div className="w-2/4">
                <input
                  type="checkbox"
                  value={value}
                  onChange={(event) => handleSection(event, index)}
                />
                <label className="ml-2">{text}</label>
              </div>
              <div
                className={`w-full ${
                  value != 'socials' && sections[index] ? '' : 'hidden'
                }`}
              >
                <Field
                  name={`user.notification_setting.notification_method.${value}`}
                />
              </div>
              <div
                className={`w-full ${
                  value === 'socials' && sections[index]
                    ? 'flex gap-6'
                    : 'hidden'
                }`}
              >
                <div>
                  <label>Seleccione Red Social</label>
                  <Select
                    choices={socialsMediaOptions}
                    placeholder="Seleccione redes sociales"
                    name={`user.notification_setting.notification_method.${value}[0].social`}
                  />
                </div>
                <div>
                  <label>Indique Nombre de Usuario</label>
                  <Field
                    name={`user.notification_setting.notification_method.${value}[0].value`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationSection;
