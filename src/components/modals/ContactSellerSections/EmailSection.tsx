import Field from '@components/forms/Field';
import TextArea from '@components/forms/TextArea';
import Button from '@components/layout/Button';
import PhoneButtonSet from '@components/layout/PhoneButtonSet';

import pageStore from '@stores/PageStore';

export const EmailSection = ({}) => {
  const email = pageStore((state) => state.email);

  return (
    <>
      <p className="text-red text-xl font-bold">Enviar correo eletrónico</p>
      <div className="mb-2">
        <div className="flex py-2">
          <label
            htmlFor="target_email"
            className="capitalize mr-2 w-3/12 font-bold text-darkprimary block"
          >
            para:
          </label>
          <div className="w-9/12 mr-2">
            <input
              className="w-full text-gray-400 bg-white border border-darkprimary placeholder-gray-500 text-xs lg:text-sm px-4 py-3 w-full focus:text-gray-800 pl-4 pr-10 py-2"
              value={email}
              readOnly
              id="target_email"
            ></input>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex py-2">
          <label
            htmlFor="first_name"
            className="capitalize mr-2 w-3/12 font-bold text-darkprimary block"
          >
            nombre:
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
            apellido:
          </label>
          <Field name="data.last_name" styles="w-9/12 mr-2" id="last_name" />
        </div>
      </div>
      <div className="mb-2">
        <div className="flex py-2">
          <label
            htmlFor="source_email"
            className="capitalize mr-2 w-3/12 font-bold text-darkprimary block"
          >
            correo de solicitante:
          </label>
          <Field
            name="data.source_email"
            styles="w-9/12 mr-2"
            id="source_email"
          />
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
          className="capitalize mr-2 w-3/12 font-bold text-darkprimary block"
        >
          mensaje a enviar:
        </label>
        <TextArea
          className="h-40 resize-none w-9/12 mr-2"
          name="data.message"
        />
      </div>
      <div className="py-4">
        <p className="text-darkprimary font-bold">
          <span className="text-red w-9/12 mr-2">* </span>Por favor sverifique
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
    </>
  );
};

export default EmailSection;
