import React from 'react';

const HeaderPost = ({ vehicle_post, className }: any) => {
  return (
    <header
      className={`hidden sm:block sm:text-center uppercase text-lg sm:text-xl font-bold ${className}`}
    >
      <h2 className="underline text-blue-600">
        {vehicle_post.vehicle.brand} - {vehicle_post.vehicle.model}
      </h2>
      <p className="underline text-red">{vehicle_post.sale_type}</p>
      <p className="underline text-green">{vehicle_post.state}</p>
    </header>
  );
};

export default HeaderPost;
