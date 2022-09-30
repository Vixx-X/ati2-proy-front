import { Field } from './Field';

interface RadioGroupProps extends Props {
  choices?: { value: string | Number; text: string }[];
  name: string;
}

export const RadioGroup = ({ choices, name, ...props }: RadioGroupProps) => {
  return (
    <>
      <div role="group" {...props}>
        {choices?.map(
          (
            { value, text }: { value: string | Number; text: string },
            index: number
          ) => (
            <div key={index}>
              <Field
                type="radio"
                name={name}
                value={value}
                className="w-4 h-4"
              />
              <label className="ml-2">{text}</label>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default RadioGroup;
