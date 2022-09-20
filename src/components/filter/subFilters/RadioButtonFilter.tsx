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
    <>
      <p className="bg-sky-600 py-1 px-2 mb-2 cursor-pointer text-white font-semibold rounded">
        {selectName}
      </p>
      <div {...props} className="flex flex-col p-2">
        {choices?.map(({ value, text }: any, index: number) => (
          <label key={index} className="py-1 flex content-center">
            <Field type="radio" name={name} value={value} />
            <p>{text}</p>
          </label>
        ))}
      </div>
    </>
  );
};

export default RadioButtonFilter;
