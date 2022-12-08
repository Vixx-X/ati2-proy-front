import Field from '@components/forms/Field';
import TextArea from '@components/forms/TextArea';
import Button from '@components/layout/Button';
import PhoneButtonSet from '@components/layout/PhoneButtonSet';
import useTranslate from '@hooks/useTranslate';


export const SendQuerySection = ({}) => {
  const t = useTranslate();
  return (
    <>
      <h2 className="text-red text-xl font-bold">{t('Enviar correo eletrónico')}</h2>
      <div className="mb-2">
        <div className="flex py-2">
          <label
            htmlFor="email"
            className="capitalize mr-2 w-3/12 font-bold text-darkprimary block"
          >
            {t('correo electrónico')}:
          </label>
          <Field name="data.email" styles="w-9/12 mr-2" id="email" />
        </div>
      </div>
      <div className="mb-2">
        <div className="flex py-2">
          <label
            htmlFor="first_name"
            className="capitalize mr-2 w-3/12 font-bold text-darkprimary block"
          >
            {t('nombre')}:
          </label>
          <Field name="data.first_name" styles="w-9/12 mr-2" id="first_name" />
        </div>
      </div>
      <div className="mb-2">
        <div className="flex py-2">
          <label
            htmlFor="last_name"
            className="capitalize mr-2 w-3/12 font-bold text-darkprimary block"
          >
            {t('apellido')}:
          </label>
          <Field name="data.last_name" styles="w-9/12 mr-2" id="last_name" />
        </div>
      </div>
      <div className="mb-2 flex">
        <div className="flex py-2 w-full">
          <label className="capitalize mr-2 w-3/12 font-bold text-darkprimary block">
            {t('teléfono')}:
          </label>
          <div className="w-9/12 mr-2">
            <PhoneButtonSet
              phoneName="data.phone"
              localPhoneName="data.local_phone"
            />
          </div>
        </div>
      </div>
      <div className="mb-2 flex">
        <label
          htmlFor="reason"
          className="capitalize mr-2 w-3/12 font-bold text-darkprimary block"
        >
          {t('mensaje a enviar')}:
        </label>
        <TextArea className="h-40 resize-none w-9/12 mr-2" name="data.reason" />
      </div>
      <div className="py-4">
        <p className="text-darkprimary font-bold">
          <span className="text-red w-9/12 mr-2">* </span>{t(`Por favor verifique
          que sus datos sean los correctos, ya que serán utilizados por el
          anunciante para contactarlo.`)}
        </p>
      </div>
      <div className="text-center">
        <Button
          bgColor="bg-secundary"
          type="submit"
          className="w-fit align-center"
        >
          {t('Contactar al anunciante')}
        </Button>
      </div>
    </>
  );
};

export default SendQuerySection;
