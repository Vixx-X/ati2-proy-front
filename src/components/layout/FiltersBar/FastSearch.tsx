import { useState } from 'react';

import Filter from '@components/filter/Filter';
import { Form } from '@components/forms/Form';
import Header from '@components/layout/Header';

import Button from '../Button';
import Container from '../Container';

interface FastSearchInterface extends Props {
  filters: {
    tag: string;
    choices: { value: string; text: string }[];
    name: string;
    placeholder: string;
    selectName: string;
  }[];
  layoutFilters: string;
  classNameInput?: string;
  classNameSelect?: string;
}

const FastSearch = ({
  filters,
  layoutFilters,
  ...props
}: FastSearchInterface) => {
  return (
    <div className="w-full">
      <div className={`mb-4 ${layoutFilters}`}>
        {filters?.map(
          ({ tag, choices, name, placeholder, selectName }, index) => (
            <Filter
              key={index}
              tag={tag}
              choices={choices}
              name={name}
              placeholder={placeholder}
              selectName={selectName}
              {...props}
            ></Filter>
          )
        )}
      </div>
      {/* <div className="flex gap-x-4">
        <Button type="submit" className="capitalize w-fit">
          buscar
        </Button>
        <Button className="capitalize w-fit">cancelar</Button>
      </div> */}
    </div>
  );
};

export default FastSearch;
