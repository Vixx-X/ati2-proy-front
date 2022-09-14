import Field from '@components/forms/Field';
import Select from '@components/forms/Select';

export const VehicleBrandFilter = () => {
  const Continents = [
    { value: 'c1', text: 'contient1' },
    { value: 'c2', text: 'contient2' },
    { value: 'c3', text: 'contient3' },
  ];

  return (
    <div>
      <p className="bg-sky-600 p-3 cursor-pointer text-white font-semibold">
        Continente
      </p>
      <Select
        choices={Continents}
        placeholder="Seleccione Pais"
        name="continent"
        id="continent"
      ></Select>
    </div>
  );
};

export default VehicleBrandFilter;
