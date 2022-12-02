import React, { useEffect, useState } from 'react';

import { useDropzone } from 'react-dropzone';

interface DragAndDropImg extends Props {
  handleDrag: Function;
  index: number;
}

export const DragAndDropImg = ({ handleDrag, index }: DragAndDropImg) => {
  const [image, setImages] = useState({});

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      handleDrag(acceptedFiles, index);
      setImages({
        ...acceptedFiles,
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
    },
  });
  return (
    <div {...getRootProps()} className="w-full h-full">
      <input {...getInputProps()} />
      <div className="w-full h-full">
        <img
          className="w-full h-full object-contain"
          src={image.preview}
          alt=""
        />
      </div>
    </div>
  );
};

export default DragAndDropImg;
