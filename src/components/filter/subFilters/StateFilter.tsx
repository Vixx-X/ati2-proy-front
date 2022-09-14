import Field from '@components/forms/Field';
import Select from '@components/forms/Select';

export const StateFilter = () => {
  const States = [
    { value: 'e1', text: 'state1' },
    { value: 'e2', text: 'state2' },
    { value: 'e3', text: 'state3' },
  ];

  return (
    <div>
      <p className="bg-sky-600 p-3 cursor-pointer text-white font-semibold">
        Estado
      </p>
      <Select
        choices={States}
        placeholder="Seleccione Estado"
        name="state"
        id="state"
      ></Select>
    </div>
  );
};

export default StateFilter;
