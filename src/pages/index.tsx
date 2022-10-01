import type { NextPage } from 'next';

import DetailSearch from '@components/layout/FiltersBar/DetailSearch';
import FastSearch from '@components/layout/FiltersBar/FastSearch';
import MainContainer from '@components/layout/MainContainer';
import VehiclePost from '@components/layout/VehiclePost';

import { complexFilters, simpleFilters } from '@utils/Filters';

import { initialValues } from '@data/fakeData';

const Landing: NextPage = () => {
  return (
    <MainContainer maxWidth="w-11/12">
      <div className="md:flex justify-between">
        <div className="w-96 text-xs flex flex-col gap-y-8">
          <FastSearch filters={simpleFilters} />
          <DetailSearch filters={complexFilters}></DetailSearch>
        </div>
        <div className="flex">
          <VehiclePost {...initialValues} />
          <VehiclePost {...initialValues} />
        </div>
      </div>
    </MainContainer>
  );
};

export default Landing;
