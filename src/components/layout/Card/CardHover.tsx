import React from 'react';

import GenericComponent from '../Parser/Parse';

const CardHover = ({ title, position, address, details, ...props }: any) => {
  return (
    <div
      className={`h-80 flex flex-col overflow-scroll w-[535px] border rounded-md border-2 border-secundary p-4 absolute bg-white z-10 transition ease-in-out ${position}`}
      {...props}
    >
      <h4 className="text-darkprimary text-2xl font-bold capitalize mb-0">
        {title}
      </h4>
      <div className="grow flex flex-col justify-center mt-0">
        <p className="text-base text-black font-normal">
          <GenericComponent content={details} />
        </p>
        <ul className="list-disc text-blue-600 ml-4 my-4">
          <li>
            <a className="underline font-bold">Ver fotos</a>
          </li>
          <li>
            <a className="underline font-bold">Ver videos</a>
          </li>
        </ul>
        <p>
          <span className="text-darkprimary font-bold font-bold">
            Ubicación exacta:{' '}
          </span>
          <span className="text-base text-black font-normal">{`${address.line1}. ${address.line2}`}</span>
        </p>
      </div>
    </div>
  );
};

export default CardHover;
