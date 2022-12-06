import { Alert } from '@components/layout/Alert';

import alertStore from '@stores/AlertStore';

interface AlertProviderProps extends Props {}

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const alerts = alertStore((state) => state.alerts);

  return (
    <>
      {children}
      <div
        id="AlertContainer"
        className="flex flex-col gap-3 m-4 fixed bottom-0 right-0"
      >
        {alerts.map((alert) => (
          <Alert severity={alert.severity} key={alert.id} className="shadow-md">
            {alert.text}
          </Alert>
        ))}
      </div>
    </>
  );
};

export default AlertProvider;
