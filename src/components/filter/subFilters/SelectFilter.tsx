import Select from '@components/forms/Select';

interface SelectFilter {
  choices: { value: string; text: string }[];
  selectName: string;
  name: string;
  placeholder: string;
}
  

export const SelectFilter = ({
  choices,
  selectName,
  name,
  placeholder,
  ...props
}: SelectFilter) => {
  return (
    <>
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        {selectName}
      </p>
      <Select
        className="rounded w-full"
        choices={choices}
        placeholder={placeholder}
        name={name}
        id={name}
      ></Select>
    </>
  );
};

export default SelectFilter;
