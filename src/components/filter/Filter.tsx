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
}

export const Filter = ({ tag, ...props }: FilterInterface) => {
  return (
    <div>
      {tag === 'select' && <SelectFilter {...props} />}
      {tag === 'radioButton' && <RadioButtonFilter {...props} />}
      {tag === 'checkBox' && <CheckBoxFilter {...props}></CheckBoxFilter>}
      {tag === 'input' && (
        <>
          {props.selectName && (
            <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
              {props.selectName}
            </p>
          )}
          <Field
            className="bg-white border border-darkprimary placeholder-gray-500 text-xs lg:text-sm px-4 py-3 w-full focus:text-gray-800 text-gray-600 pl-4 pr-10 py-2 focus:border-1"
            as="input"
            {...props}
          />
        </>
      )}
    </div>
  );
};

export default Filter;
