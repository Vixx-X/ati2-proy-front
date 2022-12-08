import { useMemo } from 'react';

import { getStates } from '@fetches/address';

import useSWR from 'swr';

import Select, { FilteredSelectProps } from './Select';
import useTranslate from '@hooks/useTranslate';

export interface StateSelectProps extends FilteredSelectProps {}

export const StateSelect = ({ filter, ...props }: StateSelectProps) => {
  const { data } = useSWR(['state', { limit: 300, ...filter }], (_, query) =>
    getStates(query)
  );
  const t = useTranslate();
  const choices = useMemo(
    () =>
      data?.results.map((item: any) => ({
        text: item.name,
        value: item.id,
      })),
    [data]
  );

  return (
    <div className="w-full">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        {t('Estado')}
      </p>
      <Select
        className="w-full rounded"
        choices={choices}
        placeholder={t("--Selecciona Estado--")}
        {...props}
      />
    </div>
  );
};

export default StateSelect;
