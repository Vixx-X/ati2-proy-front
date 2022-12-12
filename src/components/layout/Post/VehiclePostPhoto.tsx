import React, { useState } from 'react';

import Image from 'next/image';

import DetailsModal from '@components/modals/DetailsModal';
import PhotosModal from '@components/modals/PhotosModal';

import useTranslate from '@hooks/useTranslate';

import { DEFAULT_IMAGE } from '@data/fakeData';
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
import AddressPost from './Address';
import EditOptionsIcons from './EditOptions';
import HeaderPost from './Header';
import Prices from './Prices';

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

const VehiclePostPhoto = ({ index, ...props }: any) => {
  const {
    id,
    author,
    address,
    details,
    vehicle,
    vehicle_state,
    sale_type,
    images,
    videos,
    rental_price,
    currency,
    sale_price,
    accesories,
    services,
    setShowModalContact,
  } = props;
  const media = images?.[0];
  const [showModal, setShowModal] = useState<boolean>(false);
  const [titleHover, setTitle] = useState<string>('');
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const t = useTranslate();

  const optionsLink = [
    {
      text: t('detalles'),
      hover: true,
    },
    {
      text: t('accesorios'),
      hover: true,
    },
    {
      text: t('fotos'),
      hover: true,
    },
    {
      text: t('videos'),
      hover: true,
    },
    {
      text: t('servicios'),
      hover: false,
    },
    {
      text: t('ubicación exacta'),
      hover: true,
    },
  ];

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
            <HeaderPost
              className="sm:hidden mb-2"
              vehicle={vehicle}
              vehicle_state={vehicle_state}
              sale_type={sale_type}
            />
            <div className="w-full sm:max-w-[250px] sm:max-h-[170px] text-center">
              <Image
                src={images.length ? images[0] : DEFAULT_IMAGE}
                alt={images.length ? images[0] : 'placeholder-vehicle'}
                className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity"
                unoptimized
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="font-bold text-lg sm:flex sm:justify-center sm:items-center">
            <Prices
              rental_price={rental_price}
              currency={currency}
              sale_price={sale_price}
            />
          </div>
          <nav>
            <ul className="list-disc ml-4 text-lg my-4 font-bold text-blue-600 underline">
              {optionsLink.map(({ text, hover }) => (
                <li className="group" key={text}>
                  <span className="relative">
                    <a
                      onMouseMove={() => handleMouseOver(text)}
                      onMouseLeave={hover ? handleMouseOut : () => {}}
                      onClick={() => setShowModal(true)}
                      className="cursor-pointer"
                    >
                      {t('Ver')} {text}
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
          <HeaderPost
            vehicle={vehicle}
            vehicle_state={vehicle_state}
            sale_type={sale_type}
            className="sm:text-center"
          />
          <EditOptionsIcons
            author={author}
            id={id}
            className="flex gap-x-2 justify-center my-4"
            setShowModal={setShowModal}
          />
          <div className="sm:flex sm:flex-col justify-center items-center">
            <AddressPost address={address} />
            <Button
              onClick={() => {
                setShowModalContact(true);
              }}
              className="sm:mt-16"
            >
              {t('Contactar al anunciante')}
            </Button>
          </div>
        </div>
      </div>
      {/* <a className="sm:text-center underline text-red text-lg sm:text-xl mt-2 font-bold block">
        {t('Ver información completa')}
      </a> */}
      <p
        className="sm:text-center underline text-red text-lg sm:text-xl mt-2 font-bold block cursor-pointer"
        onClick={() => {
          setTitle('');
          setShowModal(true);
        }}
      >
        {t('Ver información completa')}
      </p>
      {titleHover !== 'fotos' && titleHover !== 'videos' ? (
        <DetailsModal
          showModal={showModal}
          setShowModal={setShowModal}
          title={titleHover}
          details={details}
          accesories={accesories}
          services={services}
          address={`${address?.line1}. ${address?.line2}`}
        />
      ) : (
        <PhotosModal
          showModal={showModal}
          setShowModal={setShowModal}
          title={titleHover}
          images={images}
          videos={videos}
          address={address}
          vehicle={vehicle}
          vehicle_state={vehicle_state}
          sale_type={sale_type}
          rental_price={rental_price}
          currency={currency}
          sale_price={sale_price}
        />
      )}
    </div>
  );
};

export default VehiclePostPhoto;
