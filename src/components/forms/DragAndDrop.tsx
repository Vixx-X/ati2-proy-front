import React, { useEffect, useState } from 'react';

import { useDropzone } from 'react-dropzone';

export const DragAndDrop = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (images.length > 0) {
      isDragActive = false;
    }
  }, [images]); // just first time it loads

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setImages(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Coloque la imagen aqui</p>
      ) : (
        <p>Coloque n imagenes aqui</p>
      )}
      <div>
        {images.map((upFile, index) => {
          return (
            <div key={index}>
              <img alt="preview" src={upFile.preview} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DragAndDrop;
