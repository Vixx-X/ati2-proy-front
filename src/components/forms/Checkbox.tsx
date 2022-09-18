import { useFormikContext } from 'formik';
import { Fragment } from 'react';

import { Field } from './Field';

interface CheckBoxProps extends Props {
  choices: { value: string | Number; text: string }[];
  name: string;
}

export const CheckBox = ({
  choices,
  name,
  ...props
}: CheckBoxProps) => {
  const { handleChange } = useFormikContext();
  return (
    <>
      <div role="group" {...props}>
        {choices?.map(
          (
            { value, text }: { value: string | Number; text: string },
            index: number
          ) => (
            <div key={index}>
              <Field
                type="checkbox"
                name={name}
                value={value}
                className="w-4 h-4"
              />
              <label className="ml-2">{text}</label>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default CheckBox;
