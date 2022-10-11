import { Form as FForm, Formik, FormikConfig, FormikValues } from 'formik';

interface FormInterface {
  displayProps?: String;
}

export const Form = ({
  displayProps,
  children,
  initialValues,
  onSubmit,
  ...props
}: FormikConfig<FormikValues> & FormInterface) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
      {...props}
    >
      <FForm className={`${displayProps}`} >{children}</FForm>
    </Formik>
  );
};

export default Form;
