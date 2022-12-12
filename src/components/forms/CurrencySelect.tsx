import { useEffect, useMemo } from 'react';

import useTranslate from '@hooks/useTranslate';

import recursiveGetter from '@utils/recursiveGetter';

import { useFormikContext } from 'formik';

import Field from './Field';
import Select from './Select';

export const CurrencySelect = ({ filter, name, ...props }: Props) => {
  const { values, setFieldValue } = useFormikContext();
  const choices = [
    {
      text: 'USD',
      value: 'USD',
    },
    {
      text: 'EUR',
      value: 'EUR',
    },
    {
      text: 'Otra',
      value: 'OTHER',
    },
  ];
  const name1 = `${name}/1`;
  const name2 = `${name}/2`;

  const value1 = useMemo(
    () => recursiveGetter(values, name1, recursiveGetter(values, name)),
    [values, name1, name]
  );
  const value2 = useMemo(() => recursiveGetter(values, name2), [values, name2]);

  useEffect(() => {
    setFieldValue(name, value1 === 'OTHER' ? value2 : value1);
  }, [value1, value2, name, setFieldValue]);

  const t = useTranslate();

  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        {t('Moneda')}
      </p>
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder={t('--Selecciona la Moneda--')}
        name={name1}
        value={value1}
        {...props}
      />
      {value1 === 'OTHER' ? (
        <div className="flex flex-col">
          <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
            {t('Coloque las siglas de las monedas')}
          </p>
          <Field
            type="text"
            className="pr-2 pl-2 pt-2 pb-2 text-xs uppercase"
            name={name2}
            value={value2}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CurrencySelect;
