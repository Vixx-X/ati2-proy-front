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
    <>
      {tag === 'select' && <SelectFilter {...props} />}
      {tag === 'radioButton' && <RadioButtonFilter {...props} />}
    </>
  );
};

export default Filter;
