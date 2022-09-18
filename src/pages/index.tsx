import type { NextPage } from 'next';

import Filter from '@components/filter/Filter';
import Form from '@components/forms/Form';
import RadioButton from '@components/forms/RadioButton';
import Select from '@components/forms/Select';
import MainContainer from '@components/layout/MainContainer';
import FiltersBar from '@components/layout/FiltersBar/FiltersBar';

const Landing: NextPage = () => {
  return (
    <MainContainer>
      <FiltersBar/>
    </MainContainer>
  );
};

export default Landing;
