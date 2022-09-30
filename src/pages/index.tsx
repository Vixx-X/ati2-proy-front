import type { NextPage } from 'next';

import Filter from '@components/filter/Filter';
import Form from '@components/forms/Form';
import RadioButton from '@components/forms/RadioButton';
import Select from '@components/forms/Select';
import MainContainer from '@components/layout/MainContainer';
import FiltersBar from '@components/layout/FiltersBar/FiltersBar';
import DragAndDrop from '@components/forms/DragAndDrop';

const Landing: NextPage = () => {
  return (
    <MainContainer>
      {/* <FiltersBar/> */}
      <div className='w-[100px] h-[100px]'>
        <DragAndDrop />
      </div>
    </MainContainer>
  );
};

export default Landing;
