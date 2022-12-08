import React, { useState } from 'react';

import CheckBox from '@components/forms/Checkbox';
import Field from '@components/forms/Field';
import useTranslate from '@hooks/useTranslate';

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
  const [socialSection, setSocial] = useState<boolean>(false);
  const [otherSection, setOther] = useState<boolean>(false);

  const t = useTranslate();
  return (
    <>
      <p>{t('Por favor coméntenos, cómo se enteró de los servicios de la empresa')}</p>
      <p>
        {t(`Es importante para nosotros, porque nos ayuda a mejorar el servicio que
        le ofrecemos`)}
      </p>
      <div className="grid md:grid-cols-4 text-center mt-8">
        <CheckBox
          name="user.about_website.web"
          label="web portal of business"
        />
        <div>
          <input
            type="checkbox"
            className="w-4 h-4"
            onChange={(event) => {
              setSocial(event.target.checked);
            }}
          />
          <label className="ml-2">{t('Redes sociales')}</label>
          <div
            className={`text-center ${socialSection ? 'visible' : 'invisible'}`}
          >
            {t('Facebook')}
          </div>
        </div>
        <CheckBox name="user.about_website.friends" label="friends" />
        <div>
          <input
            type="checkbox"
            className="w-4 h-4"
            onChange={(event) => {
              setOther(event.target.checked);
            }}
          />
          <label className="ml-2">{t('Otro')}</label>
          <div
            className={`text-center ${otherSection ? 'visible' : 'invisible'}`}
          >
            <Field name="user.about_website.other" placeholder="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
