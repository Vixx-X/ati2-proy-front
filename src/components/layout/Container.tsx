import React from 'react';
import { ReactChild } from 'react';

interface ContainerProps {
  className?: any;
  children: ReactChild;
  maxWidth?: string;
  layout?: string;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={`w-11/12 mx-auto max-w-7xl ${className}`}>{children}</div>
  );
};

export default Container;
