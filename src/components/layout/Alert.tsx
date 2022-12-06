import { FaExclamationTriangle } from 'react-icons/fa';

export type AlertColor = 'RED' | 'GREEN';

export interface AlertProps extends Props {
  severity: AlertColor;
}

const getColor = (severity: AlertColor) => {
  return 'bg-red-5000';
};

const getIcon = (severity: AlertColor) => {
  return <FaExclamationTriangle></FaExclamationTriangle>;
};

export const Alert = ({ severity, children, ...props }: AlertProps) => {
  const color = getColor(severity);
  const icon = getIcon(severity);
  return (
    <div {...props} className={`${props.className} ${color}}`}>
      <>
        {icon}
        {children}
      </>
    </div>
  );
};
