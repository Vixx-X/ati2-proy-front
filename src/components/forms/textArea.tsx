import { Field } from './Field';

interface TextAreaInterface extends Props {
  title: string;
  description: string;
}

export const TextArea = ({
  title,
  description,
  ...props
}: TextAreaInterface) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="p-3 w-[80%] bg-secundary">
        <p className="w-full text-center text-white capitalize font-bold text-xl">
          {title}
        </p>
      </div>
      <p className="w-full px-3 text-center my-1">{description}</p>
      <Field className="w-full rounded" as="textarea" {...props} />
    </div>
  );
};

export default TextArea;
