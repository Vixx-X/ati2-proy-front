import type { NextPage } from 'next';

import Filter from '@components/filter/Filter';
import DragAndDrop from '@components/forms/DragAndDrop';
import Form from '@components/forms/Form';
import RadioButton from '@components/forms/RadioButton';
import Select from '@components/forms/Select';
import FiltersBar from '@components/layout/FiltersBar/FiltersBar';
import MainContainer from '@components/layout/MainContainer';

const Landing: NextPage = () => {
  const handleDrag = (File: any) => {
    console.log('file', File);
  };

  return (
    <MainContainer>
      {/* <FiltersBar/> */}
      <div className="max-w-[100px] max-h-[100px] w-[100px] h-[100px] border-black border">
        <DragAndDrop handleDrag={handleDrag} />
      </div>
    </MainContainer>
  );
};

export default Landing;
