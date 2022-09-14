import Field from '@components/forms/Field';
import Select from '@components/forms/Select';

export const ContryFilter = () => {
  const Contrys = [
    { value: 'c1', text: 'contry1' },
    { value: 'c2', text: 'contry2' },
    { value: 'c3', text: 'contry3' },
  ];

  return (
    <div>
      <p className="bg-sky-600 p-3 cursor-pointer text-white font-semibold">
        Pais
      </p>
      <Select
        choices={Contrys}
        placeholder="Seleccione Pais"
        name="contry"
        id="contry"
      ></Select>
    </div>
  );
};

export default ContryFilter;
