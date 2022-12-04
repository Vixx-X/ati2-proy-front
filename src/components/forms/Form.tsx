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
  ...props
}: FormikConfig<FormikValues> & FormInterface) => {
  console.log(renderProps);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
      {...props}
    >
      <FForm className={className}>
        {renderProps ? <InnerForm>{children}</InnerForm> : <>{children}</>}
      </FForm>
    </Formik>
  );
};

export default Form;
