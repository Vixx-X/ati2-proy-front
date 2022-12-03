import { useState } from 'react';

import type { NextPage } from 'next';

import BrandSelect from '@components/forms/BrandSelect';
import CitySelect from '@components/forms/CitySelect';
import ContactDays from '@components/forms/ContactDays';
import ContactUseHours from '@components/forms/ContactHours';
import ContactUserData from '@components/forms/ContactUserData';
import ContinentSelect from '@components/forms/ContinentSelect';
import CountrySelect from '@components/forms/CountrySelect';
import { DragAndDropImg } from '@components/forms/DragAndDropImg';
import { DragAndDropVideo } from '@components/forms/DragAndDropVideo';
import { Field } from '@components/forms/Field';
import { Form } from '@components/forms/Form';
import ModelSelect from '@components/forms/ModelSelect';
import StateSelect from '@components/forms/StateSelect';
import YearSelect from '@components/forms/YearSelect';
import TextArea from '@components/forms/textArea';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';

import { postVehicle } from '@fetches/post';
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
const Landing: NextPage = () => {
  const [displayDragVideo, setDisplayDragVideo] = useState(false);
  const [displayVehicleAre, setDisplayVehicleAre] = useState(0);
  const [displayOtherMoney, setDisplayOtherMoney] = useState(false);
  const [enableContactStaticPhone, setEnableContactStaticPhone] =
    useState(false);
  const [enableContactMobilePhone, setEnableContactMobilePhone] =
    useState(false);

  const [imageLoaders, setImageLoaders] = useState([]);
  const [videoLoaders, setVideoLoaders] = useState([]);

  const [imageLimit, setImageLimit] = useState(20);
  const [videoLimit, setVideoLimit] = useState(5);

  const handleChangeAreVideos = (e: any) => {
    if (e.target.value === 'true') {
      setDisplayDragVideo(true);
    }
    if (e.target.value === 'false') {
      setDisplayDragVideo(false);
    }
  };

  const handleChangeStateVehicle = (e: any) => {};

  const handleChangeStatusVehicle = (e: any) => {
    if (e.target.value === 'Rent') {
      setDisplayVehicleAre(1);
    } else if (e.target.value === 'Sell') {
      setDisplayVehicleAre(2);
    } else {
      setDisplayVehicleAre(3);
    }
  };

  const handleChangeMoney = (e: any) => {
    if (e.target.value === 'other') {
      setDisplayOtherMoney(true);
    } else {
      setDisplayOtherMoney(false);
    }
  };

  const handleChangeContactPhone = (e: any) => {
    if (e.target.value === 'static') {
      setEnableContactStaticPhone(!enableContactStaticPhone);
    } else {
      setEnableContactMobilePhone(!enableContactMobilePhone);
    }
  };

  const initialValues = {
    address: {
      line1: '',
      line2: '',
      city: -1,
    },
    details: '',
    currency: '',
    sale_price: '',
    rental_price: '',
    sale_type: '',
    accesories: '',
    services: '',
    vehicle_state: '',
    vehicle: -1,
    media: [],
  };

  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    try {
      const vehicles = await getVehicles(values?.filter?.vehicle);
      if (vehicles.results.length !== 1) {
        await postVehicle({ ...values, vehicle: vehicles?.results?.[0]?.id });
      }
      setStatus({});
    } catch (exception: any) {
      setStatus(exception.data);
    }
  };

  return (
    <MainContainer>
      <div className="flex justify-center flex-col items-center">
        <div className="w-[85%] bg-primary p-2 mt-4">
          <p className="w-full text-center text-white capitalize font-bold text-xl">
            Publicar Vehiculo
          </p>
        </div>
        <p className="capitalize font-bold text-xl my-4">
          Proporcione los datos especificos a continuacion
        </p>
        <div className="w-full p-1 flex justify-center flex-col items-center border border-primary">
          <div className="flex justify-center my-6 w-full">
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
                        name="address.city"
                        filter={{ state: values?.filter?.address?.state }}
                      />
                      <div>
                        <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                          Zone
                        </p>
                        <Field
                          className="p-2 border-1 border-black"
                          name="address.line1"
                        />
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
                          <div className="flex gap-2 items-center">
                            <input
                              onChange={handleChangeStatusVehicle}
                              type="radio"
                              value="Rent"
                              name="sale_type"
                            />
                            <label htmlFor="areVideos">Alquiler</label>
                          </div>
                          <div className="flex gap-2 items-center">
                            <input
                              onChange={handleChangeStatusVehicle}
                              type="radio"
                              value="Sell"
                              name="sale_type"
                            />
                            <label htmlFor="areVideos">Venta</label>
                          </div>
                          <div className="flex gap-2 items-center">
                            <input
                              onChange={handleChangeStatusVehicle}
                              type="radio"
                              value="RentSell"
                              name="sale_type"
                            />
                            <label htmlFor="areVideos">Alquiler y Venta</label>
                          </div>
                        </div>
                        <div>
                          <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                            Estado en
                          </p>
                          <div className="flex gap-2 items-center">
                            <input
                              onChange={handleChangeStateVehicle}
                              type="radio"
                              value="New"
                              name="vehicle_state"
                            />
                            <label htmlFor="areVideos">Nuevo</label>
                          </div>
                          <div className="flex gap-2 items-center">
                            <input
                              onChange={handleChangeStateVehicle}
                              type="radio"
                              value="Used"
                              name="vehicle_state"
                            />
                            <label htmlFor="areVideos">Usado</label>
                          </div>
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
                          {Array(imageLimit).map((_, idx) => (
                            <div
                              className="w-[100px] h-[100px] border border-solid border-primary"
                              key={idx}
                            >
                              <DragAndDropImg
                                name={`image[${idx}]`}
                                loading={imageLoaders?.[idx]}
                              />
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
                        <div className="flex justify-center items-center gap-6">
                          <div>
                            <input
                              onChange={handleChangeAreVideos}
                              type="radio"
                              name="areVideos"
                              value="true"
                            />
                            <label htmlFor="areVideos">Si</label>
                          </div>
                          <div>
                            <input
                              onChange={handleChangeAreVideos}
                              type="radio"
                              name="areVideos"
                              value="false"
                            />
                            <label htmlFor="areVideos">No</label>
                          </div>
                        </div>
                        {displayDragVideo && (
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
                              name="cantVideo"
                              id="cantVideo"
                            >
                              <option value="2">Hasta 2</option>
                              <option value="5">Hasta 5</option>
                            </select>
                          </div>
                        )}
                        <div className="flex justify-center flex-wrap gap-2 p-3">
                          <p>
                            Arrastre los videos que desea cargar, en cada uno de
                            los recuadros
                          </p>
                          {Array(videoLimit).map((_, idx) => (
                            <div
                              className="w-[100px] h-[100px] border border-solid border-primary"
                              key={idx}
                            >
                              <DragAndDropVideo
                                name={`videos[${idx}]`}
                                loading={videoLoaders?.[idx]}
                              />
                            </div>
                          ))}
                        </div>
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
                      {(displayVehicleAre === 1 || displayVehicleAre === 3) && (
                        <div>
                          <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                            Precio del Alquiler
                          </p>
                          <Field type="text" name="rental_price" />
                        </div>
                      )}
                      {(displayVehicleAre === 2 || displayVehicleAre === 3) && (
                        <div>
                          <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                            Precio del Alquiler
                          </p>
                          <Field type="text" name="sale_price" />
                        </div>
                      )}
                    </div>
                    <div>
                      {displayOtherMoney && (
                        <div className="flex flex-col">
                          <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                            Coloque las siglas de las monedas
                          </p>
                          <Field
                            type="text"
                            className="pr-2 pl-2 pt-2 pb-2 text-xs"
                            name="currency"
                          />
                        </div>
                      )}
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
                      buscar
                    </Button>
                    <Button className="capitalize w-fit">cancelar</Button>
                  </div>
                </div>
              )}
            </Form>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Landing;
