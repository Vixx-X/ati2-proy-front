import { ReactNode } from 'react';

import Link from 'next/link';

export interface ButtonProps extends Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  color?: string;
  anchorTag?: boolean;
}

export const Button = ({
  type,
  children,
  startIcon,
  endIcon,
  className,
  bgColor = 'bg-secundary',
  anchorTag,
  ...props
}: ButtonProps) => {
  return (
    <>
      {!anchorTag ? (
        <button
          type={type ?? 'button'}
          className={`${bgColor} w-full text-white py-2 px-4 rounded-md font-bold capitalize opacity-90 hover:opacity-100 transition-opacity ${className}`}
          {...props}
        >
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </button>
      ) : (
        <Link href={props?.href} passHref>
          <a
            className={`${bgColor} w-full text-white py-2 px-4 rounded-md font-bold capitalize opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center ${className}`}
            {...props}
          >
            {startIcon && startIcon}
            {children}
            {endIcon && endIcon}
          </a>
        </Link>
      )}
    </>
  );
};

export default Button;
