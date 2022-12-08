import useTranslate from '@hooks/useTranslate';
import pageStore from '@stores/PageStore';

export const PhoneSection = ({}) => {
  const phone = pageStore((state) => state.phone);

  const t = useTranslate();
  return (
    <div>
      <h2 className="text-red text-xl font-bold">{t('Llamar por teléfono')}</h2>
      <div className="mb-2">
        <div className="flex py-2">
          <label className="capitalize mr-2 w-3/12 block font-bold text-darkprimary">
            {t('teléfono:')}
          </label>
          <p className="w-9/12">{phone}</p>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex py-2">
          <label className="capitalize mr-2 w-3/12 block font-bold text-darkprimary">
            {t('nombre y apellido:')}
          </label>
          <p className="w-9/12">Jose J Sánchez</p>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex py-2">
          <label className="capitalize mr-2 w-3/12 block font-bold text-darkprimary">
            {t('país')}
          </label>
          <p className="w-9/12">Switzerland</p>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex py-2">
          <label className="capitalize mr-2 w-3/12 block font-bold text-darkprimary">
            {t('días de contacto')}:
          </label>
          <p className="w-9/12">
            {(`Lunes a Viernes / Sábado y Domingo /Todos los días / Lunes, martes,
            Miércoles, Jueves / Lunes, Martes y Jueves`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneSection;
