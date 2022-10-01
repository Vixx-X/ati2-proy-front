import React, { ReactNode } from 'react';
import { ReactChild } from 'react';

interface ContainerProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactChild;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  color?: string;
}

export const Button = ({
  type,
  children,
  startIcon,
  endIcon,
  className,
  bgColor = 'bg-secundary',
  ...props
}: ContainerProps & Props) => {
  return (
    <button
      type={type ? type : 'button'}
      className={`${bgColor} w-full text-white py-2 px-4 rounded-md font-bold capitalize opacity-90 hover:opacity-100 transition-opacity ${className}`}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};

export default Button;
