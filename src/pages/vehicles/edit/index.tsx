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
import TextArea from '@components/forms/TextArea';
import YearSelect from '@components/forms/YearSelect';
// import ZoneSelect from '@components/forms/ZoneSelect';
import Button from '@components/layout/Button';
// import FastSearch from '@components/layout/FiltersBar/FastSearch';
import MainContainer from '@components/layout/MainContainer';

const initialValues = {
  contient: '',
  contry: '',
  state: '',
  vehicleType: '',
  vehicleBrand: '',
  vehicleModel: '',
  brand: '',
};
const textAreaData = [
  {
    title: 'Detalles o especificaciones del vehículo',
    description:
      'Si lo deseas, puedes indicar detalles adicionales del vehículo. Que no sea los accesorios, en esta sección',
    name: 'vehicleDetails',
  },
  {
    title: 'Accesorios o comodidades',
    description: 'Accesorios o comodidades',
    name: 'vehicleAccesories',
  },
  {
    title: 'Servicios al día',
    description:
      'SI deseas, indica los trabajos que se le han realizado al vehículo recientemente, como: Cambio de aceite, cauchos, tapicería, pago de seguros al día, entre otros',
    name: 'vehicleServices',
  },
  {
    title: 'Ubicación exacta',
    description: 'Si deseas, puedes indicar donde se encuentra el vehículo',
    name: 'vehicleLocation',
  },
];
const options = [
  { link: '#', text: 'dashborad', onClick: () => {}, activate: true },
  { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
  { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
  { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
  { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
  { link: '#', text: 'dashborad', onClick: () => {}, activate: false },
];

const Landing: NextPage = () => {
  const [images, setImages] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [videos, setVideos] = useState<Array<string>>([]);
  const [displayDragVideo, setDisplayDragVideo] = useState(false);
  const [displayVehicleAre, setDisplayVehicleAre] = useState(0);
  const [displayOtherMoney, setDisplayOtherMoney] = useState(false);
  const [enableContactStaticPhone, setEnableContactStaticPhone] =
    useState(false);
  const [enableContactMobilePhone, setEnableContactMobilePhone] =
    useState(false);
  const handleSetImage = (data: string, index: number) => {
    console.log('DATA', data);
    console.log('Index', index);
    const Images = [...images];
    Images[index] = data;
    setImages(Images);
  };

  const handleSetVideo = (data: string) => {};

  const handleChangeCantVideo = (e: any) => {
    if (e.target.value === '2') {
      setVideos(['', '']);
    }
    if (e.target.value === '5') {
      setVideos(['', '', '', '', '']);
    }
  };

  const handleChangeAreVideos = (e: any) => {
    if (e.target.value === 'true') {
      setDisplayDragVideo(true);
    }
    if (e.target.value === 'false') {
      setDisplayDragVideo(false);
    }
  };

  const handleChangeStateVehicle = (e: any) => {
    console.log('RADIO:', e);
  };

  const handleChangeStatusVehicle = (e: any) => {
    if (e.target.value === 'Rent') {
      setDisplayVehicleAre(1);
    } else if (e.target.value === 'Sell') {
      setDisplayVehicleAre(2);
    } else {
      setDisplayVehicleAre(3);
    }
    console.log('TARGET', e);
  };

  const handleChangeMoney = (e: any) => {
    if (e.target.value === 'other') {
      setDisplayOtherMoney(true);
    } else {
      setDisplayOtherMoney(false);
    }
  };

  const handleChangeContactPhone = (e: any) => {
    console.log(e.target.value);
    if (e.target.value === 'static') {
      setEnableContactStaticPhone(!enableContactStaticPhone);
      console.log(enableContactStaticPhone);
    } else {
      setEnableContactMobilePhone(!enableContactMobilePhone);
      console.log(enableContactMobilePhone);
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
              displayProps={'w-full'}
              initialValues={initialValues}
              onSubmit={(values) => {
                console.log('imagenes', images);
                console.log(values);
                /* alert(JSON.stringify(values, null, 2)); */
              }}
            >
              <div className="w-full flex flex-col gap-6 px-5">
                <div className="w-full flex flex-col items-center gap-6">
                  <div className="p-3 w-1/3 bg-secundary">
                    <p className="w-full text-center text-white capitalize font-bold text-xl">
                      Ubicacion del Vehiculo
                    </p>
                  </div>
                  <div className="w-full flex justify-around gap-2">
                    <ContinentSelect name="continent" />
                    <CountrySelect name="country" />
                    <StateSelect name="state" />
                    <CitySelect name="city" />
                    <div>
                      <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                        Zone
                      </p>
                      <Field
                        className="p-2 border-1 border-black"
                        name="zone"
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
                      <BrandSelect name="brand" />
                      <ModelSelect name="model" />
                      <YearSelect name="year" />
                      {/* <TypeSelect name="brand"/> */}
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
                            name="StatusVehicle"
                          />
                          <label htmlFor="areVideos">Alquiler</label>
                        </div>
                        <div className="flex gap-2 items-center">
                          <input
                            onChange={handleChangeStatusVehicle}
                            type="radio"
                            value="Sell"
                            name="StatusVehicle"
                          />
                          <label htmlFor="areVideos">Venta</label>
                        </div>
                        <div className="flex gap-2 items-center">
                          <input
                            onChange={handleChangeStatusVehicle}
                            type="radio"
                            value="RentSell"
                            name="StatusVehicle"
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
                            name="VehicleState"
                          />
                          <label htmlFor="areVideos">Nuevo</label>
                        </div>
                        <div className="flex gap-2 items-center">
                          <input
                            onChange={handleChangeStateVehicle}
                            type="radio"
                            value="Used"
                            name="VehicleState"
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
                        {images.map((image, index) => (
                          <div
                            className="w-[100px] h-[100px] border border-solid border-primary"
                            key={index}
                          >
                            <DragAndDropImg
                              key={index}
                              index={index}
                              handleDrag={handleSetImage}
                            ></DragAndDropImg>
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
                            onChange={handleChangeCantVideo}
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
                        {videos.map((videos, index) => (
                          <div
                            className="w-[100px] h-[100px] border border-solid border-primary"
                            key={index}
                          >
                            <DragAndDropVideo
                              key={index}
                              index={index}
                              handleDrag={handleSetVideo}
                            ></DragAndDropVideo>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 items-center justify-between">
                  {textAreaData.map(({ name, title, description }, index) => (
                    <div
                      className={index % 2 === 0 ? 'w-[65%]' : 'w-[30%]  '}
                      key={index}
                    >
                      <div className="p-3 w-[80%] bg-secundary">
                        <p className="w-full text-center text-white capitalize font-bold text-xl">
                          {title}
                        </p>
                      </div>
                      <p className="w-full px-3 text-center my-1">
                        {description}
                      </p>
                      <TextArea name={name} />
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
                        <Field type="text" name="rentPrice" />
                      </div>
                    )}
                    {(displayVehicleAre === 2 || displayVehicleAre === 3) && (
                      <div>
                        <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                          Precio del Alquiler
                        </p>
                        <Field type="text" name="sellPrice" />
                      </div>
                    )}
                  </div>
                  <div>
                    {/* <FastSearch
                      onChange={handleChangeMoney}
                      layoutFilters="flex justify-around"
                      classNameInput="pr-2 pl-2 pt-2 pb-2 text-xs"
                      classNameSelect="pr-6 pl-2 pt-2 pb-2 text-xs"
                      filters={money}
                    /> */}
                    {displayOtherMoney && (
                      <div className="flex flex-col">
                        <p className="bg-sky-600 py-1 px-4 mb-2 cursor-pointer text-white font-semibold rounded">
                          Coloque las siglas de las monedas
                        </p>
                        <Field
                          type="text"
                          className="pr-2 pl-2 pt-2 pb-2 text-xs"
                          name="newMoney"
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
                  <Button className="capitalize w-fit">ancelar</Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Landing;