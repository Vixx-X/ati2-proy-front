import { FaCheck, FaExclamationTriangle, FaInfo } from 'react-icons/fa';

export type AlertColor = 'RED' | 'GREEN' | 'YELLOW';

const alertColorMap = {
  RED: {
    color: 'bg-color-5000',
    icon: <FaExclamationTriangle />,
  },
  YELLOW: {
    color: 'bg-yellow-5000',
    icon: <FaInfo />,
  },
  GREEN: {
    color: 'bg-green-5000',
    icon: <FaCheck />,
  },
};

export interface AlertProps extends Props {
  severity: AlertColor;
}

const getColor = (severity: AlertColor) => {
  return alertColorMap[severity].color;
};

const getIcon = (severity: AlertColor) => {
  return alertColorMap[severity].icon;
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
