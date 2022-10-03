import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import LogInModal from '@components/modals/LogInModal';

import {
  Address,
  Contact,
  Multimedia,
  Post,
  SaleType,
  StatusVehicle,
  User,
  Vehicle,
} from 'user';

import Button from './Button';
import ButtonSet from './ButtonSet';
import Container from './Container';

interface VehiclePostProps extends Props {
  author: User;
  id: string;
  address: Address;
  contact: Contact;
  details: string;
  vehicle_post: {
    rental_price: number;
    sale_price: number;
    currency: string;
    sale_type: SaleType;
    vehicle: Vehicle;
    accesories: string;
    services: string;
    state: StatusVehicle;
    images: Multimedia[];
  };
}

export const VehiclePost = (props: any) => {
  const { id, author, address, contact, details, vehicle_post } = props;
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="max-w-[535px] max-h-[535px]">
      <div className="sm:flex">
        <div>
          <div className="sm:mr-4 mb-2">
            <header className="sm:hidden mb-2 uppercase text-lg font-bold">
              <h2 className="underline text-blue-600">
                {vehicle_post.vehicle.brand} - {vehicle_post.vehicle.model}
              </h2>
              <p className="underline text-red">{vehicle_post.sale_type}</p>
              <p className="underline text-green">{vehicle_post.state}</p>
            </header>
            <div className="w-full sm:max-w-[250px] sm:max-h-[170px]">
              <img
                alt={vehicle_post.images[0].text}
                src={vehicle_post.images[0].file}
                className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity"
              />
            </div>
          </div>
          <div className="font-bold text-lg sm:flex sm:justify-center sm:items-center">
            <div>
              {vehicle_post.rental_price && (
                <p>{`Rental price: ${vehicle_post.rental_price} ${vehicle_post.currency}`}</p>
              )}
              {vehicle_post.sale_price && (
                <p>{`Sale price: ${vehicle_post.sale_price} ${vehicle_post.currency}`}</p>
              )}
            </div>
          </div>
          <nav>
            <ul className="list-disc ml-4 text-lg my-4 font-bold text-blue-600 underline cursor-pointer">
              <li>
                <a>Ver detalles</a>
              </li>
              <li>
                <a>Ver accesorios</a>
              </li>
              <li>
                <a>Ver fotos</a>
              </li>
              <li>
                <a>Ver videos</a>
              </li>
              <li>
                <a>Ver servicios al día</a>
              </li>
              <li>
                <a>Ver ubicación exacta</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <header className="hidden sm:block sm:text-center uppercase text-lg sm:text-xl font-bold">
            <h2 className="underline text-blue-600">
              {vehicle_post.vehicle.brand} - {vehicle_post.vehicle.model}
            </h2>
            <p className="underline text-red">{vehicle_post.sale_type}</p>
            <p className="underline text-green">{vehicle_post.state}</p>
          </header>
          <div className="sm:flex sm:flex-col justify-center items-center">
            <div className="capitalize text-lg my-4">
              <h4>
                <span className="font-bold underline">country:</span>{' '}
                {address.city?.state.country.name}
              </h4>
              <h4>
                <span className="font-bold underline">state:</span>{' '}
                {address.city?.state.name}
              </h4>
              <h4>
                <span className="font-bold underline">zone:</span>{' '}
                {address.city?.name}
              </h4>
            </div>
            <Button className="sm:mt-16">contactar al anunciante</Button>
          </div>
        </div>
      </div>
      <a className="sm:text-center underline text-red text-lg sm:text-xl mt-2 font-bold block">
        Ver información completa
      </a>
    </div>
  );
};

export default VehiclePost;
