import Image from 'next/image';

import AddressPost from '@components/layout/Post/Address';
import HeaderPost from '@components/layout/Post/Header';
import Prices from '@components/layout/Post/Prices';
import BaseModal from '@components/modals/BaseModal';

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
  media,
  address,
  vehicle,
  vehicle_state,
  sale_type,
  rental_price,
  currency,
  sale_price,
}: any) => {
  return (
    <BaseModal
      showModal={showModal}
      title={title}
      setShowModal={setShowModal}
      backDrop={false}
    >
      <div className="grid grid-cols-4 gap-4">
        {title === 'photos' ? (
          <>
            {media && media[0] ? (
              <Image
                className="border boder-solid border-black"
                alt={media[0].text}
                src={media[0].file}
                unoptimized
                layout="fill"
              />
            ) : null}
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
            <div className="col-span-full capitalize text-center font-bold">
              {title} adicionales
            </div>
            {media
              ? media.map((element: any, index: any) => (
                  <Image
                    className="border boder-solid border-black"
                    key={element?.text + index}
                    alt={element?.text}
                    src={element?.file}
                    unoptimized
                    layout="fill"
                  />
                ))
              : null}
          </>
        ) : (
          <p>holi</p>
        )}
      </div>
    </BaseModal>
  );
};

export default PhotosModal;
