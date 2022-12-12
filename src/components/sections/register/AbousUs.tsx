import React, { useMemo, useState } from 'react';

import CheckBox from '@components/forms/Checkbox';
import Field from '@components/forms/Field';

import { getSocialMedias } from '@fetches/socials';

import useTranslate from '@hooks/useTranslate';

import { useFormik, useFormikContext } from 'formik';
import useSWR from 'swr';

const optionsAboutUs = [
  {
    text: 'web portal of business',
    value: 0,
  },
  {
    text: 'social networks',
    value: 1,
  },
  {
    text: 'friends',
    value: 2,
  },
  {
    text: 'other',
    value: 3,
  },
];

export const AboutUs = ({}) => {
  const { data } = useSWR('socialMedia', () => getSocialMedias());
  const socialsMediaOptions = useMemo(
    () =>
      data?.results.map((item: any) => ({
        text: item.name,
        value: item.name,
      })),
    [data]
  );
  const { values } = useFormikContext();
  const vals: any = values;

  const t = useTranslate();
  return (
    <>
      <p>
        {t(
          'Por favor coméntenos, cómo se enteró de los servicios de la empresa'
        )}
      </p>
      <p>
        {t(`Es importante para nosotros, porque nos ayuda a mejorar el servicio que
        le ofrecemos`)}
      </p>
      <div className="grid md:grid-cols-4 mt-8">
        <CheckBox
          name="user.about_website.web"
          label={t('Portal web de la empresa')}
        />
        <div>
          <div className="flex">
            <CheckBox className="w-4 h-4" name="section.socials" />
            <label className="ml-2">{t('Redes sociales')}</label>
          </div>
          <div
            className={`${
              vals?.section?.socials
                ? 'visible'
                : 'hidden md:block md:invisible'
            }`}
          >
            <CheckBox
              className="my-2 grid lg:grid-cols-2 gap-1"
              name="user.about_website.socials"
              choices={socialsMediaOptions}
            />
          </div>
        </div>
        <CheckBox name="user.about_website.friends" label={t('Amigos')} />
        <div>
          <div className="flex">
            <CheckBox className="w-4 h-4" name="section.other" />
            <label className="ml-2">{t('Otro')}</label>
          </div>
          <div
            className={`text-center ${
              vals?.section?.other ? 'visible' : 'invisible'
            }`}
          >
            <Field name="user.about_website.other" styles="mt-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
