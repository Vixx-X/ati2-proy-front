import { AlertColor } from '@components/layout/Alert';

import { _alertStore } from '@stores/AlertStore';

export const Alert = (severity: AlertColor, text: string) => {
  const alertManager = _alertStore.getState();
  alertManager.addAlert(severity, text);
};

export default Alert;
