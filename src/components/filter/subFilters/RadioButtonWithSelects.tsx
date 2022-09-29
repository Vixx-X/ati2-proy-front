import { useState } from 'react';

import { Field } from 'formik';

import Checkbox from '../../forms/Checkbox';
import Filter from '../Filter';

interface RadioButtonWithSelectsProps {
  name: string;
  placeholder: string;
  selectName: string;
}

export const RadioButtonWithSelects = ({
  selectName,
  name,
  placeholder,
  ...props
}: RadioButtonWithSelectsProps) => {
  const [open, setopen] = useState(true);

  const handleChange = () => {
    setopen(!open);
  };

  return (
    <div className="w-60">
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        {selectName}
      </p>
      <div {...props} className="flex flex-col p-2">
        <label>
          <input
            onChange={handleChange}
            name="open"
            checked={open}
            type={'radio'}
          ></input>{' '}
          Por rango
        </label>
        {open && (
          <div className="flex flex-col gap-3">
            <Filter
              tag={'input'}
              choices={[]}
              name={name+".min"}
              placeholder={placeholder}
              selectName={'Minimo'}
            ></Filter>
            <Filter
              tag={'input'}
              choices={[]}
              name={name+".max"}
              placeholder={placeholder}
              selectName={'Maximo'}
            ></Filter>
          </div>
        )}
        <label>
          <input onChange={handleChange} name="open" type={'radio'} /> Cualquier
          precio{' '}
        </label>
      </div>
    </div>
  );
};

export default RadioButtonWithSelects;
