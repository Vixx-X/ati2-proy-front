import Button from './Button';

export interface DialogProps extends Props {
  open: boolean;
  onClose: Function;
  title?: string;
  className?: string;
}

export const Dialog = ({
  open,
  onClose,
  title,
  children,
  className,
  ...props
}: DialogProps) => {
  if (!open) return <></>;
  return (
    <>
      <div className="transition-all opacity-1 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div
          className={`relative my-6 mx-auto bg-white border-x border-b border-gray-300 rounded-t ${className}`}
        >
          <div className="flex justify- between border-solid rounded-t bg-primary sticky top-0">
            <div className="grow flex px-4 py-2 w-100 justify-center items-center">
              <p className="font-semibold text-white text-center items-center text-xl capitalize">
                {title}
              </p>
            </div>
            <div className="flex gap-5 p-2 justify-center items-center">
              <button
                className="font-bold text-md text-white cursor-pointer"
                type="button"
                onClick={onClose as any}
              >
                X
              </button>
            </div>
          </div>
          <div className="p-10">{children}</div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Dialog;
