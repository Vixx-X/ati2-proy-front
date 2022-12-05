import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import MainContainer from '@components/layout/MainContainer';
import EditVehicleForm from '@components/sections/vehicle/EditVehicleForm';

import { getPostVehicleById } from '@fetches/post';

import useSWR from 'swr';

const EditVehicle: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(['vehicle_post', id], () => getPostVehicleById(id));

  const initialValues = {
    filter: {
      address: {
        country: data?.address.city.state.country.iso_3166_1_a2,
        continent: data?.address.city.state.country.continent.id,
        state: data?.address.city.state.id,
      },
      vehicle: {
        brand: data?.vehicle.brand,
        model: data?.vehicle.model,
        year: data?.vehicle.year,
      },
    },
    address: {
      city: data?.address.city.id,
      line1: data?.address.line1,
      line2: data?.address.line2,
    },
    sale_type: data?.sale_type,
    vehicle_state: data?.vehicle_state,
    rental_price: data?.rental_price,
    sale_price: data?.sale_price,
    details: data?.details,
    accesories: data?.accesories,
    services: data?.services,
    contact: {
      // "contact_hour_start": "2022-12-05T05:55:38.575Z",
      // "contact_hour_end": "2022-12-05T05:55:38.575Z",
      // "contact_days": [
      //   "string"
      // ]
      first_name: data?.contact.first_name,
      last_name: data?.contact.last_name,
      email: data?.contact.email,
      local_phone: data?.local_phone,
      phone: data?.phone,
      days: data?.contact.contact_days,
    },
    // currency: data.currency,
  };

  console.log(data, 'daataaaa', initialValues);

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
            <EditVehicleForm initialValues={initialValues} />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default EditVehicle;
