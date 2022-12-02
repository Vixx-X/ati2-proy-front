import { Field } from './Field';

interface CheckBoxProps extends Props {
  choices?: { value: string | Number; text: string | JSX.Element }[];
  name: string;
  label?: string;
}

export const CheckBox = ({ choices, name, label, childClassName, ...props }: CheckBoxProps) => {
  return (
    <>
      {choices ? (
        <div role="group" {...props}>
          {choices?.map(
            (
              {
                value,
                text,
              }: { value: string | Number; text: string | JSX.Element },
              index: number
            ) => (
              <div className={ childClassName } key={index}>
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
      ) : (
        <div {...props}>
          <Field type="checkbox" name={name} className="w-4 h-4" />
          <label className="ml-2">{label}</label>
        </div>
      )}
    </>
  );
};

export default CheckBox;
