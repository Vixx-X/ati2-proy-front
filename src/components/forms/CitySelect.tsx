import { useMemo } from 'react';

import { getCities } from '@fetches/address';

import useTranslate from '@hooks/useTranslate';

import useSWR from 'swr';

import Select, { FilteredSelectProps } from './Select';

export interface CitySelectProps extends FilteredSelectProps {}

export const CitySelect = ({ filter, name, ...props }: CitySelectProps) => {
  const { data } = useSWR(['cities', { limit: 300, ...filter }], (_, query) =>
    getCities(query)
  );
  const t = useTranslate();
  const choices = useMemo(
    () =>
      data?.results.map((item: any) => ({
        text: item.name,
        value: item.id,
      })),
    [data?.results]
  );

  return (
    <div className="w-full">
      {!props.notitle && (
        <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded capitalize">
          {t('ciudad')}
        </p>
      )}
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder={t('--Selecciona Ciudad--')}
        name={name}
        {...props}
      />
    </div>
  );
};

export default CitySelect;
