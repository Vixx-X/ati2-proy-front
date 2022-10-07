import React, { useState } from 'react';

const CardHover = ({ title, position, ...props }: any) => {
  const { address, details } = props;
  return (
    <div
      className={`h-80 w-[535px] border rounded-md border-2 border-secundary p-4 absolute bottom-[25px] right-[-480px] bg-white z-10 transition ease-in-out ${position}`}
    >
      <header>
        <h4 className="text-darkprimary text-2xl font-bold capitalize">{title}</h4>
        <p>{details}</p>
      </header>
      <ul className="list-disc text-blue-600 ml-4 my-4">
        <li>
          <a className="underline font-bold">Ver fotos</a>
        </li>
        <li>
          <a className="underline font-bold">Ver videos</a>
        </li>
        <li>
          <a className="underline font-bold">Ver ubicación exacta</a>
        </li>
      </ul>
      <p>
        <span className="text-darkprimary font-bold font-bold">
          Ubicación exacta:{' '}
        </span>
        {`${address.line1}. ${address.line2}`}
      </p>
    </div>
  );
};

export default CardHover;
