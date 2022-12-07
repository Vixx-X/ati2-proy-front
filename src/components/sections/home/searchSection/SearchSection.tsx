import { useRouter } from 'next/router';

import VehicleComplexSearch from '@components/sections/vehicle/ComplexVehicleSearch';
import VehicleFastSearch from '@components/sections/vehicle/FastVehicleSearch';
import KeyWordSearch from '@components/sections/vehicle/KeyWordSearch';

import { SERVER_URLS } from '@config';

const { URL_VEHICLES } = SERVER_URLS;

const SearchSection = ({}) => {
  const router = useRouter();
  const query = router.query;

  const filters = router.query;

  const search = (values: any) => {
    router.push({
      pathname: URL_VEHICLES,
      query: values,
    });
  };

  return (
    <>
      <div className="w-full">
        <details className="w-full">
          <summary className="w-full mb-2 text-lg rounded-md border-2 border-primary py-2 px-4 font-bold">
            Búsqueda por palabra clave
          </summary>
          <KeyWordSearch
            onFilter={(values: any) => search(values)}
            filters={filters}
            className="mt-4 mb-10"
          />
        </details>
      </div>
      <div className="w-full">
        <details className="w-full">
          <summary className="w-full mb-2 text-lg rounded-md border-2 border-primary py-2 px-4 font-bold">
            Búsqueda rápida
          </summary>
          <VehicleFastSearch
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-6 my-10"
            filters={filters}
            onFilter={(values: any) => search(values)}
            autoSubmit={false}
          />
        </details>
      </div>
      <div className="w-full">
        <details className="w-full">
          <summary className="w-full mb-2 text-lg rounded-md border-2 border-primary py-2 px-4 font-bold">
            Búsqueda detallada
          </summary>
          <VehicleComplexSearch
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-6 my-10"
            filters={filters}
            onFilter={(values: any) => search(values)}
            autoSubmit={false}
          />
        </details>
      </div>
    </>
  );
};

export default SearchSection;
