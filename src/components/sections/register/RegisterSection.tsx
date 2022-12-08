import React, { useState } from 'react';

import useTranslate from '@hooks/useTranslate';

import BusinessUser from './user/BusinessUser';
import NaturalUser from './user/NaturalUser';

export enum UserType {
  NATURAL = 'natural',
  BUSINESS = 'business',
}

export const RegisterSection = ({ userType, setUserType }: any) => {
  const handleUser = (event: any) => {
    setUserType(event.target.value as UserType);
  };
  const t = useTranslate();
  return (
    <>
      <div className="flex gap-x-10">
        <p>{t('Selecciona el tipo de usuario')}</p>
        <div className="radio">
          <input
            type="radio"
            name="typeUser"
            value={UserType.NATURAL}
            onChange={handleUser}
          />
          <label className="ml-2">{t('Persona Natural')}</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="typeUser"
            value={UserType.BUSINESS}
            onChange={handleUser}
          />
          <label className="ml-2">{t('Empresa')}</label>
        </div>
      </div>
      <div className="my-8 flex justify-center w-full">
        <div className="w-full mt-4 ">
          {userType === 'natural' && <NaturalUser />}
          {userType === 'business' && <BusinessUser />}
        </div>
      </div>
    </>
  );
};

export default RegisterSection;
