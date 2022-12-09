import GenericComponent from '@components/layout/Parser/Parse';
import BaseModal from '@components/modals/BaseModal';
import useTranslate from '@hooks/useTranslate';

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
  const t = useTranslate();
  return (
    <section
      className={classNames(
        openSection === title ? 'border-2 border-solid border-red' : ''
      )}
    >
      <h4 className="text-darkprimary font-bold text-xl capitalize p-4 pb-0">
        {t(title)}
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
  const t = useTranslate();
  return (
    <BaseModal
      showModal={showModal}
      title="Detalles, fotos, videos y ubicación"
      setShowModal={setShowModal}
    >
      <>
        <SectionPart openSection={title} title={t('detalles')}>
          <GenericComponent content={details} />
        </SectionPart>
        <SectionPart openSection={title} title={t('accesorios')}>
          <GenericComponent content={accesories} />
        </SectionPart>
        <SectionPart openSection={title} title={t('servicios')}>
          <GenericComponent content={services} />
        </SectionPart>
        <SectionPart openSection={title} title={t('ubicación exacta')}>
          {address}
        </SectionPart>
      </>
    </BaseModal>
  );
};

export default DetailsModal;
