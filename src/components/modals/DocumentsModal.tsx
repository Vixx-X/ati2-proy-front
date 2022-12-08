import BaseModal from '@components/modals/BaseModal';

import terms from '@data/TermsAndConditions';
import useTranslate from '@hooks/useTranslate';

interface ModalProps {
  showModal: boolean;
  setShowModal: any;
  text: JSX.Element;
  title: string;
}

export const DocumentsModal = ({
  showModal,
  setShowModal,
  text,
  title,
}: ModalProps) => {
  const t = useTranslate();
  return (
    <BaseModal
      showModal={showModal}
      title={t(title)}
      setShowModal={setShowModal}
      className="text-gray-600 overflow-y-scroll max-h-[90vh] max-w-[90vw]"
    >
      <div>{text}</div>
    </BaseModal>
  );
};

export default DocumentsModal;
