import { Field } from 'formik';

interface RadioButtonFilterProps {
  choices: { value: string; text: string }[];
  name: string;
  placeholder: string;
  selectName: string;
}

export const RadioButtonFilter = ({
  choices,
  selectName,
  name,
  placeholder,
  ...props
}: RadioButtonFilterProps) => {
  return (
    <div>
      <p className="bg-sky-600 p-3 cursor-pointer text-white font-semibold">
        {selectName}
      </p>
      <div {...props}>
        {choices?.map(({ value, text }: any, index: number) => (
          <label key={index}>
            <Field type="radio" name={name} value={value} />
            {text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonFilter;
