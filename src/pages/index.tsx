import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import Form from '@components/forms/Form';
import Button from '@components/layout/Button';
import CardHover from '@components/layout/Card/CardHover';
import DetailSearch from '@components/layout/FiltersBar/DetailSearch';
import FastSearch from '@components/layout/FiltersBar/FastSearch';
import MainContainer from '@components/layout/MainContainer';
import VehiclePostList from '@components/layout/Post/VehiclePostList';
import VehiclePostPhoto from '@components/layout/Post/VehiclePostPhoto';
import SplideImageComponent from '@components/layout/Splide';
import ContactSellerModal from '@components/modals/ContacSellerModal';

import { complexFilters, simpleFilters } from '@utils/Filters';
import { classNames } from '@utils/classNames';

import { Field, FormikHelpers, FormikValues } from 'formik';

import { initialValues } from '../data/fakeData';

const Landing: NextPage = () => {
  const [postMode, setMode] = useState<string>('photo');
  const [showModalContact, setShowModalContact] = useState<boolean>(false);
  const handlePost = (event: any) => {
    event.preventDefault();
    setMode(event.target.value);
  };

  return (
    <MainContainer activate="inicio" maxWidth="max-w-none">
      <div className="md:flex justify-between">
        <div className="w-96 text-xs flex flex-col gap-y-8">
          <div className="w-full">
            <details className="w-full">
              <summary className="w-full mb-2 text-lg capitalize">
                búsqueda rápida
              </summary>
              <Form
                initialValues={initialValues}
                onSubmit={(values: FormikValues) => {
                  console.log(values);
                }}
              >
                <FastSearch
                  layoutFilters="gap-2 grid md:grid-cols-3"
                  classNameInput="pr-2 pl-2 pt-2 pb-2 text-xs"
                  classNameSelect="pr-6 pl-2 pt-2 pb-2 text-xs"
                  filters={simpleFilters}
                />
              </Form>
            </details>
          </div>
          <div className="w-full">
            <details className="w-full">
              <summary className="w-full mb-2 text-lg capitalize">
                búsqueda detallada
              </summary>
              <Form
                initialValues={{}}
                onSubmit={(values: FormikValues) => {
                  console.log(values);
                }}
              >
                <DetailSearch
                  filters={complexFilters}
                  classNameInput="pr-2 pl-2 pt-2 pb-2 text-xs"
                  classNameSelect="pr-6 pl-2 pt-2 pb-2 text-xs"
                />
              </Form>
            </details>
          </div>
        </div>
        <div className="w-full mx-6">
          <div className="bg-primary py-4 px-5 text-white capitalize texx-xl font-bold">
            publicaciones realizadas
          </div>
          <div className="flex my-4 mx-4">
            <p className="text-red capitalize font-bold w-64">
              ver listado como:{' '}
            </p>
            <Form initialValues={{ typePost: 'photo' }} onSubmit={() => {}}>
              <div className="flex gap-x-16">
                <div className="radio flex items-center capitalize">
                  <input
                    type="radio"
                    name="typePost"
                    value="photo"
                    onChange={handlePost}
                  />
                  <div className="flex items-center">
                    <label className="ml-2">tipo foto</label>
                    <div className="h-8 w-8 bg-primary ml-2"></div>
                  </div>
                </div>
                <div className="radio flex items-center capitalize">
                  <input
                    type="radio"
                    name="typePost"
                    value="list"
                    onChange={handlePost}
                  />
                  <div className="flex items-center justify-center">
                    <label className="ml-2">tipo lista</label>
                    {/* <div className="w-2 h-8 flex flex-col gap-y-2 justify-center ml-2">
                      <hr className="border-black" />
                      <hr className="border-black" />
                      <hr className="border-black" />
                    </div> */}
                  </div>
                </div>
              </div>
            </Form>
          </div>
          <div className="flex mt-6 my-4 mx-4 justify-center">
            <p className="text-darkprimary">
              {' '}
              Seleccione los filtros especificados a continuación, si desea
              filtrar los resultados obtenidos
            </p>
          </div>
          <div className="flex my-4 mx-4 items-center">
            <p className="text-red capitalize font-bold w-64">
              tipo de vehículo
            </p>
            <div className="flex gap-x-16">
              <Button className="w-32 text-sm" bgColor="bg-primary">
                carro
              </Button>
              <Button className="w-32 text-sm" bgColor="bg-secundary">
                camioneta
              </Button>
              <Button className="w-40 text-sm" bgColor="bg-pink">
                camión
              </Button>
            </div>
          </div>
          <div className="flex my-4 mx-4 items-center">
            <p className="text-red capitalize font-bold w-64">vehiculo en</p>
            <div className="flex gap-x-16">
              <Button className="w-32 text-sm" bgColor="bg-primary">
                venta
              </Button>
              <Button className="w-32 text-sm" bgColor="bg-secundary">
                alquiler
              </Button>
              <Button className="w-40 text-sm" bgColor="bg-pink">
                alquiler y venta
              </Button>
            </div>
          </div>
          <div className="flex my-4 mx-4 items-center">
            <p className="text-red capitalize font-bold w-64">
              ordenar resultados por
            </p>
            <div className="flex gap-x-16">
              <Button className="w-32 text-sm" bgColor="bg-primary">
                precio
              </Button>
              <Button className="w-32 text-sm" bgColor="bg-secundary">
                alquiler
              </Button>
            </div>
          </div>

          <div>
            <Form initialValues={{ selected: [] }} onSubmit={() => {}}>
              <div
                className={classNames(
                  postMode == 'photo' ? 'lg:grid-cols-2 2xl:grid-cols-3' : '',
                  'grid'
                )}
              >
                {[
                  initialValues,
                  initialValues,
                  initialValues,
                  initialValues,
                  initialValues,
                  initialValues,
                ].map((element, index) => (
                  <div key={index} className="flex p-6 gap-x-4 relative">
                    <Field
                      type="checkbox"
                      name="selected"
                      value={`post-${index}`}
                    />
                    {postMode == 'photo' ? (
                      <VehiclePostPhoto
                        index={index}
                        setShowModalContact={setShowModalContact}
                        {...element}
                      />
                    ) : (
                      <VehiclePostList
                        setShowModalContact={setShowModalContact}
                        {...element}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Form>
          </div>
          <ContactSellerModal
            showModal={showModalContact}
            setShowModal={setShowModalContact}
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default Landing;
