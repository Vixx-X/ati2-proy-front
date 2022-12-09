import useTranslate from '@hooks/useTranslate';

import { Field } from './Field';

export interface SelectProps extends Props {
  name?: string;
  placeholder: string;
  choices: { value: string; text: string }[];
}

export interface FilteredSelectProps extends Props {
  name?: string;
  placeholder?: string;
  choices?: { value: string; text: string }[];
  filter?: { [key: string]: any };
  notitle?: boolean;
}

export const Select = ({ choices, placeholder, ...props }: SelectProps) => {
  const t = useTranslate();
  return (
    <Field as="select" {...props}>
      <>
        <option value="">{placeholder ?? t('--Seleccionar--')}</option>
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
