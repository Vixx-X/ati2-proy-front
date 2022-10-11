import { useState } from 'react';

import type { NextPage } from 'next';

import DragAndDrop from '@components/forms/DragAndDrop';
import Form from '@components/forms/Form';
import Button from '@components/layout/Button';
import DetailSearch from '@components/layout/FiltersBar/DetailSearch';
import FastSearch from '@components/layout/FiltersBar/FastSearch';
import VehiclePost from '@components/layout/VehiclePost';

import { Field, FormikValues } from 'formik';

import { initialValues } from '../data/fakeData';
import { complexFilters, simpleFilters } from '../utils/Filters';
import MainContainer from '@components/layout/MainContainer';

const Landing: NextPage = () => {
  return (
    <MainContainer>
      <FiltersBar/>
    </MainContainer>
  );
};

export default Landing;
