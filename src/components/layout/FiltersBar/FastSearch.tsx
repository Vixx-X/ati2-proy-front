import { useState } from 'react';

import Filter from '@components/filter/Filter';
import { Form } from '@components/forms/Form';
import Header from '@components/layout/Header';

import Container from '../Container';

interface FastSearchInterface {
  filters: {
    tag: string;
    choices: { value: string; text: string }[];
    name: string;
    placeholder: string;
    selectName: string;
  }[];
}

const initialValues = {
  contient: '',
  contry: '',
  state: '',
  vehicleType: '',
  vehicleBrand: '',
  vehicleModel: '',
};

const FastSearch = ({ filters }: FastSearchInterface) => {
  return (
    <div className="">
      <details>
        <summary>Busqueda Rapida</summary>
        <Form
          initialValues={initialValues}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          <div className="flex gap-2 flex-wrap">
            {filters?.map(
              ({ tag, choices, name, placeholder, selectName }, index) => (
                <Filter
                  key={index}
                  tag={tag}
                  choices={choices}
                  name={name}
                  placeholder={placeholder}
                  selectName={selectName}
                ></Filter>
              )
            )}
          </div>
          <div className='flex mt-4 justify-center gap-6'>
            <button className='px-8 font-semibold py-2 rounded text-white bg-yellow-400' type="submit">Buscar Vehiculos</button>
            <button className='px-8 font-semibold py-2 rounded text-white bg-yellow-400' type="submit">Cancelar</button>
          </div> 
        </Form>
      </details>
    </div>
  );
};

export default FastSearch;
