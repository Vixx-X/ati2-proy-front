import { postMedia } from '@fetches/post';

import useArray from '@hooks/useArray';

import recursiveGetter from '@utils/recursiveGetter';

import { useFormikContext } from 'formik';
import { Circle } from 'rc-progress';
import { useDropzone } from 'react-dropzone';

interface DragAndDropImg extends Props {
  name: string;
  maxFiles?: number;
}

interface ImageState {
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

export const DragAndDropImg = ({ name, maxFiles = 1 }: DragAndDropImg) => {
  const { array: imageLoaders, update: imageLoadersUpdate } = useArray([
    ...Array(maxFiles),
  ]);

  const { setFieldValue, values } = useFormikContext();

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
    },
    onDrop: (acceptedFiles) => {
      setFieldValue(
        name,
        acceptedFiles.map((file, idx) =>
          Object.assign(file, {
            url: URL.createObjectURL(file),
            id: progressSetter(file, idx, imageLoadersUpdate),
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
          (image: ImageState, idx: number) => (
            <div key={idx} className="w-full h-full object-contain">
              <img
                className="w-full h-full object-contain"
                src={image.url}
                alt={`${name}-${idx}`}
              />
              {imageLoaders?.[idx] && imageLoaders?.[idx] !== 100 && (
                <Circle
                  percent={imageLoaders?.[idx]}
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

export default DragAndDropImg;
