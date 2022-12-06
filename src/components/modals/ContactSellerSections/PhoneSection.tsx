import { getBusinessInfo } from '@fetches/contact';

import useSWR from 'swr';

export const PhoneSection = ({}) => {
  const { data } = useSWR('contact', () => getBusinessInfo());

  return (
    <div>
      <h2 className="text-red text-xl font-bold">Llamar por teléfono</h2>
      <div className="mb-2">
        <div className="flex py-2">
          <label className="capitalize mr-2 w-3/12 block font-bold text-darkprimary">
            teléfono:
          </label>
          <p className="w-9/12">{data?.phone}</p>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex py-2">
          <label className="capitalize mr-2 w-3/12 block font-bold text-darkprimary">
            nombre y apellido:
          </label>
          <p className="w-9/12">Jose J Sánchez</p>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex py-2">
          <label className="capitalize mr-2 w-3/12 block font-bold text-darkprimary">
            país
          </label>
          <p className="w-9/12">Switzerland</p>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex py-2">
          <label className="capitalize mr-2 w-3/12 block font-bold text-darkprimary">
            días de contacto:
          </label>
          <p className="w-9/12">
            Lunes a Viernes / Sábado y Domingo /Todos los días / Lunes, martes,
            Miércoles, Jueves / Lunes, Martes y Jueves
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneSection;