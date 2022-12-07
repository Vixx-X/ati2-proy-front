import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Loader from '@components/Loader';
import MainContainer from '@components/layout/MainContainer';
import EditVehicleForm from '@components/sections/vehicle/EditVehicleForm';

import { getPostVehicleById } from '@fetches/post';

import useSWR from 'swr';

const EditVehicle: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id ? ['vehicle_post', id] : null, () =>
    getPostVehicleById(id)
  );

  const initialValues = {
    id, // this is important, it shows there is an edit happening
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
      city_id: data?.address.city.id,
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
      contact_hour_start: data?.contact.contact_hour_start,
      contact_hour_end: data?.contact.contact_hour_end,
      contact_days: data?.contact.contact_days,
      first_name: data?.contact.first_name,
      last_name: data?.contact.last_name,
      email: data?.contact.email,
      local_phone: data?.local_phone,
      phone: data?.phone,
    },
    // currency: data.currency,
    vehicle_id: data?.vehicle?.id,
    video_ids: data?.videos?.map((url: string, idx: number) => [
      {
        url,
        id: data?.video_ids[idx],
      },
    ]),
    image_ids: data?.images?.map((url: string, idx: number) => [
      {
        url,
        id: data?.image_ids[idx],
      },
    ]),
  };

  return (
    <MainContainer activate={['vehicle', 'edit-post']}>
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
            {!data ? (
              <Loader />
            ) : (
              <EditVehicleForm initialValues={initialValues} />
            )}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default EditVehicle;
