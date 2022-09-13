import React, { ReactNode } from 'react';
import { ReactChild } from 'react';

interface ContainerProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactChild;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className: string;
}

export const Button = ({
  type,
  children,
  startIcon,
  endIcon,
  className,
  ...props
}: ContainerProps & Props) => {
  return (
    <button
      type={type ? type : 'button'}
      className={`bg-secundary w-full text-white py-2 px-4 ${className}`}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};

export default Button;
