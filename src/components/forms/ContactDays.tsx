import { useMemo } from 'react';

import { getContactDays } from '@fetches/post';

import useSWR from 'swr';

import CheckBox from './Checkbox';

export const ContactDays = () => {
  const { data } = useSWR('day-options', getContactDays);
  const choices = useMemo(
    () =>
      data?.map((el: any) => ({
        text: el.option,
        value: el.option,
      })),
    [data]
  );
  return (
    <>
      <div className="bg-secundary">
        <p className="w-full text-center text-white font-bold text-xl py-2 px-4">
          Dias de contacto
        </p>
      </div>
      <div className="border border-2 border-darkprimary p-3 flex flex-wrap justify-center">
        <CheckBox
          className="flex flex-wrap gap-1 justify-center"
          choices={choices}
          name="days"
        />
      </div>
    </>
  );
};

export default ContactDays;
