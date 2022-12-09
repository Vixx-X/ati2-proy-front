import useTranslate from '@hooks/useTranslate';
import HourField from './HourField';

interface ContactUseHoursProps extends Props {
  titleClassNames?: string;
  optionsClassNames?: string;
  nameStart: string;
  nameEnd: string;
}

export const ContactUseHours = ({
  titleClassNames = 'text-xl',
  optionsClassNames,
  nameStart,
  nameEnd,
  ...props
}: ContactUseHoursProps) => {
  const t = useTranslate();
  return (
    <div {...props}>
      <div className={`bg-secundary w-full mt-4 mb-2 ${titleClassNames}`}>
        <p className="w-full text-center text-white font-bold py-2 px-4">
          {t('Horas de Contacto')}
        </p>
      </div>
      <div
        className={`border border-2 border-darkprimary p-3 flex flex-wrap justify-center ${optionsClassNames}`}
      >
        <div className="w-[50%]">
          <p className="font-bold">{t('Desde')}</p>
          <HourField name={nameStart} />
        </div>
        <div className="w-[50%]">
          <p className="font-bold">{t('Hasta')}</p>
          <HourField name={nameEnd} />
        </div>
      </div>
    </div>
  );
};

export default ContactUseHours;
