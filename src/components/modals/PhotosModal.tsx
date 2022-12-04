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
  vehicle_post: any;
}

export const PhotosModal = ({
  showModal,
  setShowModal,
  title,
  medias,
  address,
  vehicle_post,
}: DetailsModalProps) => {
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
            <Image
              className="border boder-solid border-black"
              alt={medias[0].text}
              src={medias[0].file}
              unoptimized
            />
            <div className="text-md">
              <Prices vehicle_post={vehicle_post} />
            </div>
            <div className="col-span-2 pl-10">
              <HeaderPost
                vehicle_post={vehicle_post}
                className="text-left sm:text-left"
              />
              <div className="sm:flex sm:flex-col">
                <AddressPost address={address} />
              </div>
            </div>
            <div className="col-span-full capitalize text-center font-bold">
              {title} adicionales
            </div>
            {medias.map(({ text, file }, index) => (
              <Image
                className="border boder-solid border-black"
                key={text + index}
                alt={text}
                src={file}
                unoptimized
              />
            ))}
          </>
        ) : (
          <p>holi</p>
        )}
      </div>
    </BaseModal>
  );
};

export default PhotosModal;
