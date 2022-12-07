import { useEffect, useMemo, useState } from 'react';

import recursiveGetter from '@utils/recursiveGetter';

import { useFormikContext } from 'formik';

import Select from './Select';

const HOUR_TIME_CHOICES = [
  { text: '1', value: '1' },
  { text: '2', value: '2' },
  { text: '3', value: '3' },
  { text: '4', value: '4' },
  { text: '5', value: '5' },
  { text: '6', value: '6' },
  { text: '7', value: '7' },
  { text: '8', value: '8' },
  { text: '9', value: '9' },
  { text: '10', value: '10' },
  { text: '11', value: '11' },
  { text: '12', value: '12' },
];

const MID_TIME_CHOICES = [
  { text: 'pm', value: 'PM' },
  { text: 'am', value: 'AM' },
];

const hourFactory = (hour: string, mid: string) => {
  const newhour = hour == '12' ? '0' : hour;
  const newhourfix = mid == 'PM' ? parseInt(newhour) + 12 : newhour;
  return `${newhourfix.toString().padStart(2, '0')}:00`;
};

const getHour = (time: string) => {
  const hour = time?.split(':')?.[0];
  if (!hour) return ['', ''];
  const hournum = parseInt(hour);
  const mid = hournum < 12 ? 'AM' : 'PM';
  const hourfix = hournum == 0 ? 12 : hournum;
  const newhour = mid == 'PM' ? hourfix - 12 : hourfix;
  return [newhour.toString(), mid];
};

export const HourField = ({ name, ...props }: any) => {
  const { values, setFieldValue } = useFormikContext();

  const [hour, setHour] = useState('');
  const [mid, setMid] = useState('');

  const value = useMemo(() => recursiveGetter(values, name), [values, name]);

  useEffect(() => {
    const [h, m] = getHour(value);
    setHour(h);
    setMid(m);
  }, [value]);

  useEffect(() => {
    if (!hour && !mid) return;
    setFieldValue(name, hourFactory(hour, mid));
  }, [mid, hour, name, setFieldValue]);

  return (
    <div className="flex gap-2 " {...props}>
      <Select
        placeholder="Seleccione Hora"
        onChange={(e: any) => setHour(e.target.value)}
        value={hour}
        choices={HOUR_TIME_CHOICES}
      />
      <Select
        placeholder="Seleccione Mitad de Día"
        onChange={(e: any) => setMid(e.target.value)}
        value={mid}
        choices={MID_TIME_CHOICES}
      />
    </div>
  );
};

export default HourField;
