import React from 'react';

import useTranslate from '@hooks/useTranslate';

const HeaderPost = ({ vehicle, vehicle_state, sale_type, className }: any) => {
  console.log(sale_type);
  const t = useTranslate();

  type VehicleState = 'NEW' | 'USED';

  type SaleType = 'RENT' | 'SALE' | 'BOTH';

  const translateVehicleState = (str: VehicleState) => {
    const data = {
      NEW: 'NUEVO',
      USED: 'USADO',
    };
    return data[str];
  };

  const translateSaleType = (str: SaleType) => {
    const data = {
      RENT: 'ALQUILER',
      SALE: 'VENTA',
      BOTH: 'AMBOS',
    };
    return data[str];
  };

  return (
    <header
      className={`hidden sm:block uppercase text-lg sm:text-xl font-bold ${className}`}
    >
      <h2 className="underline text-blue-600">
        {vehicle?.brand} - {vehicle?.model}
      </h2>
      <p className="underline text-red">{t(translateSaleType(sale_type))}</p>
      <p className="underline text-green">
        {t(translateVehicleState(vehicle_state))}
      </p>
    </header>
  );
};

export default HeaderPost;
