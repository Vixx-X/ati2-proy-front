import { ButtonProps } from '@components/layout/Button';
import { DialogProps } from '@components/layout/Dialog';

import { _dialogStore } from '@stores/DialogStore';

export const Dialog = (
  title: string,
  message?: string,
  buttons?: ButtonProps[],
  options?: DialogProps
) => {
  const dialogManager = _dialogStore.getState();
  dialogManager.addDialog(title, message, buttons, options);
};

export default Dialog;
