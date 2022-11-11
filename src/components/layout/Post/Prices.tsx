import React from 'react';

export enum StatusVehicle {
  NEW = 'new',
  USED = 'used',
}

const Prices = (vehicle_post: any) => {
  return (
    <div className="font-bold">
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
