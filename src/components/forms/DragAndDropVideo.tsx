import { useState } from 'react';

import { postMedia } from '@fetches/post';

import useArray from '@hooks/useArray';

import recursiveGetter from '@utils/recursiveGetter';

import { useFormikContext } from 'formik';
import { Circle } from 'rc-progress';
import { useDropzone } from 'react-dropzone';

interface DragAndDropVideo extends Props {
  name: string;
  maxFiles?: number;
}

interface VideoState {
  file: any;
  url: string;
  id: Promise<number> | number;
}

const progressSetter = async (file: any, idx: number, setter: Function) => {
  if (!isNaN(file?.id)) return file.id;
  const resp = await postMedia(file, (progressEvent) =>
    setter(idx, Math.round((progressEvent.loaded * 100) / progressEvent.total))
  );
  return resp.id;
};

export const DragAndDropVideo = ({ name, maxFiles = 1 }: DragAndDropVideo) => {
  const { array: videoLoaders, update: videoLoadersUpdate } = useArray([
    ...Array(maxFiles),
  ]);

  const { setFieldValue, values } = useFormikContext();

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles,
    accept: {
      'video/mp4': ['.mp4'],
    },
    onDrop: (acceptedFiles) => {
      setFieldValue(
        name,
        acceptedFiles.map((file, idx) =>
          Object.assign(file, {
            url: URL.createObjectURL(file),
            id: progressSetter(file, idx, videoLoadersUpdate),
          })
        ) as any
      );
    },
  });

  return (
    <div {...getRootProps()} className="w-full h-full">
      <input {...getInputProps()} />
      <div className="w-full h-full">
        {recursiveGetter(values, name, [])?.map(
          (video: VideoState, idx: number) => (
            <div key={idx}>
              <video width={100}>
                <source src={video.url} type="video/mp4" />
                <p>{`${name}-${idx}`}</p>
              </video>
              {videoLoaders?.[idx] && videoLoaders?.[idx] !== 100 && (
                <Circle
                  percent={videoLoaders?.[idx]}
                  strokeWidth={4}
                  strokeColor="#D3D3D3"
                />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DragAndDropVideo;
