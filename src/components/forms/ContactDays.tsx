import { useState } from 'react';

import { Field } from '@components/forms/Field';

import CheckBox from './Checkbox';

const contactDays = [
  { text: 'Lunes', value: 0 },
  { text: 'Martes', value: 1 },
  { text: 'Miercoles', value: 2 },
  { text: 'Jueves', value: 3 },
  { text: 'Viernes', value: 4 },
  { text: 'Sabado', value: 5 },
  { text: 'Domingo', value: 6 },
  { text: 'Fines de Semana', value: 7 },
  { text: 'De Lunes a Viernes', value: 8 },
];

export const ContactDays = ({
  name = 'days',
  titleClassNames = 'text-xl',
  optionsClassNames,
  ...props
}: Props) => {
  return (
    <div {...props}>
      <div className={`bg-secundary ${titleClassNames}`}>
        <p className="w-full text-center text-white font-bold py-2 px-4">
          Dias de contacto
        </p>
      </div>
      <div
        className={`border border-2 border-darkprimary p-3 flex flex-wrap justify-center ${optionsClassNames}`}
      >
        <CheckBox
          className="flex flex-wrap gap-1 justify-center"
          choices={contactDays}
          name={name}
        />
      </div>
    </div>
  );
};

export default ContactDays;
