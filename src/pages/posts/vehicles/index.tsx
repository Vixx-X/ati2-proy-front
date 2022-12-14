import { useState } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Loader from '@components/Loader';
import Form from '@components/forms/Form';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import Paginate from '@components/layout/Paginate';
import VehiclePostList from '@components/layout/Post/VehiclePostList';
import VehiclePostPhoto from '@components/layout/Post/VehiclePostPhoto';
import ContactSellerModal from '@components/modals/ContacSellerModal';
import VehicleComplexSearch from '@components/sections/vehicle/ComplexVehicleSearch';
import VehicleFastSearch from '@components/sections/vehicle/FastVehicleSearch';

import { getPostsVehicles } from '@fetches/post';

import useTranslate from '@hooks/useTranslate';

import userStore from '@stores/UserStore';

import { classNames } from '@utils/classNames';

import { Field } from 'formik';
import useSWR from 'swr';

const Vehicles: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const user = userStore((state) => state.user);

  const [showModalContact, setShowModalContact] = useState<boolean>(false);

  const [postMode, setMode] = useState<string>('photo');
  const handlePost = (event: any) => {
    setMode(event.target.value);
  };

  const filters = router.query;

  const { data } = useSWR(['post-vehicles', query], (_, q) =>
    getPostsVehicles(q)
  );

  const t = useTranslate();
  return (
    <MainContainer activate={['vehicle', 'view-posts']} maxWidth="max-w-none">
      <div className="md:flex justify-between">
        <div className="w-96 text-xs flex flex-col gap-y-8">
          <div className="w-full">
            <details className="w-full">
              <summary className="w-full mb-2 text-lg capitalize">
                {t('Búsqueda rápida')}
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
                {t('Búsqueda detallada')}
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
            {t('Publicaciones realizadas')}
          </div>
          <div className="flex my-4 mx-4">
            <p className="text-red capitalize font-bold w-64">
              {t('Ver listado como:')}
            </p>
            <div className="flex gap-x-16" role="group">
              <div className="radio flex items-center capitalize">
                <input
                  type="radio"
                  name="typePost"
                  value="photo"
                  checked={postMode === 'photo'}
                  onChange={handlePost}
                />
                <div className="flex items-center">
                  <label className="ml-2">{t('Tipo foto')}</label>
                  <div className="h-8 w-8 bg-primary ml-2"></div>
                </div>
              </div>
              <div className="radio flex items-center capitalize">
                <input
                  type="radio"
                  name="typePost"
                  checked={postMode === 'list'}
                  value="list"
                  onChange={handlePost}
                />
                <div className="flex items-center justify-center">
                  <label className="ml-2">{t('Tipo lista')}</label>
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
              {` Seleccione los filtros especificados a continuación, si desea
              filtrar los resultados obtenidos`}
            </p>
          </div>
          <div className="flex my-4 mx-4 items-center">
            <p className="text-red capitalize font-bold w-64">
              {t('Tipo de vehículo')}
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
                {t('Carro')}
              </Button>
              <Button
                className="w-32 text-sm"
                bgColor="bg-secundary"
                href={{
                  query: { ...query, vehicle_type: 'SUV' },
                }}
                anchorTag
              >
                {t('Camioneta')}
              </Button>
              <Button
                className="w-40 text-sm"
                bgColor="bg-pink"
                href={{
                  query: { ...query, vehicle_type: 'TRUCK' },
                }}
                anchorTag
              >
                {t('Camión')}
              </Button>
            </div>
          </div>
          <div className="flex my-4 mx-4 items-center">
            <p className="text-red capitalize font-bold w-64">
              {t('Vehículo en')}
            </p>
            <div className="flex gap-x-16">
              <Button
                className="w-32 text-sm"
                bgColor="bg-primary"
                href={{
                  query: { ...query, sale_type: 'SALE' },
                }}
                anchorTag
              >
                {t('Venta')}
              </Button>
              <Button
                className="w-32 text-sm"
                bgColor="bg-secundary"
                href={{
                  query: { ...query, sale_type: 'RENT' },
                }}
                anchorTag
              >
                {t('Alquiler')}
              </Button>
              <Button
                className="w-40 text-sm"
                bgColor="bg-pink"
                href={{
                  query: { ...query, sale_type: 'BOTH' },
                }}
                anchorTag
              >
                {t('Alquiler y venta')}
              </Button>
            </div>
          </div>
          <div className="flex my-4 mx-4 items-center">
            <p className="text-red capitalize font-bold w-64">
              {t('Ordenar resultados por')}
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
                {t('Precio')}
              </Button>
              <Button
                className="w-32 text-sm"
                bgColor="bg-secundary"
                href={{
                  query: { ...query, ordering: 'rent_price' },
                }}
                anchorTag
              >
                {t('Alquiler')}
              </Button>
            </div>
          </div>

          <div>
            {!data && <Loader />}
            <Form initialValues={{ selected: [] }} onSubmit={() => {}}>
              <div
                className={classNames(
                  postMode == 'photo' ? 'lg:grid-cols-2 2xl:grid-cols-3' : '',
                  'grid'
                )}
              >
                {data &&
                  data?.results?.map((element: any, index: any) => (
                    <div key={element.id} className="flex p-6 gap-x-4 relative">
                      {element.author === user?.id ? (
                        <Field
                          type="checkbox"
                          name="selected"
                          value={`post-${index}`}
                        />
                      ) : null}
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

export default Vehicles;
