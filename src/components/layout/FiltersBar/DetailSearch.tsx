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

const DetailSearch = ({ filters }: FastSearchInterface) => {
  return (
    <div className="">
      <details>
        <summary>Busqueda Detallada</summary>
        <Form
          initialValues={initialValues}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          <div className="flex gap-2 flex-nowrap">
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
          <button type="submit">ENVIAR</button>
        </Form>
      </details>
    </div>
  );
};

export default DetailSearch;
