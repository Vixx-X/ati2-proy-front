import { useCallback, useEffect, useMemo } from 'react';

import LoaderSpinner from '@components/LoaderSpinner';

import { getContactDays } from '@fetches/post';

import useToggle from '@hooks/useToggle';

import recursiveGetter from '@utils/recursiveGetter';

import { useFormikContext } from 'formik';
import useSWR from 'swr';

import CheckBox from './Checkbox';
import useTranslate from '@hooks/useTranslate';

interface ContactDaysProps extends Props {
  name: string;
}

export const ContactDays = ({ name }: ContactDaysProps) => {
  const t = useTranslate();
  const { values, setFieldValue } = useFormikContext();
  const { data } = useSWR('day-options', getContactDays);

  const [weekdays, toggleWeekdays] = useToggle(false);
  const [weekends, toggleWeekends] = useToggle(false);

  const days = useMemo(() => data?.map((el: any) => el.option), [data]);

  const weekdayOptions = useMemo(
    () => (!days ? null : [...days]?.splice(0, 5)),
    [days]
  );
  const weekendOptions = useMemo(
    () => (!days ? null : [...days]?.splice(5, 7)),
    [days]
  );

  const choices = useMemo(() => {
    const items = days?.map((el: any) => ({
      text: t(el),
      value: el,
    }));
    if (!items) return items;
    return [
      ...items,
      { text: 'weekdays', value: 'weekdays', checked: weekdays },
      { text: 'weekends', value: 'weekends', checked: weekends },
    ];
  }, [days, weekdays, weekends, t]);

  useEffect(() => {
    const options = recursiveGetter(values, name);
    toggleWeekends(
      weekendOptions?.every((el: string) => options?.includes(el))
    );
    toggleWeekdays(
      weekdayOptions?.every((el: string) => options?.includes(el))
    );
  }, [
    name,
    toggleWeekdays,
    toggleWeekends,
    values,
    weekdayOptions,
    weekendOptions,
  ]);

  return (
    <>
      <div className="bg-secundary">
        <p className="w-full text-center text-white font-bold text-xl py-2 px-4">
          {t('Días de contacto')}
        </p>
      </div>
      <div className="border border-2 border-darkprimary p-3 flex flex-wrap justify-center">
        <CheckBox
          className="flex flex-wrap gap-1 justify-center"
          choices={choices}
          onChangeCallback={(fun: any) => {
            return (e: any) => {
              const val = e.target.value;
              const options = recursiveGetter(values, name);
              if (val === 'weekends' && !weekends) {
                if (weekendOptions)
                  setFieldValue(name, [
                    ...(new Set([
                      ...weekendOptions,
                      ...(options ?? []),
                    ]) as any),
                  ]);
                return;
              }
              if (val === 'weekdays' && !weekdays) {
                if (weekdayOptions)
                  setFieldValue(name, [
                    ...(new Set([
                      ...weekdayOptions,
                      ...(options ?? []),
                    ]) as any),
                  ]);
                return;
              }
              return fun(e);
            };
          }}
          name={name}
        />
      </div>
    </>
  );
};

export default ContactDays;
