import React from 'react';

export const InfoRegister = ({}) => {
  return (
    <section>
      <h2 className="uppercase font-bold text-center text-xl mt-6">
        panel de registro
      </h2>
      <hr className="mb-8 mt-2" />
      <div>
        <p>
          <span className="text-red">*</span> Estos son los pasos a seguir para
          completar su registro
        </p>
        <p>
          <span className="text-red">*</span> Si en algún momento necesita
          acceder a una sección del registro,{' '}
          <a className="underline text-blue-600">
            haga clic en en panel de color verde, que sea de su preferencia
          </a>
        </p>
      </div>
    </section>
  );
};

export default InfoRegister;
