import Button from '@components/layout/Button';
import Dialog from '@components/layout/Dialog';

import dialogStore from '@stores/DialogStore';

interface DialogProviderProps extends Props {}

export const DialogProvider = ({ children }: DialogProviderProps) => {
  const dialogs = dialogStore((state) => state.dialogs);
  const removeDialog = dialogStore((state) => state.removeDialog);

  return (
    <>
      {children}
      {dialogs.map((dialog) => (
        <Dialog
          key={dialog.id}
          open={true}
          title={dialog.title}
          onClose={() => removeDialog(dialog.id)}
          {...dialog?.options}
        >
          <div>{dialog?.message}</div>
          <div className="flex flex-row gap-2 mt-8">
            {dialog?.buttons?.map((button: any, index: number) => (
              <Button
                key={index}
                {...button}
                onClick={() => {
                  button?.onClick?.();
                  removeDialog(dialog.id);
                }}
              >
                {button?.title ?? button?.children}
              </Button>
            ))}
          </div>
        </Dialog>
      ))}
    </>
  );
};

export default DialogProvider;
