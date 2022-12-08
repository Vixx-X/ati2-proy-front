import type { NextPage } from 'next';

import Field from '@components/forms/Field';
import Form from '@components/forms/Form';

const initialValues = {
  test: [],
  bolean: false,
};

const Test: NextPage = () => {
  
  return (
    <div>
      <Form
        initialValues={initialValues}
        onSubmit={(value) => {
          console.log('VALUE', value);
        }}
      >
       {/*  <div className="flex gap-3  ">
          <div>
            <p>1</p>
            <Field type="checkbox" name="test" value="1" className="w-4 h-4" />
          </div>
          <div>
            <p>2</p>
            <Field type="checkbox" name="test" value="2" className="w-4 h-4" />
          </div>
          <div>
            <p>3</p>
            <Field type="checkbox" name="test" value="3" className="w-4 h-4" />
          </div>
        </div> */}
        <div>
          <Field name="bolean" type="checkbox"></Field>
        </div>
        <button type="submit">enviar</button>
      </Form>
    </div>
  );
};

export default Test;
