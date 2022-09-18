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
          <div className="flex">
            {filters?.map(
              ({ tag, choices, name, placeholder, selectName }, index) => (
                <div key={index}>
                  <Filter
                    tag={tag}
                    choices={choices}
                    name={name}
                    placeholder={placeholder}
                    selectName={selectName}
                  ></Filter>
                </div>
              )
            )}
          </div>
          <button type="submit">ENVIAR</button>
        </Form>
      </details>
    </div>
  );
};

export default FastSearch;
