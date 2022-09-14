import type { NextPage } from 'next';

import Filter from '@components/filter/Filter';
import Form from '@components/forms/Form';
import RadioButton from '@components/forms/RadioButton';
import Select from '@components/forms/Select';
import MainContainer from '@components/layout/MainContainer';

const Landing: NextPage = () => {
  const saluda = () => {
    console.log('SALUDO');
  };

  return (
    <MainContainer>
      <Form initialValues={{ continent: '' }} onSubmit={() => {}}>
        <Filter tag="continent" onClick={saluda()}></Filter>
        <RadioButton
          placeholder={'radio'}
          choices={[{ value: '1', text: 'uno' }]}
        ></RadioButton>
      </Form>
    </MainContainer>
  );
};

export default Landing;
