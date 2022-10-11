import React, { useEffect, useState } from 'react';

import { useDropzone } from 'react-dropzone';

interface DragAndDrop extends Props {
  handleDrag(acceptedFiles: any): void;
}

export const DragAndDrop = ({ handleDrag }: DragAndDrop) => {
  const [image, setImages] = useState({});

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      handleDrag(acceptedFiles);
      setImages({
        ...acceptedFiles,
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
    },
  });
  return (
    <div {...getRootProps()} className="w-full h-full">
      <input {...getInputProps()} />
      <div className="w-full h-full">{<img src={image.preview} alt="" />}</div>
    </div>
  );
};

export default DragAndDrop;
