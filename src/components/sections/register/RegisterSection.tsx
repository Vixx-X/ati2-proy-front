import React, { useState } from 'react';

import CheckBox from '@components/forms/Checkbox';
import Field from '@components/forms/Field';
import RadioButton from '@components/forms/RadioButton';
import RadioGroup from '@components/forms/RadioGroup';

import useTranslate from '@hooks/useTranslate';

import { useFormikContext } from 'formik';

import BusinessUser from './user/BusinessUser';
import NaturalUser from './user/NaturalUser';

export enum UserType {
  NATURAL = 'natural',
  BUSINESS = 'business',
}

export const RegisterSection = ({ userType, setUserType }: any) => {
  const t = useTranslate();
  const { values } = useFormikContext();
  const vals: any = values;

  const choices = [
    {
      text: t('Persona Natural'),
      value: UserType.NATURAL,
    },
    {
      text: t('Empresa'),
      value: UserType.BUSINESS,
    },
  ];

  return (
    <>
      <div className="flex gap-x-10">
        <p>{t('Selecciona el tipo de usuario')}</p>
        <RadioGroup
          name="section.typeUser"
          value={UserType.NATURAL}
          placeholder={''}
          choices={choices}
          className="flex gap-x-4"
        />
      </div>
      <div className="my-8 flex justify-center w-full">
        <div className="w-full mt-4 ">
          {vals.section.typeUser == UserType.NATURAL && <NaturalUser />}
          {vals.section.typeUser === UserType.BUSINESS && <BusinessUser />}
        </div>
      </div>
    </>
  );
};

export default RegisterSection;
