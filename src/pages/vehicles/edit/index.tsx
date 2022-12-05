import { useState } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

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
import MainContainer from '@components/layout/MainContainer';
import EditVehicleForm from '@components/sections/vehicle/EditVehicleForm';

import { getPostVehicleById, postMedia, postVehicle } from '@fetches/post';
import { getVehicles } from '@fetches/vehicles';

import useArray from '@hooks/useArray';

import { FormikValues } from 'formik';
import useSWR from 'swr';

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

const EditVehicle: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(['vehicle_post'], () => getPostVehicleById(id));

  const initialValues = {
    address: {
      line1: '',
      line2: '',
      city: '',
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

  const initialValues1 = {
    address: {
      line1: 'los chaguaramos',
      line2: 'santa monica',
      city: 'Caracas',
    },
    details: 'la vida es bonitica',
    currency: 'USD',
    sale_price: 300,
    rental_price: 500,
    sale_type: 'RENT',
    accesories: 'blanquito lindo',
    services: 'casita',
    vehicle_state: 'NEW',
    vehicle: 1,
    media: [],
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
            <EditVehicleForm />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default EditVehicle;
