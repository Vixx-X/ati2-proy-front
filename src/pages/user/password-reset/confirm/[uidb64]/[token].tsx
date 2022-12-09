import BaseModal from '@components/modals/BaseModal';
import ResetPasswordConfirmModal from '@components/modals/ResetPasswordConfirmModal';

import { SERVER_URLS } from '@config';

import { getResetPasswordConfirm } from '@fetches/user';

import useTranslate from '@hooks/useTranslate';

const { URL_PASSWORD_RESET } = SERVER_URLS;

interface PasswordResetConfirmFormData {
  new_password1: string;
  new_password2: string;
}

interface PasswordResetConfirmProps {
  uidb64: string;
  token: string;
  invalid_link: string;
}

const PasswordResetConfirm = ({
  uidb64,
  token,
  invalid_link,
}: PasswordResetConfirmProps) => {
  const t = useTranslate();
  return (
    <>
      {invalid_link ? (
        <BaseModal
          showModal={true}
          title="Restablecer contraseña"
          setShowModal={() => {}}
        >
          <p className="mb-4">
            {t('El link ha expirado o ya ha sido utilizado.')}
          </p>
        </BaseModal>
      ) : (
        <ResetPasswordConfirmModal
          showModal={true}
          setShowModal={() => {}}
          token={token}
          uidb64={uidb64}
        />
      )}
    </>
  );
};

export default PasswordResetConfirm;

export async function getServerSideProps({ params }: any) {
  try {
    const data = await getResetPasswordConfirm(params.uidb64, params.token);
    return {
      props: {
        ...params,
        ...data,
      },
    };
  } catch (error: any) {
    return {
      props: {
        ...params,
        ...error?.data,
      },
    };
  }
}
