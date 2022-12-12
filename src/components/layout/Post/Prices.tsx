import React from 'react';

import useTranslate from '@hooks/useTranslate';

const Prices = ({ rental_price, currency, sale_price }: any) => {
  const t = useTranslate();
  return (
    <div>
      {rental_price && (
        <p>
          {t('Precio de Alquiler')} {rental_price} {currency}
        </p>
      )}
      {sale_price && (
        <p>
          {t('Precio de Venta')} {currency} {sale_price}
        </p>
      )}
    </div>
  );
};

export default Prices;
