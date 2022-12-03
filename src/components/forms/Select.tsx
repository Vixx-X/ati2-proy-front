import recursiveGetter from '@utils/recursiveGetter';

import { useFormikContext } from 'formik';

import { Field } from './Field';

export interface SelectProps extends Props {
  name: string;
  placeholder: string;
  choices: { value: string; text: string }[];
}

export interface FilteredSelectProps {
  name: string;
  placeholder?: string;
  choices?: { value: string; text: string }[];
  filter?: { [key: string]: any };
}

export const Select = ({ choices, placeholder, ...props }: SelectProps) => {
  const { values } = useFormikContext();

  return (
    <Field as="select" value={recursiveGetter(values, props.name)} {...props}>
      <>
        <option disabled>{placeholder ?? '--Seleccionar--'}</option>
        {choices?.map(({ value, text }: any, index: number) => (
          <option value={value} key={index}>
            {text}
          </option>
        ))}
      </>
    </Field>
  );
};

export default Select;
