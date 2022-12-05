import { useState } from 'react';

import Image from 'next/image';

import { useFormikContext } from 'formik';
import { Circle } from 'rc-progress';
import { useDropzone } from 'react-dropzone';

interface DragAndDropImg extends Props {
  name: string;
  loading?: number | null;
  maxFiles?: number;
}

interface ImageState {
  file: any;
  preview: string;
}

export const DragAndDropImg = ({
  name,
  loading,
  maxFiles = 1,
}: DragAndDropImg) => {
  const [images, setImages] = useState<ImageState[]>([]);
  const { setFieldValue } = useFormikContext();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setFieldValue(name, maxFiles == 1 ? acceptedFiles?.[0] : acceptedFiles);
      setImages(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ) as any
      );
    },
  });

  return (
    <div {...getRootProps()} className="w-full h-full">
      <input {...getInputProps()} />
      <div className="w-full h-full">
        {images.map((image, idx) => (
          <>
            <Image
              key={idx}
              className="w-full h-full object-contain"
              src={image.preview}
              alt={`${name}-${idx}`}
              unoptimized
              layout="fill"
            />
            {loading && (
              <Circle percent={loading} strokeWidth={4} strokeColor="#D3D3D3" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropImg;
