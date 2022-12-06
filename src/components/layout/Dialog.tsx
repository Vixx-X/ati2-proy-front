import Button from './Button';

export interface DialogProps extends Props {
  open: boolean;
  onClose: Function;
}

export const Dialog = ({ open, onClose, children, ...props }: DialogProps) => {
  if (!open) return <></>;
  return (
    <div {...props}>
      <Button onClick={onClose}>X</Button>
      {children}
    </div>
  );
};

export default Dialog;
