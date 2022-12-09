import { useMemo, useState } from 'react';

import CheckBox from '@components/forms/Checkbox';
import ErrorMsg from '@components/forms/ErrorMsg';
import PhoneField from '@components/forms/PhoneField';

import useTranslate from '@hooks/useTranslate';

import { useFormikContext } from 'formik';

interface PhoneButtonSetInterface {
  phoneName: string;
  localPhoneName: string;
}

export const PhoneButtonSet = ({
  phoneName,
  localPhoneName,
}: PhoneButtonSetInterface) => {
  const { values }: any = useFormikContext();
  const phoneField = useMemo(() => {
    if (phoneName.includes('.') && values.section && values.section[phoneName.split('.')[0]]) {
      return phoneName.split('.').reduce((a, b) => a[b], values.section);
    } else {
      return values?.section && values?.section[phoneName];
    }
  }, [values.section]);

  const localPhoneField = useMemo(() => {
    if (localPhoneName.includes('.') && values.section && values.section[localPhoneName.split('.')[0]]) {
      return localPhoneName.split('.').reduce((a, b) => a[b], values.section);
    } else {
      return values?.section && values?.section[localPhoneName];
    }
  }, [values.section]);
  const t = useTranslate();
  return (
    <div className="flex flex-col gap-y-4">
      <p>{t('Seleccione el o los teléfonos de su preferencia')}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center w-2/4">
          <CheckBox className="w-4 h-4" name={`section.${phoneName}`} />
          <label className="py-1 ml-2 capitalize bg-secundary w-10/12 block text-center capitalize text-white font-bold">
            {t('móvil')}
          </label>
        </div>
        <div className="flex items-center w-2/4 justify-end">
          <CheckBox className="w-4 h-4" name={`section.${localPhoneName}`} />
          <label className="py-1 ml-2 capitalize bg-secundary w-10/12 block text-center capitalize text-white font-bold">
            {t('fijo')}
          </label>
        </div>
      </div>
      <div>
        <div className={`text-center ${phoneField ? 'visible' : 'invisible'}`}>
          <PhoneField name={phoneName} />
        </div>
        <ErrorMsg name={phoneName} />
      </div>
      <div>
        <div
          className={`text-center ${localPhoneField ? 'visible' : 'invisible'}`}
        >
          <PhoneField name={localPhoneName} ext={true} />
        </div>
        <ErrorMsg name={localPhoneName} />
      </div>
    </div>
  );
};

export default PhoneButtonSet;
