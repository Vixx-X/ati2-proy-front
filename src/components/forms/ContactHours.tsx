import { useState } from 'react';

import { Field } from '@components/forms/Field';
import FastSearch from '@components/layout/FiltersBar/FastSearch';

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

export const ContactUseHours = () => {
  return (
    <>
      <div className="bg-secundary">
        <p className="w-full text-center text-white font-bold text-xl py-2 px-4">
          Horas de Contacto
        </p>
      </div>
      <div className="border border-2 border-darkprimary p-3 flex justify-center gap-2">
        <div className="w-[50%]">
            <p className="font-bold">Desde</p>
            <div className="flex gap-2 ">
                <Select name="contact.hours.startHour" placeholder="Seleccione Hora" choices={contactHours} />
                <Select name="contact.hours.startCode" placeholder="Seleccione Hora" choices={contactUseHours} />
            </div>
        </div>
        <div className="w-[50%]">
            <p className="font-bold">Hasta</p>
            <div className="flex gap-2 ">
                <Select name="contact.hours.endHour" placeholder="Seleccione Hora" choices={contactHours} />
                <Select name="contact.hours.endCode" placeholder="Seleccione Hora" choices={contactUseHours} />
            </div>
        </div>
      </div>
    </>
  );
};

export default ContactUseHours;
