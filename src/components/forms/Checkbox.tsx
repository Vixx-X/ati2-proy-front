import { Field } from './Field';

type CheckBoxChoiceProps = {
  value: string | Number;
  text: string | JSX.Element;
  checked?: boolean;
};

interface CheckBoxProps extends Props {
  choices?: CheckBoxChoiceProps[];
  name: string;
  label?: string;
}

export const CheckBox = ({
  choices,
  name,
  label,
  childClassName,
  ...props
}: CheckBoxProps) => {
  return (
    <>
      {choices ? (
        <div role="group" {...props}>
          {choices?.map(({ value, text, checked }, index: number) => (
            <div className={childClassName} key={index}>
              {checked ? (
                <Field
                  type="checkbox"
                  name={name}
                  value={value}
                  className="w-4 h-4"
                  checked={checked}
                  {...props}
                />
              ) : (
                <Field
                  type="checkbox"
                  name={name}
                  value={value}
                  className="w-4 h-4"
                  {...props}
                />
              )}
              <label className="ml-2">{text}</label>
            </div>
          ))}
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
