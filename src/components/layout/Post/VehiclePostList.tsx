import React, { useState } from 'react';

import DetailsModal from '@components/modals/DetailsModal';
import PhotosModal from '@components/modals/PhotosModal';

import useTranslate from '@hooks/useTranslate';

import { classNames } from '@utils/classNames';

import { DEFAULT_IMAGE } from '@data/fakeData';

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
    images,
    rental_price,
    currency,
    sale_price,
    vehicle,
    services,
    accesories,
    videos,
    vehicle_state,
    sale_type,
    setShowModalContact,
  } = props;
  const t = useTranslate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [titleHover, setTitle] = useState('');

  return (
    <div className="w-full">
      <div className="md:flex md:flex-wrap">
        <div className="md:w-4/12 lg:w-2/12 flex flex-col gap-y-2">
          {images.length > 1 ? (
            <SplideImageComponent images={images} />
          ) : (
            <img
              src={images.length ? images[0] : DEFAULT_IMAGE}
              alt={images.length ? images[0] : 'placeholder-vehicle'}
            />
          )}
          <p
            className="text-blue-600 underline cursor-pointer font-bold"
            onClick={() => {
              setTitle('');
              setShowModal(true);
            }}
          >
            {t('Más detalles')}
          </p>
        </div>
        <div className="md:w-8/12 lg:w-5/12 relative px-4">
          <div>
            <Prices
              rental_price={rental_price}
              currency={currency}
              sale_price={sale_price}
            />
            <div className="capitalize">
              <h4 className="text-darkprimary font-bold inline">
                {t('marca')} :{' '}
              </h4>
              {vehicle?.brand}
            </div>
            <div className="capitalize">
              <h4 className="text-darkprimary font-bold inline">
                {t('modelo')} :{' '}
              </h4>
              {vehicle?.model}
            </div>
            <div className="capitalize">
              <h4 className="text-darkprimary font-bold inline">
                {t('año')} :{' '}
              </h4>
              {vehicle?.year}
            </div>
            <div className="capitalize">
              <h4 className="text-darkprimary font-bold inline">
                {t('detalles')} :{' '}
              </h4>
              <GenericComponent content={details} />
            </div>
            <div className="capitalize flex">
              <h4 className="text-darkprimary font-bold inline mr-2">
                {t('accesorios')} :{' '}
              </h4>
              <p
                className="underline text-red cursor-pointer"
                onClick={() => {
                  setTitle(t('accesorios'));
                  setShowModal(true);
                }}
              >
                {t('Click aquí')}
              </p>
            </div>
            <div className="capitalize flex">
              <h4 className="text-darkprimary font-bold inline mr-2">
                {t('fotos')} :{' '}
              </h4>
              <p
                className="underline text-red cursor-pointer"
                onClick={() => {
                  setTitle(t('fotos'));
                  setShowModal(true);
                }}
              >
                {t('Click aquí')}
              </p>
            </div>
            <div className="capitalize flex">
              <h4 className="text-darkprimary font-bold inline mr-2">
                {t('videos')} :{' '}
              </h4>
              <p
                className="underline text-red cursor-pointer"
                onClick={() => {
                  setTitle(t('videos'));
                  setShowModal(true);
                }}
              >
                {t('Click aquí')}
              </p>
            </div>
            <div className="capitalize">
              <h4 className="text-darkprimary font-bold inline">
                {t('servicios al día')} :
              </h4>
              <GenericComponent content={services} />
            </div>
            <div className="flex">
              <p className="text-red mr-2">
                {t('Haga click aquí para ver ubicación exacta ')}
              </p>
              <span
                className="text-blue-600 underline cursor-pointer"
                onClick={() => {
                  setTitle(t('ubicación exacta'));
                  setShowModal(true);
                }}
              >
                {t('Ver ubicación exacta')}
              </span>
            </div>
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
              <Button
                onClick={() => {
                  setShowModalContact(true);
                }}
              >
                {t('contactar al anunciante')}
              </Button>
            </div>
          </div>
        </div>
        <div className="md:w-5/12 lg:w-2/12 flex flex-col gap-y-5">
          <div>
            <h4 className="font-bold capitalize">{t('país')}</h4>
            <p className="capitalize">{address?.city?.state?.country.name}</p>
          </div>
          <div>
            <h4 className="font-bold capitalize">{t('estado')}</h4>
            <p className="capitalize">{address?.city?.state?.name}</p>
          </div>
          <div>
            <h4 className="font-bold capitalize">{t('zona')}</h4>
            <p className="capitalize">{address?.city?.name}</p>
          </div>
          <p className="text-darkprimary uppercase font-bold underline">
            {vehicle?.type}
          </p>
        </div>
        <div className="md:w-5/12 lg:w-2/12 flex justify-between">
          <div className="flex flex-col gap-y-10">
            <p className="text-red uppercase font-bold">{sale_type}</p>
            <p
              className="underline cursor-pointer text-blue-600"
              onClick={() => {
                setTitle(t('fotos'));
                setShowModal(true);
              }}
            >
              {t('Ver fotos')}
            </p>
            <p
              className="underline cursor-pointer text-blue-600"
              onClick={() => {
                setTitle(t('videos'));
                setShowModal(true);
              }}
            >
              {t('Ver videos')}
            </p>
            <p
              className="underline cursor-pointer text-blue-600"
              onClick={() => {
                setTitle('');
                setShowModal(true);
              }}
            >
              {t('Ver información completa')}
            </p>
          </div>
          <EditOptionsIcons
            author={author}
            id={id}
            className="flex flex-col gap-y-8 items-start"
            setShowModal={setShowModal}
          />
        </div>
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
    </div>
  );
};

export default VehiclePostList;
