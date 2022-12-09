import { useEffect, useState } from 'react';

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
  const { setFieldValue } = useFormikContext();
  const [prefixNumber, setPrefix] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [extNumber, setExt] = useState<string>('');

  useEffect(() => {
    if (ext) {
      setFieldValue(name, `${prefixNumber}${number}${extNumber}`);
    } else {
      setFieldValue(name, `${prefixNumber}${number}`);
    }
  }, [prefixNumber, number, extNumber, setFieldValue, ext, name]);

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
