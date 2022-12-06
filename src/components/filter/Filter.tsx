import Field from '@components/forms/Field';

import CheckBoxFilter from './subFilters/CheckBoxFilter';
import RadioButtonFilter from './subFilters/RadioButtonFilter';
import SelectFilter from './subFilters/SelectFilter';

interface FilterInterface extends Props {
  tag: string;
  choices: { value: string; text: string }[];
  name: string;
  placeholder: string;
  selectName: string;
  classNameInput?: string;
  classNameSelect?: string;
}

export const Filter = ({
  tag,
  classNameInput,
  classNameSelect,
  selectName,
  ...props
}: FilterInterface) => {
  return (
    <div>
      {tag === 'select' && (
        <SelectFilter
          styles={classNameSelect}
          selectName={selectName}
          {...props}
        />
      )}
      {tag === 'radioButton' && (
        <RadioButtonFilter selectName={selectName} {...props} />
      )}
      {tag === 'checkBox' && (
        <CheckBoxFilter selectName={selectName} {...props}></CheckBoxFilter>
      )}
      {tag === 'input' && (
        <>
          {selectName && (
            <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
              {selectName}
            </p>
          )}
          <Field styles={classNameInput} {...props} />
        </>
      )}
    </div>
  );
};

export default Filter;
