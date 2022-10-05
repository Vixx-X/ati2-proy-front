import React, { useEffect, useState } from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface SplideImageComponentProps {
  images: {
    text: string;
    type: string;
    file: string;
  }[];
}

export const SplideImageComponent = ({ images }: SplideImageComponentProps) => {
  return (
    <Splide>
      {images?.map(({ text, file }: any, index) => (
        <SplideSlide key={index} className="flex justify-center">
          <img src={file} alt={text} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SplideImageComponent;
