import React, { useState } from 'react';

import DetailsModal from '@components/modals/DetailsModal';
import PhotosModal from '@components/modals/PhotosModal';

import {
  Address,
  Contact,
  Multimedia,
  SaleType,
  StatusVehicle,
  User,
  Vehicle,
} from 'user';

import Button from '../Button';
import CardHover from '../Card/CardHover';

interface VehiclePostPhotoProps extends Props {
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

const optionsLink = [
  {
    text: 'details',
    hover: true,
  },
  {
    text: 'accesories',
    hover: true,
  },
  {
    text: 'photos',
    hover: true,
  },
  {
    text: 'videos',
    hover: true,
  },
  {
    text: 'services',
    hover: false,
  },
  {
    text: 'exact address',
    hover: true,
  },
];

const VehiclePostPhoto = ({ index, ...props }: any) => {
  const { address, details, vehicle_post } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [titleHover, setTitle] = useState<string>('details');
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  const handleMouseOver = (title: string) => {
    setTitle(title);
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      setIsHovering(false);
    }, 200);
  };

  return (
    <div className="max-w-[535px] max-h-[535px]">
      <div className="sm:flex">
        <div className="relative">
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
            <ul className="list-disc ml-4 text-lg my-4 font-bold text-blue-600 underline">
              {optionsLink.map(({ text, hover }) => (
                <li className='group"'>
                  <span className="relative">
                    <a
                      onMouseMove={() => handleMouseOver(text)}
                      onMouseLeave={hover ? handleMouseOut : () => {}}
                      onClick={() => setShowModal(true)}
                      className="cursor-pointer"
                    >
                      {`See ${text}`}
                    </a>
                    {hover &&
                      (isHoveringCard || isHovering) &&
                      text === titleHover && (
                        <CardHover
                          title={titleHover}
                          onMouseOver={() => setIsHoveringCard(true)}
                          onMouseLeave={() => setIsHoveringCard(false)}
                          onClick={() => setShowModal(true)}
                          position={`transition hidden sm:flex top-[-180px] sm:right-[-535px]
                          ${
                            index % 2 === 0
                              ? 'lg:right-[-535px]'
                              : 'lg:left-[-540px]'
                          }
                          ${
                            index % 3 === 2
                              ? '2xl:left-[-540px] 2xl:right-auto'
                              : '2xl:right-[-535px] 2xl:left-auto'
                          }
                        `}
                          {...props}
                        />
                      )}
                  </span>
                </li>
              ))}
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
      {titleHover !== 'photos' && titleHover !== 'videos' ? (
        <DetailsModal
          showModal={showModal}
          setShowModal={setShowModal}
          title={titleHover}
          details={details}
          accesories={vehicle_post.accesories}
          services={vehicle_post.services}
          address={`${address.line1}. ${address.line2}`}
        />
      ) : (
        <PhotosModal
          showModal={showModal}
          setShowModal={setShowModal}
          title={titleHover}
          medias={vehicle_post.images}
          address={address}
          vehicle_post={vehicle_post}
        />
      )}
    </div>
  );
};

export default VehiclePostPhoto;
