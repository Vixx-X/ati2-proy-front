import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import MainContainer from '@components/layout/MainContainer';
import EditVehicleForm from '@components/sections/vehicle/EditVehicleForm';

import { getPostVehicleById } from '@fetches/post';

import useSWR from 'swr';

const EditVehicle: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
//   const { data } = useSWR(['vehicle_post', id], () => getPostVehicleById(id));
//   console.log(data);

//   const initialValues1 = {
//     filter: {
//         address : {
//             country : 
//             state : {

//             },
//             city: {

//             },
//         }
//     }
// }
//     address: values.address,
//     details: values.details,
//     currency:
//       values?.currency1 === 'OTHER' ? values?.currency2 : values?.currency1,
//     sale_price: values.sale_price,
//     rental_price: values.rental_price,
//     sale_type: values.sale_type,
//     accesories: values.accesories,
//     services: values.services,
//     vehicle_state: values.vehicle_state,
//     vehicle: vehicle,
//     media: [],
//   };

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
