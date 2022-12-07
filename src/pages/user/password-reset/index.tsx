import type { NextPage } from 'next';

import ResetPasswordModal from '@components/modals/ResetPasswordModal';

const PasswordReset: NextPage = () => {
  return (
    <>
      <ResetPasswordModal showModal={true} setShowModal={() => {}} />
    </>
  );
};

export default PasswordReset;
