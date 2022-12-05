import React, { useEffect, useState } from 'react';

import { classNames } from '@utils/classNames';

import Button from '../Button';
import GenericComponent from '../Parser/Parse';
import SplideImageComponent from '../Splide';
import EditOptionsIcons from './EditOptions';
import Prices from './Prices';

export enum StatusVehicle {
  NEW = 'new',
  USED = 'used',
}

const VehiclePostList = (props: any) => {
  const {
    id,
    author,
    address,
    contact,
    details,
    media,
    rental_price,
    currency,
    sale_price,
    vehicle,
    services,
    vehicle_state,
    sale_type,
  } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <div className="md:flex md:flex-wrap">
        <div className="md:w-4/12 lg:w-2/12 flex flex-col gap-y-2">
          <SplideImageComponent images={media} />
          <a className="text-blue-600 underline cursor-pointer font-bold">
            Más detalles
          </a>
        </div>
        <div className="md:w-8/12 lg:w-5/12 relative px-4">
          <div>
            <Prices
              rental_price={rental_price}
              currency={currency}
              sale_price={sale_price}
            />
            <p className="capitalize">
              <h4 className="text-darkprimary font-bold inline">marca : </h4>
              {vehicle?.brand}
            </p>
            <p className="capitalize">
              <h4 className="text-darkprimary font-bold inline">modelo : </h4>
              {vehicle?.model}
            </p>
            <p className="capitalize">
              <h4 className="text-darkprimary font-bold inline">año : </h4>
              {vehicle?.year}
            </p>
            <p className="capitalize">
              <h4 className="text-darkprimary font-bold inline">detalles : </h4>
              <GenericComponent content={details} />
            </p>
            <p className="capitalize">
              <h4 className="text-darkprimary font-bold inline">
                accesorios :{' '}
              </h4>
              <a className="underline text-red">Click aquí</a>
            </p>
            <p className="capitalize">
              <h4 className="text-darkprimary font-bold inline">fotos : </h4>
              <a className="underline text-red">Click aquí</a>
            </p>
            <p className="capitalize">
              <h4 className="text-darkprimary font-bold inline">videos : </h4>
              <a className="underline text-red">Click aquí</a>
            </p>
            <p className="capitalize">
              <h4 className="text-darkprimary font-bold inline">
                servicios al día :
              </h4>
              <GenericComponent content={services} />
            </p>
            <p>
              <a className="text-red">
                Haga click aquí para ver ubicación exacta{' '}
              </a>
              <span className="text-blue-600 underline">
                Ver ubicación exacta
              </span>
            </p>
            <div className="2xl:absolute top-0 right-4 flex gap-x-4">
              <p
                className={classNames(
                  vehicle_state == StatusVehicle.NEW
                    ? 'text-green'
                    : 'text-red',
                  'uppercase text-2xl font-bold'
                )}
              >
                {vehicle_state}
              </p>
              <Button>contactar al anunciante</Button>
            </div>
          </div>
        </div>
        <div className="md:w-5/12 lg:w-2/12 flex flex-col gap-y-5">
          <div>
            <h4 className="font-bold capitalize">country</h4>
            <p className="capitalize">{address?.city?.state?.country.name}</p>
          </div>
          <div>
            <h4 className="font-bold capitalize">state</h4>
            <p className="capitalize">{address?.city?.state?.name}</p>
          </div>
          <div>
            <h4 className="font-bold capitalize">zone</h4>
            <p className="capitalize">{address?.city?.name}</p>
          </div>
          <p className="text-darkprimary uppercase font-bold underline">
            {vehicle?.type}
          </p>
        </div>
        <div className="md:w-5/12 lg:w-2/12 flex justify-between">
          <div className="flex flex-col gap-y-10">
            <p className="text-red uppercase font-bold">{sale_type}</p>
            <a className="underline cursos-pointer text-blue-600">Ver fotos</a>
            <a className="underline cursos-pointer text-blue-600">Ver videos</a>
            <a className="underline cursos-pointer text-blue-600">
              Ver información completa
            </a>
          </div>
          <div className="flex flex-col gap-y-8 items-start">
            <EditOptionsIcons author={author} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclePostList;
