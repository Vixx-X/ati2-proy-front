import React from 'react';

const Prices = ({ vehicle_post }: any) => {
  return (
    <div>
      {vehicle_post.rental_price && (
        <p>{`Rental price: ${vehicle_post.rental_price} ${vehicle_post.currency}`}</p>
      )}
      {vehicle_post.sale_price && (
        <p>{`Sale price: ${vehicle_post.sale_price} ${vehicle_post.currency}`}</p>
      )}
    </div>
  );
};

export default Prices;
