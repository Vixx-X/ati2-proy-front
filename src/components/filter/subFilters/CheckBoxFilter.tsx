import { Field } from 'formik';

import Checkbox from '../../forms/Checkbox';

interface CheckBoxFilterProps {
  choices: { value: string; text: string }[];
  name: string;
  placeholder: string;
  selectName: string;
}

export const CheckBoxFilter = ({
  choices,
  selectName,
  name,
  placeholder,
  ...props
}: CheckBoxFilterProps) => {
  return (
    <div className="w-fill">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        {selectName}
      </p>
      <div {...props} className="flex flex-col">
        <Checkbox choices={choices} name={name}></Checkbox>
      </div>
    </div>
  );
};

export default CheckBoxFilter;
