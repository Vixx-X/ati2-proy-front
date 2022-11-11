import GenericComponent from '@components/layout/Parser/Parse';
import Prices from '@components/layout/Post/Prices';
import BaseModal from '@components/modals/BaseModal';

import { classNames } from '@utils/classNames';

interface DetailsModalProps {
  showModal: boolean;
  setShowModal: any;
  title: string;
  medias: any[];
  address: any;
  vehicle_post: any;
}

const SectionPart = ({ openSection, title, children }: any) => {
  return (
    <section
      className={classNames(
        openSection === title ? 'border-2 border-solid border-red' : ''
      )}
    >
      <h4 className="text-darkprimary font-bold text-xl capitalize p-4 pb-0">
        {title}
      </h4>
      <div className="p-4">{children}</div>
    </section>
  );
};

export const DetailsModal = ({
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
            <img
              className="border boder-solid border-black"
              alt={medias[0].text}
              src={medias[0].file}
            />
            <div className="font-bold text-lg sm:flex sm:justify-center sm:items-center">
              <Prices vehicle_post={vehicle_post} />
            </div>
            <div className="col-span-2">
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
              </div>
            </div>
            <div className="col-span-full capitalize text-center font-bold">
              {title} adicionales
            </div>
            {medias.map(({ text, file }, index) => (
              <img
                className="border boder-solid border-black"
                key={text + index}
                alt={text}
                src={file}
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

export default DetailsModal;
