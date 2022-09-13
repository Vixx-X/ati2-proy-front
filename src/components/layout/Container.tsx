import React from 'react';
import { ReactChild } from 'react';

interface ContainerProps {
  className?: any;
  children: ReactChild;
}

export const Container = ({ className, children }: ContainerProps ) => {
  return <div className={`w-11/12 max-w-7xl mx-auto ${className}`}>{children}</div>;
};

export default Container;
