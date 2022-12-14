import { useState } from 'react';

import Filter from '@components/filter/Filter';
import RadioButtonWithSelects from '@components/filter/subFilters/RadioButtonWithSelects';
import { Form } from '@components/forms/Form';
import Header from '@components/layout/Header';

import { Field } from '../../forms/Field';
import Button from '../Button';
import Container from '../Container';
import useTranslate from '@hooks/useTranslate';

interface FastSearchInterface {
  filters: {
    tag: string;
    choices: { value: string; text: string }[];
    name: string;
    placeholder: string;
    selectName: string;
  }[];
  classNameInput?: string;
  classNameSelect?: string;
}

const DetailSearch = ({ filters, ...props }: FastSearchInterface) => {
  const t = useTranslate();
  return (
    <>
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
              {...props}
            ></Filter>
          )
        )}
        <RadioButtonWithSelects
          name={'price_rent'}
          placeholder={t('Indique Precio de alquiler')}
          selectName={'Precio de Alquiler'}
        />
      </div>
      <Button className="capitalize w-fit text-center" type="submit">
        {t('enviar')}
      </Button>
    </>
  );
};

export default DetailSearch;
