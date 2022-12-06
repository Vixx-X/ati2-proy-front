import { useState } from 'react';

import BrandSelect from '@components/forms/BrandSelect';
import CitySelect from '@components/forms/CitySelect';
import ContactDays from '@components/forms/ContactDays';
import ContactUseHours from '@components/forms/ContactHours';
import ContactUserData from '@components/forms/ContactUserData';
import ContinentSelect from '@components/forms/ContinentSelect';
import CountrySelect from '@components/forms/CountrySelect';
import { CurrencySelect } from '@components/forms/CurrencySelect';
import { DragAndDropImg } from '@components/forms/DragAndDropImg';
import { DragAndDropVideo } from '@components/forms/DragAndDropVideo';
import ErrorMsg from '@components/forms/ErrorMsg';
import { Field } from '@components/forms/Field';
import { Form } from '@components/forms/Form';
import ModelSelect from '@components/forms/ModelSelect';
import RadioGroup from '@components/forms/RadioGroup';
import StateSelect from '@components/forms/StateSelect';
import TextArea from '@components/forms/TextArea';
import YearSelect from '@components/forms/YearSelect';
import Button from '@components/layout/Button';

import { postVehicle, putVehicle } from '@fetches/post';
import { getVehicles } from '@fetches/vehicles';

import { FormikValues } from 'formik';

const textAreaData = [
  {
    title: 'Detalles o especificaciones del vehículo',
    description:
      'Si lo deseas, puedes indicar detalles adicionales del vehículo. Que no sea los accesorios, en esta sección',
    name: 'details',
  },
  {
    title: 'Accesorios o comodidades',
    description: 'Accesorios o comodidades',
    name: 'accesories',
  },
  {
    title: 'Servicios al día',
    description:
      'SI deseas, indica los trabajos que se le han realizado al vehículo recientemente, como: Cambio de aceite, cauchos, tapicería, pago de seguros al día, entre otros',
    name: 'services',
  },
  {
    title: 'Ubicación exacta',
    description: 'Si deseas, puedes indicar donde se encuentra el vehículo',
    name: 'address.line2',
  },
];

const SALE_TYPE_CHOICES = [
  {
    value: 'RENT',
    text: 'Alquiler',
  },
  {
    value: 'SALE',
    text: 'Venta',
  },
  {
    value: 'BOTH',
    text: 'Alquiler y Venta',
  },
];

const VEHICLE_STATE_CHOICES = [
  {
    value: 'NEW',
    text: 'Nuevo',
  },
  {
    value: 'USED',
    text: 'Usado',
  },
];

const YES_OR_NO = [
  { value: '1', text: 'Si' },
  { value: '0', text: 'No' },
];

