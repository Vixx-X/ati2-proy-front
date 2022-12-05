import React from 'react';

const HeaderPost = ({ vehicle, vehicle_state, sale_type, className }: any) => {
  return (
    <header
      className={`hidden sm:block sm:text-center uppercase text-lg sm:text-xl font-bold ${className}`}
    >
      <h2 className="underline text-blue-600">
        {vehicle?.brand} - {vehicle?.model}
      </h2>
      <p className="underline text-red">{sale_type}</p>
      <p className="underline text-green">{vehicle_state}</p>
    </header>
  );
};

export default HeaderPost;
