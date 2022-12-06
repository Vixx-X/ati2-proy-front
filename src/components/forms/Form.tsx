import AutoSubmit from '@components/forms/AutoSubmit';

import {
  Form as FForm,
  Formik,
  FormikConfig,
  FormikValues,
  useFormikContext,
} from 'formik';

interface FormInterface {
  className?: string;
  renderProps?: boolean;
  autoSubmit?: boolean;
}

const InnerForm = ({ children }: any) => {
  const context = useFormikContext();
  return children(context);
};

export const Form = ({
  className,
  children,
  initialValues,
  onSubmit,
  renderProps,
  autoSubmit,
  ...props
}: FormikConfig<FormikValues> & FormInterface) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
      {...props}
    >
      <FForm className={className}>
        {renderProps ? <InnerForm>{children}</InnerForm> : <>{children}</>}

        {autoSubmit ? <AutoSubmit /> : null}
      </FForm>
    </Formik>
  );
};

export default Form;
