import { useState } from 'react';

import { useFormikContext } from 'formik';
import { Circle } from 'rc-progress';
import { useDropzone } from 'react-dropzone';

interface DragAndDropVideo extends Props {
  name: string;
  loading?: number | null;
  maxFiles?: number;
}

interface VideoState {
  file: any;
  preview: string;
}

export const DragAndDropVideo = ({
  name,
  loading,
  maxFiles = 1,
}: DragAndDropVideo) => {
  const [videos, setVideos] = useState<VideoState[]>([]);
  const { setFieldValue } = useFormikContext();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles,
    accept: {
      'video/mp4': ['.mp4'],
    },
    onDrop: (acceptedFiles) => {
      setFieldValue(name, maxFiles == 1 ? acceptedFiles?.[0] : acceptedFiles);
      setVideos(
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
        {videos.map((video, idx) => (
          <>
            <video width={100}>
              <source src={video.preview} type="video/mp4" />
              <p>{`${name}-${idx}`}</p>
            </video>
            {loading && (
              <Circle percent={loading} strokeWidth={4} strokeColor="#D3D3D3" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropVideo;
