import { useMemo } from 'react';

import Select, { FilteredSelectProps } from './Select';

export interface CurrencySelectProps extends FilteredSelectProps {}

export const CurrencySelect = ({ filter, ...props }: CurrencySelectProps) => {
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
  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        Moneda
      </p>
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder="--Selecciona la Moneda--"
        {...props}
      />
    </div>
  );
};

export default CurrencySelect;
