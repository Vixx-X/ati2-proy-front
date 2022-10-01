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
    <div>
      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
        {selectName}
      </p>
      <div {...props} className="flex flex-col">
        <label>
          <input onChange={handleChange} name="open" type={'radio'} /> Cualquier
          precio{' '}
        </label>
        <label>
          <input
            onChange={handleChange}
            name="open"
            checked={open}
            type={'radio'}
          ></input>{' '}
          Por rango
        </label>
        <div className={`flex gap-3 md:my-4 ${open ? 'visible' : 'invisible'}`}>
          <Filter
            tag={'input'}
            choices={[]}
            name={name + '.min'}
            placeholder={placeholder}
            selectName={'Minimo'}
          ></Filter>
          <Filter
            tag={'input'}
            choices={[]}
            name={name + '.max'}
            placeholder={placeholder}
            selectName={'Maximo'}
          ></Filter>
        </div>
      </div>
    </div>
  );
};

export default RadioButtonWithSelects;
