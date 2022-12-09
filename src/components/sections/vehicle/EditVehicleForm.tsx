import { useState } from 'react';
import { useMemo } from 'react';

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
import Field from '@components/forms/Field';
import Form from '@components/forms/Form';
import ModelSelect from '@components/forms/ModelSelect';
import RadioGroup from '@components/forms/RadioGroup';
import StateSelect from '@components/forms/StateSelect';
import TextArea from '@components/forms/TextArea';
import YearSelect from '@components/forms/YearSelect';
import Button from '@components/layout/Button';

import { SALE_TYPE_CHOICES, VEHICLE_STATE_CHOICES, YES_OR_NO } from '@config';

import { postVehicle, putVehicle } from '@fetches/post';
import { getVehicles } from '@fetches/vehicles';

import useTranslate from '@hooks/useTranslate';

import { FormikValues } from 'formik';

export const EditVehicleForm = ({
  createMode,
  initialValues: initValues,
}: any) => {
  const [imageLimit] = useState(20);
  const [videoLimit, setVideoLimit] = useState(5);

  const initialValues = {
    ...initValues,
    filter: {
      video: initValues.video_ids?.length ? '1' : '0',
      ...initValues.filter,
    },
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
      const vehicle =
        values?.filter?.vehicle?.brand &&
        values?.filter?.vehicle?.model &&
        values?.filter?.vehicle?.year &&
        vehicles[0]?.id
          ? vehicles[0]?.id
          : '';

      const data = {
        address: values.address,
        details: values.details,
        currency: values.currency,
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
          first_name: values.contact.first_name,
          last_name: values.contact.last_name,
          email: values.contact.email,
          local_phone: '+582128886655',
          phone: '+582128886655',
          contact_days: values.contact.contact_days,
          contact_hour_start: values.contact.contact_hour_start,
          contact_hour_end: values.contact.contact_hour_end,
        },
      };

      if (createMode) await postVehicle(data);
      else await putVehicle(values.id, data);
      setStatus({});
    } catch (exception: any) {
      setStatus(exception.data.detail);
    }
  };

  const t = useTranslate();
  const saleTypeChoices = useMemo(
    () =>
      SALE_TYPE_CHOICES.map(({ text, ...rest }) => ({
        text: t(text),
        ...rest,
      })),
    [t]
  );
  const vehicleStateChoices = useMemo(
    () =>
      VEHICLE_STATE_CHOICES.map(({ text, ...rest }) => ({
        text: t(text),
        ...rest,
      })),
    [t]
  );
  const yesOrNo = useMemo(
    () =>
      YES_OR_NO.map(({ text, ...rest }) => ({
        text: t(text),
        ...rest,
      })),
    [t]
  );

  const textAreaData = [
    {
      title: t('Detalles o especificaciones del vehículo'),
      description: t(
        'Si lo deseas, puedes indicar detalles adicionales del vehículo. Que no sea los accesorios, en esta sección'
      ),
      name: 'details',
    },
    {
      title: t('Accesorios o comodidades'),
      description: t('Accesorios o comodidades'),
      name: 'accesories',
    },
    {
      title: t('Servicios al día'),
      description: t(
        'SI deseas, indica los trabajos que se le han realizado al vehículo recientemente, como: Cambio de aceite, cauchos, tapicería, pago de seguros al día, entre otros'
      ),
      name: 'services',
    },
    {
      title: t('Ubicación exacta'),
      description: t(
        'Si deseas, puedes indicar donde se encuentra el vehículo'
      ),
      name: 'address.line2',
    },
  ];

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
            <div className="p-3 w-full bg-secundary">
              <p className="w-full text-center text-white capitalize font-bold text-xl">
                {t('Ubicacion del Vehiculo')}
              </p>
            </div>
            <div className="w-full gap-2 grid md:grid-cols-3 lg:grid-cols-5">
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
              <div>
                <CitySelect
                  name="address.city_id"
                  filter={{ state: values?.filter?.address?.state }}
                />
                <ErrorMsg name="address.city_id" />
              </div>
              <div>
                <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                  {t('Zona')}
                </p>
                <Field name="address.line1" />
                <ErrorMsg name="address.line1" />
              </div>
            </div>
            <div className="flex justify-around"></div>
          </div>
          <div className="flex gap-10 w-full">
            <div className="py-2 w-2/3 flex flex-col items-center gap-6">
              <div className="w-full py-3 px-10 bg-secundary">
                <p className="w-full text-center text-white capitalize font-bold text-xl">
                  {t('Marca, modelo y año del vehículo')}
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
              <ErrorMsg name="vehicle_id" />
            </div>
            <div className="py-2 w-1/3 flex flex-col items-center gap-6">
              <div className="py-3 px-10 w-full bg-secundary">
                <p className="w-full text-center text-white capitalize font-bold text-xl">
                  {t('Estatus del Vehículo')}
                </p>
              </div>
              <div className="flex gap-3">
                <div>
                  <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                    {t('Vehículo en')}
                  </p>
                  <RadioGroup name="sale_type" choices={saleTypeChoices} />
                  <ErrorMsg name="sale_type" />
                </div>
                <div>
                  <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                    {'Estado en'}
                  </p>
                  <RadioGroup
                    name="vehicle_state"
                    choices={vehicleStateChoices}
                  />
                  <ErrorMsg name="vehicle_state" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-10">
            <div className="w-8/12 flex items-center flex-col">
              <div className="w-full py-3 px-10 bg-secundary">
                <p className="w-full text-center text-white capitalize font-bold text-xl">
                  {t('Fotos del Vehículo')}
                </p>
              </div>
              <div className="w-full mt-2 border border-2 border-darkprimary px-4 py-10">
                <p className="text-center ">
                  {t(
                    `Arrastre las fotos que desea cargar en cada uno de los recuadros`
                  )}
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
              <ErrorMsg name="image_ids" />
            </div>
            <div className="w-4/12 flex items-center flex-col gap-2">
              <div className="w-full py-3 px-10 bg-secundary">
                <p className="w-full text-center text-white capitalize font-bold text-xl">
                  {t('¿Desea agregar video?')}
                </p>
              </div>
              <div className="w-full border border-2 border-darkprimary">
                <RadioGroup
                  name="filter.video"
                  className="flex justify-center items-center gap-6"
                  choices={yesOrNo}
                />
                {parseInt(values?.filter?.video) ? (
                  <>
                    <div className="m-2 flex gap-3 justify-center">
                      <label
                        className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded"
                        htmlFor="cantVideo"
                      >
                        {t('Cantidad de video')}
                      </label>
                      <select
                        onChange={(e) =>
                          setVideoLimit(parseInt(e.target.value))
                        }
                        className="rounded-md"
                        id="cantVideo"
                        value={videoLimit}
                      >
                        <option value="2">{t('Hasta 2')}</option>
                        <option value="5">{t('Hasta 5')}</option>
                      </select>
                    </div>
                    <div className="flex justify-center flex-wrap gap-2 p-3">
                      <p>
                        {t(
                          `Arrastre los videos que desea cargar, en cada uno de los recuadros`
                        )}
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
          <div className="grid md:grid-cols-2 gap-3 justify-between">
            {textAreaData.map((item, index) => (
              <div key={index}>
                <div className="w-full py-3 px-10 bg-secundary">
                  <p className="w-full text-center text-white capitalize font-bold text-xl">
                    {item.title}
                  </p>
                </div>
                <p className="my-4 h-16">{item.description}</p>
                <div>
                  <TextArea
                    name={item.name}
                    title={item.title}
                    description={item.description}
                    styles="rounded-xl min-h-[150px]"
                  />
                  <ErrorMsg name={item.name} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-3 my-10">
            <div className="grid gap-3 md:grid-cols-2 items-start w-full">
              {['BOTH', 'RENT'].includes(values?.sale_type) ? (
                <div>
                  <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                    {t('Precio de Alquiler')}
                  </p>
                  <Field type="text" name="rental_price" />
                </div>
              ) : null}
              {['BOTH', 'SALE'].includes(values?.sale_type) ? (
                <div>
                  <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                    {t('Precio de Venta')}
                  </p>
                  <div>
                    <Field type="text" name="sale_price" />
                    <ErrorMsg name="sale_price" />
                  </div>
                </div>
              ) : null}
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div></div>
              <CurrencySelect name="currency" />
              <ErrorMsg name="currency" />
            </div>
          </div>
          <div className="flex justify-between gap-4 items-start">
            <div className="w-[60%] gap-2 flex flex-col items-center justify-center">
              <ContactUserData />
            </div>
            <div className="w-[40%] gap-2 flex flex-col items-center justify-center">
              <ContactDays name="contact.contact_days" />
              <ErrorMsg name="contact.contact_days" />
              <ContactUseHours
                nameStart="contact.contact_hour_start"
                nameEnd="contact.contact_hour_end"
              />
              <ErrorMsg name="contact.contact_hour_start" />
              <ErrorMsg name="contact.contact_hour_end" />
            </div>
          </div>
          <p className="text-center" style={{ color: 'blue' }}>
            <span style={{ color: 'red' }}>*</span>
            Por favor verifique que los datos sean los correctos, ya que serán
            utilizados para dar a conocer su vivienda
          </p>
          <div className="flex justify-center gap-x-4">
            <Button type="submit" className="capitalize w-fit">
              {t('enviar')}
            </Button>
            <Button className="capitalize w-fit">{t('cancelar')}</Button>
          </div>
        </div>
      )}
    </Form>
  );
};

export default EditVehicleForm;
