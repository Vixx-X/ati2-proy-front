import { useState } from 'react';

import { Form } from '@components/forms/Form';

import FastSearch from './FastSearch';
import { Filters } from '@utils/Filters';
import DetailSearch from './DetailSearch'
import { Field } from 'formik';

const filters = [
  {
    tag: 'checkBox',
    choices: [
      { value: 'cont1', text: 'continente1' },
      { value: 'cont2', text: 'continente2' },
      { value: 'cont3', text: 'continente3' },
    ],
    name: 'contient',
    placeholder: 'Seleccione Continente',
    selectName: 'Continente',
  },
  {
    tag: 'input',
    choices: [],
    name: 'input',
    placeholder: 'Escriba Input',
    selectName: 'Escriba un Input',
  },
]

const FiltersBar = ({ children }: any) => {
  const [isOpenFastSearch, setIsOpenFastSearch] = useState(false);
  const [isOpenDetailSearch, setIsOpenDetailSearch] = useState(false);

  return (
    <div className="">
      <FastSearch filters={Filters} />
      <DetailSearch filters={filters}></DetailSearch>
    </div>
  );
};

export default FiltersBar;
