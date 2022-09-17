import { useState } from 'react';

import type { NextPage } from 'next';

import Header from '@components/layout/Header';

import Container from './Container';

const MainContainer = ({ children }: any) => {
  return (
    <div className="flex flex-col h-screen">
      <Header activate={false} options={undefined} />
      <Container className="h-full py-4">
        <div className="grow h-full overflow-scroll">{children}</div>
      </Container>
    </div>
  );
};

export default MainContainer;
