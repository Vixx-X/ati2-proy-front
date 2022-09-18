import Select from '@components/forms/Select';

interface SelectFilter {
  choices: { value: string; text: string }[];
  name: string;
  placeholder: string;
  selectName: string;
}

export const SelectFilter = ({
  choices,
  selectName,
  name,
  placeholder,
  ...props
}: SelectFilter) => {
  return (
    <div {...props}>
      <p className="bg-sky-600 p-3 cursor-pointer text-white font-semibold">
        {selectName}
      </p>
      <Select
        choices={choices}
        placeholder={placeholder}
        name={name}
        id={name}
      ></Select>
    </div>
  );
};

export default SelectFilter;
