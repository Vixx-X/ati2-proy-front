import type { NextPage } from 'next';

import Page from '@components/Page';
import MainContainer from '@components/layout/MainContainer';
import EditVehicleForm from '@components/sections/vehicle/EditVehicleForm';

const CreateVehicle: NextPage = () => {
  const initialValues = {
    filter: {
      address: {
        country: '',
        continent: '',
        state: '',
      },
      vehicle: {
        brand: '',
        model: '',
        year: '',
      },
    },
    address: {
      city_id: '',
      line1: '',
      line2: '',
    },
    sale_type: '',
    vehicle_state: '',
    rental_price: '',
    sale_price: '',
    details: '',
    accesories: '',
    services: '',
    contact: {
      contact_hour_start: '',
      contact_hour_end: '',
      contact_days: [],
      first_name: '',
      last_name: '',
      email: '',
      local_phone: '',
      phone: '',
    },
    vehicle_id: '',
    video_ids: [],
    image_ids: [],
  };

  return (
    <Page needAuth>
      <MainContainer activate={['vehicle', 'create-post']}>
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
              <EditVehicleForm createMode initialValues={initialValues} />
            </div>
          </div>
        </div>
      </MainContainer>
    </Page>
  );
};

export default CreateVehicle;
