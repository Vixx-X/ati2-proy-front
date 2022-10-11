import { useState } from 'react';

import type { NextPage } from 'next';

import { Form } from '@components/forms/Form';
import Button from '@components/layout/Button';
import FastSearch from '@components/layout/FiltersBar/FastSearch';
import MainContainer from '@components/layout/MainContainer';

import {
  brandYearVehicle,
  vehicleLocation,
  vehicleStatus,
} from '../../../utils/Filters';

const initialValues = {
  contient: '',
  contry: '',
  state: '',
  vehicleType: '',
  vehicleBrand: '',
  vehicleModel: '',
};

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

  const handleSetImage = (data: string, index: number) => {
    images[index] = data;
  };

  return (
    <MainContainer>
      <div className="flex justify-center flex-col items-center">
        <div className="w-[85%] bg-primary py-2 px-4">
          <ul className="flex flex-wrap gap-x-4 gap-y-4 justify-between text-white no-underline items-center capitalize font-bold">
            {options.map(
              ({ link, text, onClick, activate }: any, index: number) => (
                <li key={index}>
                  <a
                    className={activate ? 'underline text-secundary' : ''}
                    href={link}
                    onClick={onClick}
                  >
                    {text}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
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
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <div className="w-full flex flex-col gap-6 px-5">
                <div className="w-full flex flex-col items-center gap-6">
                  <div className="p-3 w-1/3 bg-secundary">
                    <p className="w-full text-center text-white capitalize font-bold text-xl">
                      Ubicacion del Vehiculo
                    </p>
                  </div>
                  <FastSearch
                    layoutFilters="flex justify-around"
                    classNameInput="pr-2 pl-2 pt-2 pb-2 text-xs"
                    classNameSelect="pr-6 pl-2 pt-2 pb-2 text-xs"
                    filters={vehicleLocation}
                  />
                </div>
                <div className="flex gap-10 w-full">
                  <div className="py-2 w-2/3 flex flex-col items-center gap-6">
                    <div className="w-2/3 py-3 px-10 bg-secundary">
                      <p className="w-full text-center text-white capitalize font-bold text-xl">
                        Marca, modelo y año del vehículo
                      </p>
                    </div>
                    <FastSearch
                      layoutFilters="flex justify-between"
                      classNameInput="pr-2 pl-2 pt-2 pb-2 text-xs"
                      classNameSelect="pr-6 pl-2 pt-2 pb-2 text-xs"
                      filters={brandYearVehicle}
                    />
                  </div>
                  <div className="py-2 w-1/3 flex flex-col items-center gap-6">
                    <div className="py-3 px-10 w-9/12 bg-secundary">
                      <p className="w-full text-center text-white capitalize font-bold text-xl">
                        Estatus del vehículo
                      </p>
                    </div>
                    <FastSearch
                      layoutFilters="flex justify-between"
                      classNameInput="pr-2 pl-2 pt-2 pb-2 text-xs"
                      classNameSelect="pr-6 pl-2 pt-2 pb-2 text-xs"
                      filters={vehicleStatus}
                    />
                  </div>
                </div>
                <div className="flex w-full gap-10">
                  <div className="w-8/12 flex items-center flex-col">
                    <div className="w-1/2 py-3 px-10 bg-secundary">
                      <p className="w-full text-center text-white capitalize font-bold text-xl">
                        Fotos del Vehiculo
                      </p>
                    </div>
                    <div className="w-full border border-2 border-darkprimary">
                      <p className="text-center">
                        Arrastre las fotos que desea cargar en cada uno de los
                        recuadros
                      </p>
                      <div></div>
                    </div>
                  </div>
                  <div className="w-4/12 flex items-center flex-col">
                    <div className="w-8/12 py-3 px-10 bg-secundary">
                      <p className="w-full text-center text-white capitalize font-bold text-xl">
                        Fotos del Vehiculo
                      </p>
                    </div>
                    <div className="w-full border border-2 border-darkprimary">
                      <p>
                        Arrastre las fotos que desea cargar en cada uno de los
                        recuadros
                      </p>
                      <div className="flex">{images.map((image) => {
                        
                      })}</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <Button type="submit" className="capitalize w-fit">
                    buscar
                  </Button>
                  <Button className="capitalize w-fit">cancelar</Button>
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
