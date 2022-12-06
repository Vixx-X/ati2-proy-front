import GenericComponent from '@components/layout/Parser/Parse';
import BaseModal from '@components/modals/BaseModal';

import { classNames } from '@utils/classNames';

interface DetailsModalProps {
  showModal: boolean;
  setShowModal: any;
  title: string;
  details: string;
  accesories: string;
  photos?: any;
  videos?: any;
  services: string;
  address: any;
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
  details,
  accesories,
  services,
  address,
}: DetailsModalProps) => {
  return (
    <BaseModal
      showModal={showModal}
      title="Detalles, fotos, videos y ubicación"
      setShowModal={setShowModal}
    >
      <>
        <SectionPart openSection={title} title={'details'}>
          <GenericComponent content={details} />
        </SectionPart>
        <SectionPart openSection={title} title={'accesories'}>
          <GenericComponent content={accesories} />
        </SectionPart>
        <div className="flex">
          <SectionPart title={'photos'}>
            <a>Haga click aquí</a>
          </SectionPart>
          <SectionPart title={'videos'}>
            <a>Haga click aquí</a>
          </SectionPart>
        </div>
        <SectionPart openSection={title} title={'services'}>
          <GenericComponent content={services} />
        </SectionPart>
        <SectionPart openSection={title} title={'exact address'}>
          {address}
        </SectionPart>
      </>
    </BaseModal>
  );
};

export default DetailsModal;
