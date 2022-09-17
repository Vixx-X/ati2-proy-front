import React, { useState } from 'react';
import BusinessUser from './user/BusinessUser';
import NaturalUser from './user/NaturalUser';

export const RegisterSection = ({}) => {
  const [userType, setUserType] = useState<string>('');

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
            value="natural"
            name="user"
            onChange={handleUser}
          />
          <label className="ml-2">Persona Natural</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            value="business"
            name="user"
            onChange={handleUser}
          />
          <label className="ml-2">Empresa</label>
        </div>
      </div>
      <div className="my-8">
        {userType === 'natural' && <NaturalUser/>}
        {userType === 'business' && <BusinessUser/>}    
      </div>
    </>
  );
};

export default RegisterSection;
