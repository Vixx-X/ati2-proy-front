import React from 'react';

const Prices = ({ rental_price, currency, sale_price }: any) => {
  return (
    <div>
      {rental_price && (
        <p>{`Rental price: ${rental_price} ${currency}`}</p>
      )}
      {sale_price && (
        <p>{`Sale price: ${sale_price} ${currency}`}</p>
      )}
    </div>
  );
};

export default Prices;
