import React from 'react';
import { ReactChild } from 'react';

interface ContainerProps {
  className?: any;
  children: ReactChild;
  maxWidth?: string;
}

export const Container = ({
  className,
  maxWidth = 'max-w-7xl',
  children,
}: ContainerProps) => {
  return (
    <div className={`w-11/12 mx-auto ${maxWidth} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
