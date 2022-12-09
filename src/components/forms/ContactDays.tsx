import { useCallback, useEffect, useMemo } from 'react';

import LoaderSpinner from '@components/LoaderSpinner';

import { getContactDays } from '@fetches/post';

import useToggle from '@hooks/useToggle';
import useTranslate from '@hooks/useTranslate';

import recursiveGetter from '@utils/recursiveGetter';

import { useFormikContext } from 'formik';
import useSWR from 'swr';

import CheckBox from './Checkbox';

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
      <div className="bg-secundary w-full">
        <p className="w-full text-center text-white font-bold text-xl py-2 px-4">
          {t('Días de contacto')}
        </p>
      </div>
      <div className="border border-2 border-darkprimary p-3 flex flex-wrap justify-center">
        <CheckBox
          name={name}
          className="flex flex-wrap gap-1 justify-center"
          choices={choices}
          onChangeCallback={(fun: any) => {
            return (e: any) => {
              const val = e.target.value;
              const checked = e.target.checked;
              const options = recursiveGetter(values, name);
              if (val === 'weekends') {
                if (!weekendOptions) return;
                if (checked) {
                  setFieldValue(name, [
                    ...(new Set([
                      ...weekendOptions,
                      ...(options ?? []),
                    ]) as any),
                  ]);
                } else {
                  setFieldValue(
                    name,
                    (options ?? []).filter(
                      (el: string) => !weekendOptions.includes(el)
                    )
                  );
                }
                return;
              }
              if (val === 'weekdays') {
                if (!weekdayOptions) return;
                if (checked) {
                  setFieldValue(name, [
                    ...(new Set([
                      ...weekdayOptions,
                      ...(options ?? []),
                    ]) as any),
                  ]);
                } else {
                  setFieldValue(
                    name,
                    (options ?? []).filter(
                      (el: string) => !weekdayOptions.includes(el)
                    )
                  );
                }
                return;
              }
              return fun(e);
            };
          }}
        />
      </div>
    </>
  );
};

export default ContactDays;
