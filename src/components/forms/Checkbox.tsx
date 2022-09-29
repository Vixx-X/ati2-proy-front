import { Field } from './Field';

interface CheckBoxProps extends Props {
  choices?: { value: string | Number; text: string }[];
  name: string;
  label?: string;
}

export const CheckBox = ({ choices, name, label, ...props }: CheckBoxProps) => {
  return (
    <>
      {choices ? (
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
