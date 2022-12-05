import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import MainContainer from '@components/layout/MainContainer';
import EditVehicleForm from '@components/sections/vehicle/EditVehicleForm';

import { getPostVehicleById } from '@fetches/post';

import useSWR from 'swr';

const CreateVehicle: NextPage = () => {
  const router = useRouter();

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
      city_id: 2,
    },
    contact: {
      first_name: 'gabriela',
      last_name: 'ustariz',
      email: 'gabyustariz@hotmail.com',
      local_phone: '+582128886655',
      phone: '+582128886655',
      days: '+582128886655',
        // contact_hour_start: '2022-12-05T05:55:38.575Z,
        // contact_hour_end": '2022-12-05T05:55:38.575Z",
    },
    details: 'la vida es bonitica',
    currency: 'USD',
    sale_price: 300,
    rental_price: 500,
    sale_type: 'RENT',
    accesories: 'blanquito lindo',
    services: 'casita',
    vehicle_state: 'NEW',
    vehicle_id: 1,
    video_ids: [],
    image_ids: [],
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
          Proporcione los datos especificos a continuación
        </p>
        <div className="w-full p-1 flex justify-center flex-col items-center border border-primary">
          <div className="flex justify-center my-6 w-full">
            <EditVehicleForm createMode initialValues={initialValues1} />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default CreateVehicle;
