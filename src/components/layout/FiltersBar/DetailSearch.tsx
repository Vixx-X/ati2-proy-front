import { useState } from 'react';

import Filter from '@components/filter/Filter';
import RadioButtonWithSelects from '@components/filter/subFilters/RadioButtonWithSelects';
import { Form } from '@components/forms/Form';
import Header from '@components/layout/Header';

import { Field } from '../../forms/Field';
import Button from '../Button';
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

const initialValues = {};

const DetailSearch = ({ filters }: FastSearchInterface) => {
  return (
    <div className="w-full">
      <details className="w-full">
        <summary className="w-full mb-2 text-lg">Busqueda Detallada</summary>
        <Form
          initialValues={initialValues}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          <div className="grid md:grid-cols-2 gap-2 ">
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
            <RadioButtonWithSelects
              name={'price_rent'}
              placeholder={'Indique Precio de alquiler'}
              selectName={'Precio de Alquiler'}
            />
          </div>
          <Button className="capitalize" type="submit">
            enviar
          </Button>
        </Form>
      </details>
    </div>
  );
};

export default DetailSearch;
