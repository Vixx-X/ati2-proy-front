import { useState } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Form from '@components/forms/Form';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import Paginate from '@components/layout/Paginate';
import VehiclePostList from '@components/layout/Post/VehiclePostList';
import VehiclePostPhoto from '@components/layout/Post/VehiclePostPhoto';
import ContactSellerModal from '@components/modals/ContacSellerModal';
import VehicleComplexSearch from '@components/sections/vehicle/ComplexVehicleSearch';
import VehicleFastSearch from '@components/sections/vehicle/FastVehicleSearch';

import { PAGE_SIZE } from '@config';

import { getPostsVehicles } from '@fetches/post';

import { classNames } from '@utils/classNames';

import { Field } from 'formik';
import useSWR from 'swr';

const Landing: NextPage = () => {
  const router = useRouter();
  const query = router.query;

  const [showModalContact, setShowModalContact] = useState<boolean>(false);

  const [postMode, setMode] = useState<string>('photo');
  const handlePost = (event: any) => {
    setMode(event.target.value);
  };

  const filters = router.query;

  const { data } = useSWR(['post-vehicles', query], (_, q) =>
    getPostsVehicles(q)
  );

  return (
    <MainContainer activate="inicio" maxWidth="max-w-none">
      <div className="md:flex justify-between">
        <div className="w-96 text-xs flex flex-col gap-y-8">
          <div className="w-full">
            <details className="w-full">
              <summary className="w-full mb-2 text-lg capitalize">
                búsqueda rápida
              </summary>
              <VehicleFastSearch
                className="gap-2 grid md:grid-cols-3"
                filters={filters}
                onFilter={(values: any) =>
                  router.push({
                    query: values,
                  })
                }
              />
            </details>
          </div>
          <div className="w-full">
            <details className="w-full">
              <summary className="w-full mb-2 text-lg capitalize">
                búsqueda detallada
              </summary>
              <VehicleComplexSearch
                className="gap-2 grid md:grid-cols-3"
                filters={filters}
                onFilter={(values: any) =>
                  router.push({
                    query: values,
                  })
                }
              />
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
            <div className="flex gap-x-16" role="group">
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
                  <div className="w-6 h-8 flex flex-col gap-y-2 justify-center ml-2">
                    <hr className="border-black w-full" />
                    <hr className="border-black w-full" />
                    <hr className="border-black w-full" />
                  </div>
                </div>
              </div>
            </div>
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
              <Button
                className="w-32 text-sm"
                bgColor="bg-primary"
                href={{
                  query: { ...query, vehicle_type: 'CAR' },
                }}
                anchorTag
              >
                carro
              </Button>
              <Button
                className="w-32 text-sm"
                bgColor="bg-secundary"
                href={{
                  query: { ...query, vehicle_type: 'SUV' },
                }}
                anchorTag
              >
                camioneta
              </Button>
              <Button
                className="w-40 text-sm"
                bgColor="bg-pink"
                href={{
                  query: { ...query, vehicle_type: 'TRUCK' },
                }}
                anchorTag
              >
                camión
              </Button>
            </div>
          </div>
          <div className="flex my-4 mx-4 items-center">
            <p className="text-red capitalize font-bold w-64">vehiculo en</p>
            <div className="flex gap-x-16">
              <Button
                className="w-32 text-sm"
                bgColor="bg-primary"
                href={{
                  query: { ...query, sale_type: 'SALE' },
                }}
                anchorTag
              >
                venta
              </Button>
              <Button
                className="w-32 text-sm"
                bgColor="bg-secundary"
                href={{
                  query: { ...query, sale_type: 'RENT' },
                }}
                anchorTag
              >
                alquiler
              </Button>
              <Button
                className="w-40 text-sm"
                bgColor="bg-pink"
                href={{
                  query: { ...query, sale_type: 'BOTH' },
                }}
                anchorTag
              >
                alquiler y venta
              </Button>
            </div>
          </div>
          <div className="flex my-4 mx-4 items-center">
            <p className="text-red capitalize font-bold w-64">
              ordenar resultados por
            </p>
            <div className="flex gap-x-16">
              <Button
                className="w-32 text-sm"
                bgColor="bg-primary"
                href={{
                  query: { ...query, ordering: 'sale_price' },
                }}
                anchorTag
              >
                precio
              </Button>
              <Button
                className="w-32 text-sm"
                bgColor="bg-secundary"
                href={{
                  query: { ...query, ordering: 'rent_price' },
                }}
                anchorTag
              >
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
                {data?.results?.map((element: any, index: any) => (
                  <div key={element.id} className="flex p-6 gap-x-4 relative">
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
            <Paginate total={data?.count ?? 0} />
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
