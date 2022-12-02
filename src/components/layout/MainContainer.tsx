import { useState } from 'react';

import type { NextPage } from 'next';

import Header from '@components/layout/Header';

import Container from './Container';

const MainContainer = ({
  containerClassName,
  activate,
  maxWidth,
  children,
}: any) => {
  return (
    <div className="flex flex-col h-screen">
      <Header activate={activate} />
      <Container
        className={`pt-4 pb-16 ${containerClassName}`}
        maxWidth={maxWidth}
      >
        {children}
      </Container>
    </div>
  );
};

export default MainContainer;
