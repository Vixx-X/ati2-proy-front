import Image from 'next/image';

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
    <Splide
      options={{
        height: '10rem',
        width: 'auto',
        objectFit: 'contain',
      }}
    >
      {images?.map((element: any, index) => (
        <SplideSlide key={index} className="flex justify-center">
          <Image
            src={element}
            alt={element}
            unoptimized
            layout="fill"
            objectFit="contain"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SplideImageComponent;
