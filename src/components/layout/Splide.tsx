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
    <Splide>
      {images?.map(({ text, file }: any, index) => (
        <SplideSlide key={index} className="flex justify-center">
          <Image src={file} alt={text} unoptimized layout="fill" />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SplideImageComponent;
