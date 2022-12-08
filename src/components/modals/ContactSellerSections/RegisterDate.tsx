import ContactUseHours from '@components/forms/ContactHours';
import Field from '@components/forms/Field';
import TextArea from '@components/forms/TextArea';
import Button from '@components/layout/Button';
import PhoneButtonSet from '@components/layout/PhoneButtonSet';

import { getBusinessInfo } from '@fetches/contact';

import useSWR from 'swr';

export const RegisterDateSection = ({}) => {
  const { data } = useSWR('contact', () => getBusinessInfo());

  return (
    <div>
      <h2 className="text-red text-xl font-bold">Llamar por teléfono</h2>
      <div className="mb-2">
        <div className="flex py-2">
          <label className="mr-2 w-3/12 block font-bold text-darkprimary">
            Fecha en que desea realizar visita:
          </label>
          <Field
            type="date"
            name="data.date"
            className="w-9/12 mr-2"
            id="date"
          />
        </div>
      </div>
      <div className="mb-2">
        <ContactUseHours
          nameStart="data.contact_hour_start"
          nameEnd="data.contact_hour_end"
          className="flex mb-2"
          titleClassNames="w-3/12 mr-2 w-fit h-fit text-sm"
          optionsClassNames="w-9/12 mr-2"
        />
      </div>
      <div className="mb-2">
        <div className="flex py-2">
          <label
            htmlFor="email"
            className="capitalize mr-2 w-3/12 font-bold text-darkprimary block"
          >
            email:
          </label>
          <Field name="data.email" styles="w-9/12 mr-2" id="email" />
        </div>
      </div>
      <div className="mb-2 flex">
        <div className="flex py-2 w-full">
          <label className="capitalize mr-2 w-3/12 font-bold text-darkprimary block">
            teléfono:
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
          className="mr-2 w-3/12 font-bold text-darkprimary block"
        >
          Otros detalles que desees aportar sobre la vista
        </label>
        <TextArea className="h-40 resize-none w-9/12 mr-2" name="data.reason" />
      </div>
      <div className="py-4">
        <p className="text-darkprimary font-bold">
          <span className="text-red w-9/12 mr-2">* </span>Por favor verifique
          que sus datos sean los correctos, ya que serán utilizados por el
          anunciante para contactarlo.
        </p>
      </div>
      <div className="text-center">
        <Button
          bgColor="bg-secundary"
          type="submit"
          className="w-fit align-center"
        >
          Contactar al anunciante
        </Button>
      </div>
    </div>
  );
};

export default RegisterDateSection;
