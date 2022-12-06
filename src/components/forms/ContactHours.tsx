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
  return (
    <div {...props}>
      <div className={`bg-secundary ${titleClassNames}`}>
        <p className="w-full text-center text-white font-bold py-2 px-4">
          Horas de Contacto
        </p>
      </div>
      <div
        className={`border border-2 border-darkprimary p-3 flex flex-wrap justify-center ${optionsClassNames}`}
      >
        <div className="w-[50%]">
          <p className="font-bold">Desde</p>
          <HourField name={nameStart} />
        </div>
        <div className="w-[50%]">
          <p className="font-bold">Hasta</p>
          <HourField name={nameEnd} />
        </div>
      </div>
    </div>
  );
};

export default ContactUseHours;
