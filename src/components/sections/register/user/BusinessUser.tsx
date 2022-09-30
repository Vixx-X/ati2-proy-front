import React, { useState } from 'react';

import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import Select from '@components/forms/Select';
import BaseModal from '@components/modals/BaseModal';

import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BusinessUser = ({}) => {
  return (
    <>
      <div className="w-full justify-center flex gap-x-20">
        <div className="flex flex-col gap-y-4">
          <div className="bg-primary py-4 px-10 text-white capitalize texx-xl font-bold">
            datos de la empresa
          </div>
          <div className="flex items-center">
            <label htmlFor="name" className="w-2/4 capitalize">
              name of business
            </label>
            <Field name="name" id="name" />
            <ErrorMsg name="name" />
          </div>
          <div className="flex items-center">
            <label htmlFor="tax_id" className="w-2/4 capitalize">
              tax id
            </label>
            <Field name="tax_id" id="tax_id" />
            <ErrorMsg name="tax_id" />
          </div>
          <div className="flex items-center">
            <label htmlFor="city" className="w-2/4 capitalize">
              city
            </label>
            <Select choices={[]} name="city" placeholder="Select a city" />
            <ErrorMsg name="city" />
          </div>
          <div className="flex items-center">
            <label htmlFor="country" className="w-2/4 capitalize">
              country
            </label>
            <Select
              choices={[]}
              name="country"
              placeholder="Select a country"
            />
            <ErrorMsg name="country" />
          </div>
          <div className="flex items-center">
            <label htmlFor="continent" className="w-2/4 capitalize">
              continent
            </label>
            <Field name="continent" id="continent" />
            <ErrorMsg name="continent" />
          </div>
          <div className="flex items-center">
            <label htmlFor="address.line1" className="w-2/4 capitalize">
              main address
            </label>
            <Field name="address.line1" id="address.line1" />
            <ErrorMsg name="address.line1" />
          </div>
          <div className="flex items-center">
            <label htmlFor="address.line2" className="w-2/4 capitalize">
              more details of address
            </label>
            <Field name="address.line2" id="address.line2" />
            <ErrorMsg name="address.line2" />
          </div>
          <div className="flex items-center">
            <label htmlFor="phone" className="w-2/4 capitalize">
              phone
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="bg-primary py-4 px-10 text-white capitalize texx-xl font-bold">
            datos representante de la empresa
          </div>
          <div className="flex items-center">
            <label htmlFor="representant.first_name" className="w-2/4 capitalize">
              name of representant
            </label>
            <Field name="representant.first_name" id="representant.first_name" />
            <ErrorMsg name="representant.first_name" />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="representant.last_name"
              className="w-2/4 capitalize"
            >
              last name of representant
            </label>
            <Field name="representant.last_name" id="representant.last_name" />
            <ErrorMsg name="representant.last_name" />
          </div>
          <div className="flex items-center">
            <label htmlFor="phone" className="w-2/4 capitalize">
              phone of representant
            </label>
            <ErrorMsg name="representant.phone" />
            <ErrorMsg name="representant.local_phone" />
          </div>
        </div>
      </div>
      <p className="justify-center flex text-darkprimary mt-8">
        <span className="text-red">*</span> Por favor verifique que sus datos
        sean los correctos, ya que serán utilizados para generar su publicación,
        enviarle sus datos de acceso, o notificar sus pagos
      </p>
    </>
  );
};

export default BusinessUser;
