import React, { useState } from 'react';

import Field from '@components/forms/Field';

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
  const [aboutUsSection, setAboutUsSection] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
  ]);

  const showAboutUsSection = (event: any) => {
    const tempSection = [...aboutUsSection];
    if (!event?.target?.value) {
      return;
    }
    tempSection[event.target.value] = event.target.checked;
    setAboutUsSection(tempSection);
  };
  return (
    <>
      <p>Por favor coméntenos, cómo se enteró de los servicios de la empresa</p>
      <p>
        Es importante para nosotros, porque nos ayuda a mejorar el servicio que
        le ofrecemos
      </p>

      <div className="grid grid-cols-4 my-8 gap-4 justify-center">
        {optionsAboutUs?.map(
          ({ value, text }: { value: any; text: string }, index: number) => (
            <div className="text-center" key={index}>
              <input
                type="checkbox"
                value={value}
                className="w-4 h-4"
                onChange={showAboutUsSection}
              />
              <label className="ml-2">{text}</label>
            </div>
          )
        )}
        <div className="invisible">holi</div>
        <div
          className={`text-center ${
            aboutUsSection[1] ? 'visible' : 'invisible'
          }`}
        >
          Facebook
        </div>
        <div className="invisible">holi</div>
        <div
          className={`text-center ${
            aboutUsSection[3] ? 'visible' : 'invisible'
          }`}
        >
          <Field name="other" placeholder=""></Field>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
