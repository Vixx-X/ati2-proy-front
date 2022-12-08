import React, { useEffect, useState } from 'react';

import Field from '@components/forms/Field';
import RadioGroup from '@components/forms/RadioGroup';

import { useFormikContext } from 'formik';
import useTranslate from '@hooks/useTranslate';

const NotificationSection = ({ userType, setUserType }: any) => {
  const [sections, setSections] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const { values }: any = useFormikContext();

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
      value: 'other',
      text: t('Mensaje de texto'),
    },
    {
      value: 'other',
      text: t('Otro(s)'),
    },
    {
      value: 'other',
      text: t('Mensaje privado en mi cuenta de Facebook'),
    },
  ];
  return (
    <div className="flex flex-col justify-center  mx-auto">
      <div className="flex flex-col gap-y-4 justify-center">
        <p className="font-bold">
          {(`¿Con que frecuencia le gustaría mantenerse informado acerca de los
          servicios que ofrece la empresa?`)}
        </p>
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
                placeholder={t("Ej:9 días")}
              />
              <p className="w-72 text-sm opacity-40 mt-4">
                {t(`* Importante colocar número seguido del intervalo de tiempo
                después de que se quiera recibir "días"
                "semanas" "meses"`)}
              </p>
            </div>
          }
        />
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
                  value != 'socials' && sections[index]
                    ? 'visible'
                    : 'invisible'
                }`}
              >
                <Field
                  name={`user.notification_setting.notification_method.${value}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationSection;
