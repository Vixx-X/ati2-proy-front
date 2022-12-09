import { useEffect, useMemo, useState } from 'react';

import recursiveGetter from '@utils/recursiveGetter';

import { useFormikContext } from 'formik';

import FlagSelect from './FlagSelect';

export const PhoneField = ({
  children,
  name,
  ext,
  className,
  ...props
}: Props) => {
  // returns all values and methods from your Formik tag
  const formikProps = useFormikContext();
  const { values }: any = useFormikContext();
  const [prefixNumber, setPrefix] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [extNumber, setExt] = useState<string>('');

  useEffect(() => {
    const prefix = recursiveGetter(values, `${name}-prefix`);
    if (prefix) setPrefix(prefix);

    const number = recursiveGetter(values, `${name}-number`);
    if (number) setNumber(number);

    const ext = recursiveGetter(values, `${name}-ext`);
    if (ext) setExt(ext);
  }, [values.section]);

  useEffect(() => {
    formikProps.setFieldValue(`${name}-prefix`, prefixNumber);
    formikProps.setFieldValue(name, `${prefixNumber}${number}${extNumber}`);
  }, [prefixNumber]);

  useEffect(() => {
    formikProps.setFieldValue(`${name}-number`, number);
    formikProps.setFieldValue(name, `${prefixNumber}${number}${extNumber}`);
  }, [number]);

  useEffect(() => {
    formikProps.setFieldValue(`${name}-ext`, extNumber);
    formikProps.setFieldValue(name, `${prefixNumber}${number}${extNumber}`);
  }, [extNumber]);

  return (
    <div className={`flex gap-x-2 w-full ${className}`}>
      <FlagSelect number={true} setValue={setPrefix} />
      <input
        type="text"
        className={ext ? 'w-9/12' : 'w-full'}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      {ext ? (
        <input
          type="text"
          className="w-3/12"
          placeholder="ext"
          onChange={(e) => {
            setExt(e.target.value);
          }}
        />
      ) : null}
    </div>
  );
};

export default PhoneField;
