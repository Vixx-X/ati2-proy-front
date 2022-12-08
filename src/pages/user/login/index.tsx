import type { NextPage } from 'next';

import LogInModal from '@components/modals/LogInModal';

const Login: NextPage = () => {
  return (
    <>
      <LogInModal showModal={true} setShowModal={() => {}} />
    </>
  );
};

export default Login;
