import { useState } from 'react';

import LoaderSpinner from '@components/LoaderSpinner';
import Form from '@components/forms/Form';
import BaseModal from '@components/modals/BaseModal';

import { postContactSeller } from '@fetches/contact';

import useTranslate from '@hooks/useTranslate';

import Alert from '@utils/alert';
import { classNames } from '@utils/classNames';
import Dialog from '@utils/dialog';

import { FormikValues } from 'formik';

import CallMeSection from './ContactSellerSections/CallMeSection';
import EmailSection from './ContactSellerSections/EmailSection';
import PhoneSection from './ContactSellerSections/PhoneSection';
import RegisterDateSection from './ContactSellerSections/RegisterDate';
import SendQuerySection from './ContactSellerSections/SendQuerySection';

interface ContactSellerProps {
  showModal: boolean;
  setShowModal: any;
}

export const ContactSellerModal = ({
  showModal,
  setShowModal,
}: ContactSellerProps) => {
  const [loading, setLoading] = useState(false);
  const [sectionContact, setSection] = useState<string | null>(null);

  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    setLoading(true);
    try {
      await postContactSeller(values);
      Dialog(
        t('Información guardada'),
        t(
          'Los datos de contacto del anunciante han sido almacenados en la aplicación, pero falta implementar la opción de envío de correo y de mensajería de texto para otras fases del proyecto'
        ),
        [
          {
            title: t('aceptar'),
            bgColor: 'bg-primary',
          },
        ]
      );
      setStatus({});
    } catch (exception: any) {
      Alert('RED', t('Ocurrió un error revise el formulario'));
      setStatus(exception.data.detail);
    }
    setLoading(false);
  };

  const initialValues = { data: {} };

  const handleContactMethod = (event: any) => {
    setSection(event.target.value);
  };

  const t = useTranslate();
  return (
    <>
      <BaseModal
        showModal={showModal}
        title="contactar al vendedor o arrendador"
        setShowModal={setShowModal}
      >
        <div className="flex justify-between">
          <div className="w-[400px]">
            <h2 className="text-red font-bold text-lg">
              {t('Selecciona la opción de tu preferencia')}
            </h2>
            <div className="text-darkprimary flex flex-col gap-y-4 mt-4">
              <div className="radio">
                <input
                  type="radio"
                  name="contactSeller"
                  value="email"
                  onChange={handleContactMethod}
                />
                <label className="ml-2">{t('Enviar correo electrónico')}</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="contactSeller"
                  value="phone"
                  onChange={handleContactMethod}
                />
                <label className="ml-2">{t('Llamar por teléfono')}</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="contactSeller"
                  value="call_me"
                  onChange={handleContactMethod}
                />
                <label className="ml-2">{t('Quiero que me llamen')}</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="contactSeller"
                  value="send_value"
                  onChange={handleContactMethod}
                />
                <label className="ml-2">{t('Enviar consulta')}</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="contactSeller"
                  value="register_visit"
                  onChange={handleContactMethod}
                />
                <label className="ml-2">{t('Agendar visita')}</label>
              </div>
            </div>
          </div>
          {sectionContact ? (
            <div className="w-[600px] h-[800px] text-sm overflow-scroll">
              <Form initialValues={initialValues} onSubmit={handleSubmit}>
                {sectionContact === 'email' ? <EmailSection /> : null}
              </Form>
              {sectionContact === 'phone' ? <PhoneSection /> : null}
              <Form initialValues={initialValues} onSubmit={handleSubmit}>
                {sectionContact === 'call_me' ? <CallMeSection /> : null}
              </Form>
              <Form initialValues={initialValues} onSubmit={handleSubmit}>
                {sectionContact === 'send_value' ? <SendQuerySection /> : null}
              </Form>
              <Form initialValues={initialValues} onSubmit={handleSubmit}>
                {sectionContact === 'register_visit' ? (
                  <RegisterDateSection />
                ) : null}
              </Form>
            </div>
          ) : null}
        </div>
      </BaseModal>
    </>
  );
};

export default ContactSellerModal;
