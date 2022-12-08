import { Field } from './Field';

type CheckBoxChoiceProps = {
  value: string | Number;
  text: string | JSX.Element;
  checked?: boolean;
};

interface CheckBoxProps extends Props {
  choices?: CheckBoxChoiceProps[];
  onChangeCallback?: Function;
  name: string;
  label?: string;
}

export const CheckBox = ({
  choices,
  name,
  label,
  childClassName,
  onChangeCallback,
  ...props
}: CheckBoxProps) => {
  return (
    <>
      {choices ? (
        <div role="group" {...props}>
          {choices?.map(({ value, text, checked }, index: number) => (
            <div className={`flex items-center ${childClassName}`} key={index}>
              {checked ? (
                <Field
                  type="checkbox"
                  name={name}
                  value={value}
                  className="w-4 h-4"
                  checked={checked}
                  onChangeCallback={onChangeCallback}
                  {...props}
                />
              ) : (
                <Field
                  type="checkbox"
                  name={name}
                  value={value}
                  className="w-4 h-4"
                  onChangeCallback={onChangeCallback}
                  {...props}
                />
              )}
              <label className="ml-2">{text}</label>
            </div>
          ))}
        </div>
      ) : (
        <div {...props}>
          <Field
            type="checkbox"
            name={name}
            className="w-4 h-4"
            onChangeCallback={onChangeCallback}
          />
          <label className="ml-2">{label}</label>
        </div>
      )}
    </>
  );
};

export default CheckBox;
