import React, { useState } from 'react';

import BusinessUser from './user/BusinessUser';
import NaturalUser from './user/NaturalUser';

export const RegisterSection = ({ userType, setUserType }: any) => {
  const handleUser = (event: any) => {
    setUserType(event.target.value);
  };
  return (
    <>
      <div className="flex gap-x-10">
        <p>Selecciona el tipo de usuario</p>
        <div className="radio">
          <input
            type="radio"
            name="typeUser"
            value="natural"
            onChange={handleUser}
          />
          <label className="ml-2">Persona Natural</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            name="typeUser"
            value="business"
            onChange={handleUser}
          />
          <label className="ml-2">Empresa</label>
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
