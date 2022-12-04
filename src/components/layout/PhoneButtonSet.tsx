import { useState } from 'react';

import ErrorMsg from '@components/forms/ErrorMsg';
import PhoneField from '@components/forms/PhoneField';

interface PhoneButtonSetInterface {
  phoneName: string;
  localPhoneName: string;
}

export const PhoneButtonSet = ({
  phoneName,
  localPhoneName,
}: PhoneButtonSetInterface) => {
  const [phoneField, setPhoneField] = useState(false);
  const [localPhoneField, setLocalPhoneField] = useState(false);

  return (
    <div className="flex flex-col gap-y-4">
      <p>Seleccione el o los teléfonos de su preferencia</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center w-2/4">
          <input
            type="checkbox"
            className="w-4 h-4"
            onChange={(event) => {
              setPhoneField(event.target.checked);
            }}
          />

          <label className="py-1 ml-2 capitalize bg-secundary w-10/12 block text-center capitalize text-white font-bold">
            móvil
          </label>
        </div>
        <div className="flex items-center w-2/4 justify-end">
          <input
            type="checkbox"
            className="w-4 h-4"
            onChange={(event) => {
              setLocalPhoneField(event.target.checked);
            }}
          />

          <label className="py-1 ml-2 capitalize bg-secundary w-10/12 block text-center capitalize text-white font-bold">
            fijo
          </label>
        </div>
      </div>
      <div className={`text-center ${phoneField ? 'visible' : 'invisible'}`}>
        <PhoneField name={phoneName} />
        <ErrorMsg name={phoneName} />
      </div>
      <div
        className={`text-center ${localPhoneField ? 'visible' : 'invisible'}`}
      >
        <PhoneField name={localPhoneName} ext={true} />
        <ErrorMsg name={localPhoneName} />
      </div>
    </div>
  );
};

export default PhoneButtonSet;
