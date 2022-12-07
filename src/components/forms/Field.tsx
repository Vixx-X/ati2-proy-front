import { useMemo } from 'react';

import { classNames } from '@utils/classNames';
import recursiveGetter from '@utils/recursiveGetter';

import { Field as FField, useFormikContext } from 'formik';

const defaultOnChange = (callback: Function) => {
  return callback;
};

export const Field = ({
  children,
  onChangeCallback,
  styles,
  ...props
}: Props) => {
  if (!onChangeCallback) onChangeCallback = defaultOnChange;

  const { status, handleChange, values /*, errors */ } = useFormikContext();
  const hasError = useMemo(
    () => status?.[props.name] /* || errors?.[props.name]*/,
    [status, props.name /*, errors*/]
  );

  const fieldProps = {
    className: classNames(
      props?.className ??
        'bg-white border border-darkprimary placeholder-gray-500 text-xs lg:text-sm px-4 py-3 w-full focus:text-gray-800 text-gray-600 pl-4 pr-10 py-2 focus:border-1',
      hasError
        ? 'focus:border-red-300 focus:ring-red-300'
        : 'focus:border-gray-300 focus:ring-gray-300',
      styles
    ),
    value: recursiveGetter(values, props.name),
    onChange: onChangeCallback(handleChange),
    ...props,
  };

  if (props?.name) return <FField {...fieldProps}>{children}</FField>;

  if (props?.as === 'select')
    return <select {...fieldProps}>{children}</select>;

  if (props?.as === 'textarea')
    return <textarea {...fieldProps}>{children}</textarea>;

  return <input {...fieldProps}>{children}</input>;
};

export default Field;
