import { useMemo, useState } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Form from '@components/forms/Form';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import VehiclePostList from '@components/layout/Post/VehiclePostList';
import VehiclePostPhoto from '@components/layout/Post/VehiclePostPhoto';
import SplideImageComponent from '@components/layout/Splide';
import ContactSellerModal from '@components/modals/ContacSellerModal';
import VehicleComplexSearch from '@components/sections/vehicle/ComplexVehicleSearch';
import VehicleFastSearch from '@components/sections/vehicle/FastVehicleSearch';

import { getPostsVehicles } from '@fetches/post';

import { classNames } from '@utils/classNames';

import { Field } from 'formik';
import ReactPaginate from 'react-paginate';
import useSWR from 'swr';

const PAGE_SIZE = 8;

const Landing: NextPage = () => {
  const router = useRouter();
  const query = router.query;

  const [postMode, setMode] = useState<string>('photo');
  const [showModalContact, setShowModalContact] = useState<boolean>(false);
  const handlePost = (event: any) => {
    event.preventDefault();
    setMode(event.target.value);
  };

  const handlePagination = ({ selected }: any) => {
    const path = router.pathname;
    router.push({
      pathname: path,
      query: {
        ...query,
        page: selected,
      },
    });
  };

  const filters = router.query;

  const { data } = useSWR(
    [
      'post-vehicle',
      {
        ...query,
        limit: PAGE_SIZE,
        offset: (((router.query.page ?? 1) as number) - 1) * PAGE_SIZE,
      },
    ],
    (_, q) => getPostsVehicles(q)
  );

  const pages = useMemo(
    () => Math.ceil((data?.count ?? 1) / PAGE_SIZE),
    [data]
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
                    <div className="w-2 h-8 flex flex-col gap-y-2 justify-center ml-2">
                      <hr className="border-black" />
                      <hr className="border-black" />
                      <hr className="border-black" />
                    </div>
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
            <ReactPaginate
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              previousLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 -12 24 50"
                >
                  <path d="M3 12l18-12v24z" fill="#29A9E0" />
                </svg>
              }
              nextLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 -12 24 50"
                >
                  <path d="M21 12l-18 12v-24z" fill="#29A9E0" />
                </svg>
              }
              breakLabel={'...'}
              pageCount={pages}
              onPageChange={handlePagination}
              forcePage={(query?.page ?? 1) as any}
              containerClassName={'flex items-center justify-center list-none'}
              pageClassName={
                'ml-0.5 p-1 mr-0.5 w-8 h-8 rounded-md text-center border border-gray-400'
              }
              activeClassName={
                'ml-0.5 p-1 mr-0.5 w-8 h-8 rounded-md text-center border border-blue-500'
              }
              nextLinkClassName={'ml-2 p-1 mr-2 w-8 h-8 rounded-md text-center'}
              previousLinkClassName={
                'ml-2 p-1 mr-2 w-8 h-8 rounded-md text-center'
              }
              renderOnZeroPageCount={null as any}
            />
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
