import { useState } from 'react';

import { Form } from '@components/forms/Form';

import FastSearch from './FastSearch';
import { Filters } from '@utils/Filters';


const FiltersBar = ({ children }: any) => {
  const [isOpenFastSearch, setIsOpenFastSearch] = useState(false);
  const [isOpenDetailSearch, setIsOpenDetailSearch] = useState(false);

  return (
    <div className="">
      <FastSearch filters={Filters} />
    </div>
  );
};

export default FiltersBar;
