import React, { useEffect, useState } from 'react';

import { useDropzone } from 'react-dropzone';

interface DragAndDropVideo extends Props {
  handleDrag: Function;
  index: number;
}

export const DragAndDropVideo = ({ handleDrag, index }: DragAndDropVideo) => {
  const [video, setVideos] = useState({});

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'video/mp4': ['.mp4'],
    },
    onDrop: (acceptedFiles) => {
      handleDrag(acceptedFiles, index);
      setVideos({
        ...acceptedFiles[0],
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
    },
  });
  return (
    <div {...getRootProps()} className="w-full h-full">
      <input {...getInputProps()} />
      <div className="w-full h-full">
      <p className="overflow-hidden max-h-full">{video.path}</p>
        <video width={100}>
          <source src={video.preview} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
};

export default DragAndDropVideo;
