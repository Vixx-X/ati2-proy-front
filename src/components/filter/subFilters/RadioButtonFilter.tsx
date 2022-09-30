import RadioGroup from '@components/forms/RadioGroup';

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
    <div className="w-fill">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        {selectName}
      </p>
      <div {...props} className="flex flex-col p-2">
        <RadioGroup choices={choices} name={name} {...props} />
      </div>
    </div>
  );
};

export default RadioButtonFilter;
