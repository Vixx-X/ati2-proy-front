import { useState } from 'react';

import type { NextPage } from 'next';

import Header from '@components/layout/Header';

import Container from './Container';

const MainContainer = ({
  containerClassName,
  activate,
  children,
  layout,
}: any) => {
  return (
    <div className="flex flex-col h-screen">
      <Header activate={activate} />
      <Container className={`pt-4 pb-16 ${containerClassName}`}>
        {children}
      </Container>
    </div>
  );
};

export default MainContainer;
