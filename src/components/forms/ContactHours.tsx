import { useEffect, useState } from 'react';

import { Field } from '@components/forms/Field';
import FastSearch from '@components/layout/FiltersBar/FastSearch';

import { useFormikContext } from 'formik';

import Select from './Select';

const contactHours = [
  { text: '1', value: '1' },
  { text: '2', value: '2' },
  { text: '3', value: '3' },
  { text: '4', value: '4' },
  { text: '5', value: '5' },
  { text: '6', value: '6' },
  { text: '7', value: '7' },
  { text: '8', value: '8' },
  { text: '9', value: '9' },
  { text: '10', value: '10' },
  { text: '11', value: '11' },
  { text: '12', value: '12' },
];

const contactUseHours = [
  { text: 'pm', value: '1' },
  { text: 'am', value: '0' },
];

export const ContactUseHours = ({
  titleClassNames = 'text-xl',
  optionsClassNames,
  nameStart,
  nameEnd,
  ...props
}: any) => {
  const { values } = useFormikContext();

  // useEffect(() => {}, [values.contact.hours.startHour, ]);

  return (
    <div {...props}>
      <div className={`bg-secundary ${titleClassNames}`}>
        <p className="w-full text-center text-white font-bold py-2 px-4">
          Horas de Contacto
        </p>
      </div>
      <div
        className={`border border-2 border-darkprimary p-3 flex flex-wrap justify-center ${optionsClassNames}`}
      >
        <div className="w-[50%]">
          <p className="font-bold">Desde</p>
          <div className="flex gap-2 ">
            <Select
              name="contact.hours.startHour"
              placeholder="Seleccione Hora"
              choices={contactHours}
            />
            <Select
              name="contact.hours.startCode"
              placeholder="Seleccione Hora"
              choices={contactUseHours}
            />
          </div>
        </div>
        <div className="w-[50%]">
          <p className="font-bold">Hasta</p>
          <div className="flex gap-2 ">
            <Select
              name="contact.hours.endHour"
              placeholder="Seleccione Hora"
              choices={contactHours}
            />
            <Select
              name="contact.hours.endCode"
              placeholder="Seleccione Hora"
              choices={contactUseHours}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUseHours;
