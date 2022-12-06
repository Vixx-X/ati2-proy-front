import { Field } from './Field';

interface RadioGroupProps extends Props {
  choices?: { value: string | Number | Boolean; text: string }[];
  name: string;
  moreElements?: JSX.Element | boolean;
}

export const RadioGroup = ({
  choices,
  name,
  moreElements,
  ...props
}: RadioGroupProps) => {
  return (
    <div role="group" {...props}>
      {choices?.map(({ value, text }, index: number) => (
        <div key={index}>
          <Field type="radio" name={name} value={value} className="w-4 h-4" />
          <label className="ml-2">{text}</label>
        </div>
      ))}
      {moreElements}
    </div>
  );
};

export default RadioGroup;