export const EditVehicleForm = ({
  createMode,
  initialValues: initValues,
}: any) => {
  const [imageLimit] = useState(20);
  const [videoLimit, setVideoLimit] = useState(5);

  const initialValues = {
    ...initValues,
    filter: { video: '0', ...initValues.filter },
  };

  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    try {
      const images = await Promise.all(
        values.image_ids.flat().map((file: any) => file.id)
      );
      const videos = await Promise.all(
        values.video_ids.flat().map((file: any) => file.id)
      );

      const vehicles = await getVehicles(values?.filter?.vehicle);
      const vehicle = vehicles?.results?.[0]?.id ?? values?.vehicle_id;

      const data = {
        address: values.address,
        details: values.details,
        currency:
          values?.currency1 === 'OTHER' ? values?.currency2 : values?.currency1,
        sale_price: values.sale_price,
        rental_price: values.rental_price,
        sale_type: values.sale_type,
        accesories: values.accesories,
        services: values.services,
        vehicle_state: values.vehicle_state,
        vehicle_id: vehicle,
        image_ids: images,
        video_ids: videos,
        contact: {
          first_name: 'gabriela',
          last_name: 'ustariz',
          email: 'gabyustariz@hotmail.com',
          local_phone: '+582128886655',
          phone: '+582128886655',
          contact_hour_start: '2022-12-05T05:55:38.575Z',
          contact_hour_end: '2022-12-05T05:55:38.575Z',
          contact_days: ['monday'],
          // contact_hour_start: '2022-12-05T05:55:38.575Z,
          // contact_hour_end": '2022-12-05T05:55:38.575Z",
        },
      };

      if (createMode) await postVehicle(data);
      else await putVehicle(values.id, data);
      setStatus({});
    } catch (exception: any) {
      setStatus(exception.data);
    }
  };

  return (
    <Form
      className="w-full"
      initialValues={initialValues}
      onSubmit={handleSubmit}
      renderProps
    >
      {({ values }) => (
        <div className="w-full flex flex-col gap-6 px-5">
          <div className="w-full flex flex-col items-center gap-6">
            <div className="p-3 w-1/3 bg-secundary">
              <p className="w-full text-center text-white capitalize font-bold text-xl">
                Ubicacion del Vehiculo
              </p>
            </div>
            <div className="w-full flex justify-around gap-2">
              <ContinentSelect name="filter.address.continent" />
              <CountrySelect
                name="filter.address.country"
                filter={{
                  continent: values?.filter?.address?.continent,
                }}
              />
              <StateSelect
                name="filter.address.state"
                filter={{ country: values?.filter?.address?.country }}
              />
              <CitySelect
                name="address.city_id"
                filter={{ state: values?.filter?.address?.state }}
              />
              <ErrorMsg name="address.city_id" />
              <div>
                <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                  Zona
                </p>
                <Field name="address.line1" />
                <ErrorMsg name="address.line1" />
              </div>
            </div>
            <div className="flex justify-around"></div>
          </div>
          <div className="flex gap-10 w-full">
            <div className="py-2 w-2/3 flex flex-col items-center gap-6">
              <div className="w-2/3 py-3 px-10 bg-secundary">
                <p className="w-full text-center text-white capitalize font-bold text-xl">
                  Marca, modelo y año del vehículo
                </p>
              </div>
              <div className="w-full flex justify-around gap-2">
                <BrandSelect name="filter.vehicle.brand" />
                <ModelSelect
                  name="filter.vehicle.model"
                  filter={{ brand: values?.filter?.vehicle?.brand }}
                />
                <YearSelect
                  name="filter.vehicle.year"
                  filter={{
                    brand: values?.filter?.vehicle?.brand,
                    model: values?.filter?.vehicle?.model,
                  }}
                />
              </div>
              <ErrorMsg name="vehicle" />
            </div>
            <div className="py-2 w-1/3 flex flex-col items-center gap-6">
              <div className="py-3 px-10 w-9/12 bg-secundary">
                <p className="w-full text-center text-white capitalize font-bold text-xl">
                  Estatus del vehículo
                </p>
              </div>
              <div className="flex gap-3">
                <div>
                  <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                    Vehiculo en
                  </p>
                  <RadioGroup name="sale_type" choices={SALE_TYPE_CHOICES} />
                  <ErrorMsg name="sale_type" />
                </div>
                <div>
                  <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                    Estado en
                  </p>
                  <RadioGroup
                    name="vehicle_state"
                    choices={VEHICLE_STATE_CHOICES}
                  />
                  <ErrorMsg name="vehicle_state" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-10">
            <div className="w-8/12 flex items-center flex-col">
              <div className="w-1/2 py-3 px-10 bg-secundary">
                <p className="w-full text-center text-white capitalize font-bold text-xl">
                  Fotos del Vehiculo
                </p>
              </div>
              <div className="w-full mt-2 border border-2 border-darkprimary">
                <p className="text-center ">
                  Arrastre las fotos que desea cargar en cada uno de los
                  recuadros
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[...Array(imageLimit)].map((_, idx) => (
                    <div
                      className="w-[100px] h-[100px] border border-solid border-primary"
                      key={idx}
                    >
                      <DragAndDropImg name={`image_ids[${idx}]`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-4/12 flex items-center flex-col gap-2">
              <div className="w-9/12 py-3 px-10 bg-secundary">
                <p className="w-full text-center text-white capitalize font-bold text-xl">
                  ¿Desea agregar video?
                </p>
              </div>
              <div className="w-full border border-2 border-darkprimary">
                <RadioGroup
                  name="filter.video"
                  className="flex justify-center items-center gap-6"
                  choices={YES_OR_NO}
                />
                {parseInt(values?.filter?.video) ? (
                  <>
                    <div className="m-2 flex gap-3 justify-center">
                      <label
                        className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded"
                        htmlFor="cantVideo"
                      >
                        Cantidad de video
                      </label>
                      <select
                        onChange={(e) =>
                          setVideoLimit(parseInt(e.target.value))
                        }
                        className="rounded-md"
                        id="cantVideo"
                        value={videoLimit}
                      >
                        <option value="2">Hasta 2</option>
                        <option value="5">Hasta 5</option>
                      </select>
                    </div>
                    <div className="flex justify-center flex-wrap gap-2 p-3">
                      <p>
                        Arrastre los videos que desea cargar, en cada uno de los
                        recuadros
                      </p>
                      {[...Array(videoLimit)].map((_, idx) => (
                        <div
                          className="w-[100px] h-[100px] border border-solid border-primary"
                          key={idx}
                        >
                          <DragAndDropVideo name={`video_ids[${idx}]`} />
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 items-center justify-between">
            {textAreaData.map((item, index) => (
              <div
                className={index % 2 === 0 ? 'w-[65%]' : 'w-[30%]  '}
                key={index}
              >
                <TextArea
                  name={item.name}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <div className=" flex gap-3 items-center">
              {['BOTH', 'RENT'].includes(values?.sale_type) ? (
                <div>
                  <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                    Precio de Alquiler
                  </p>
                  <Field type="text" name="rental_price" />
                </div>
              ) : null}
              {['BOTH', 'SALE'].includes(values?.sale_type) ? (
                <div>
                  <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                    Precio de Venta
                  </p>
                  <Field type="text" name="sale_price" />
                </div>
              ) : null}
            </div>
            <div>
              <CurrencySelect name="currency1" />

              {values?.currency1 === 'OTHER' ? (
                <div className="flex flex-col">
                  <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                    Coloque las siglas de las monedas
                  </p>
                  <Field
                    type="text"
                    className="pr-2 pl-2 pt-2 pb-2 text-xs"
                    name="currency2"
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-[60%] gap-2 flex flex-col items-center justify-center">
              <ContactUserData />
            </div>
            <div className="w-[40%] gap-2 flex flex-col items-center justify-center">
              <ContactDays />
              <ContactUseHours />
            </div>
          </div>
          <div className="flex gap-x-4">
            <Button type="submit" className="capitalize w-fit">
              enviar
            </Button>
            <Button className="capitalize w-fit">cancelar</Button>
          </div>
        </div>
      )}
    </Form>
  );
};

export default EditVehicleForm;
