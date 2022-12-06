import Image from 'next/image';

import AddressPost from '@components/layout/Post/Address';
import HeaderPost from '@components/layout/Post/Header';
import Prices from '@components/layout/Post/Prices';
import BaseModal from '@components/modals/BaseModal';

import { DEFAULT_IMAGE } from '@data/fakeData';

interface DetailsModalProps {
  showModal: boolean;
  setShowModal: any;
  title: string;
  medias: any[];
  address: any;
}

export const PhotosModal = ({
  showModal,
  setShowModal,
  title,
  images,
  videos,
  address,
  vehicle,
  vehicle_state,
  sale_type,
  rental_price,
  currency,
  sale_price,
}: any) => {
  const media = images?.[0];
  return (
    <BaseModal showModal={showModal} title={title} setShowModal={setShowModal}>
      <div className="grid grid-cols-4 gap-4">
        <img
          className="border boder-solid border-black"
          alt={images.length ? images[0] : 'placeholder-image'}
          src={images.length ? images[0] : DEFAULT_IMAGE}
        />
        <div className="text-md">
          <Prices
            rental_price={rental_price}
            currency={currency}
            sale_price={sale_price}
          />
        </div>
        <div className="col-span-2 pl-10">
          <HeaderPost
            className="text-left sm:text-left"
            vehicle={vehicle}
            vehicle_state={vehicle_state}
            sale_type={sale_type}
          />
          <div className="sm:flex sm:flex-col">
            <AddressPost address={address} />
          </div>
        </div>
        {(title === 'photos' && images.length > 1) ||
        (title !== 'photos' && videos.length > 0) ? (
          <>
            <div className="col-span-full capitalize text-center font-bold">
              {title} adicionales
            </div>
          </>
        ) : (
          <p>No hay más fotos adicionales</p>
        )}
        {title === 'photos' ? (
          <>
            {images
              ? images.map((element: any, index: any) => (
                  <div className="h-36" key={index}>
                    <img
                      className="border boder-solid border-black object-cover w-full h-full"
                      alt={element}
                      src={element}
                    />
                  </div>
                ))
              : null}
          </>
        ) : (
          <>
            {videos
              ? videos.map((element: any, index: any) => (
                  <div className="h-36" key={index}>
                    <video
                      width={100}
                      className="w-full h-full object-contain"
                      autoPlay
                      muted
                      loop
                    >
                      <source src={element} type="video/mp4" />
                      <p>{element}</p>
                    </video>
                  </div>
                ))
              : null}
          </>
        )}
      </div>
    </BaseModal>
  );
};

export default PhotosModal;
