import React, { useEffect, useState } from 'react';

import { classNames } from '@utils/classNames';

import { faEye, faPen, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../Button';
import GenericComponent from '../Parser/Parse';
import SplideImageComponent from '../Splide';
import Prices from './Prices';

export enum StatusVehicle {
  NEW = 'new',
  USED = 'used',
}

const VehiclePostList = (props: any) => {
  const { id, author, address, contact, details, vehicle_post } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <div className="md:flex md:flex-wrap">
        <div className="md:w-4/12 lg:w-2/12 flex flex-col gap-y-2">
          <SplideImageComponent images={vehicle_post.images} />
          <a className="text-blue-600 underline cursor-pointer font-bold">
            Más detalles
          </a>
        </div>
        <div className="md:w-8/12 lg:w-5/12 relative px-4">
          <div>
            <Prices vehicle_post={vehicle_post} />
            <p className="capitalize">
              <h4 className="text-darkprimary font-bold inline">marca : </h4>
              {vehicle_post.vehicle.brand}
            </p>
            <p className="capitalize">
              <h4 className="text-darkprimary font-bold inline">modelo : </h4>
              {vehicle_post.vehicle.model}
            </p>
            <p className="capitalize">
              <h4 className="text-darkprimary font-bold inline">año : </h4>
              {vehicle_post.vehicle.year}
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
              <GenericComponent content={vehicle_post.services} />
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
                  vehicle_post.state == StatusVehicle.NEW
                    ? 'text-green'
                    : 'text-red',
                  'uppercase text-2xl font-bold'
                )}
              >
                {vehicle_post.state}
              </p>
              <Button>contactar al anunciante</Button>
            </div>
          </div>
        </div>
        <div className="md:w-5/12 lg:w-2/12 flex flex-col gap-y-5">
          <div>
            <h4 className="font-bold capitalize">country</h4>
            <p className="capitalize">{address.city?.state.country.name}</p>
          </div>
          <div>
            <h4 className="font-bold capitalize">state</h4>
            <p className="capitalize">{address.city?.state.name}</p>
          </div>
          <div>
            <h4 className="font-bold capitalize">zone</h4>
            <p className="capitalize">{address.city?.name}</p>
          </div>
          <p className="text-darkprimary uppercase font-bold underline">
            {vehicle_post.vehicle.type}
          </p>
        </div>
        <div className="md:w-5/12 lg:w-2/12 flex justify-between">
          <div className="flex flex-col gap-y-10">
            <p className="text-red uppercase font-bold">
              {vehicle_post.sale_type}
            </p>
            <a className="underline cursos-pointer text-blue-600">Ver fotos</a>
            <a className="underline cursos-pointer text-blue-600">Ver videos</a>
            <a className="underline cursos-pointer text-blue-600">
              Ver información completa
            </a>
          </div>
          <div className="flex flex-col gap-y-8 items-start">
            <FontAwesomeIcon icon={faEye} />
            <FontAwesomeIcon icon={faPen} />
            <FontAwesomeIcon icon={faX} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclePostList;
