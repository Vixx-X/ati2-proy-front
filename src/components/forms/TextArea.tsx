import { useMemo } from 'react';

import { classNames } from '@utils/classNames';
import recursiveGetter from '@utils/recursiveGetter';

import { useFormikContext } from 'formik';

import { Field } from './Field';

export const TextArea = ({ children, styles, ...props }: Props) => {
  const { status, values } = useFormikContext();
  const hasError = useMemo(() => status?.[props.name], [status, props.name]);

  return (
    <Field
      as="textarea"
      className={classNames(
        props?.className ??
          'bg-white border border-darkprimary placeholder-gray-500 text-xs lg:text-sm px-4 py-3 w-full focus:text-gray-800 text-gray-600 pl-4 pr-10 py-2 focus:border-1',
        hasError
          ? 'focus:border-red-300 focus:ring-red-300'
          : 'focus:border-gray-300 focus:ring-gray-300',
        styles
      )}
      value={recursiveGetter(values, props.name)}
      {...props}
    >
      {children}
    </Field>
  );
};

export default TextArea;
