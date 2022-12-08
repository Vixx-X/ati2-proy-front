import { useMemo } from 'react';

import recursiveGetter from '@utils/recursiveGetter';

import { ErrorMessage, ErrorMessageProps, useFormikContext } from 'formik';
import useTranslate from '@hooks/useTranslate';

const ErrorMess: any = ErrorMessage;

export const ErrorMsg = ({ name, ...props }: ErrorMessageProps) => {
  const { status } = useFormikContext();
  const errorMessage = useMemo(() => {
    return recursiveGetter(status, name, null);
  }, [status, name]);
  const t = useTranslate();

  const Message = ({ error }: any) => {
    return (
      <div className="bg-red-600 border border-red text-red w-full p-3 my-3 py-2 rounded-lg text-sm font-normal">
        <span>{t('{0}', error)}</span>
      </div>
    );
  };
  return (
    <>
      <ErrorMess name={name} component={Message} {...props} />
      {errorMessage != null ? <Message error={errorMessage} /> : null}
    </>
  );
};

export default ErrorMsg;
