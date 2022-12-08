import type { NextPage } from 'next';

import authStore from '@stores/AuthStore';
import userStore from '@stores/UserStore';
import useTranslate from '@hooks/useTranslate';

const Home: NextPage = () => {
  const logout = authStore((state: any) => state.logout);
  const user = userStore((state: any) => state.user);
  const t = useTranslate();
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div>
          <p> {user?.username}</p>
          <p>{t('Estas autenticado.')}</p>
          <button
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            onClick={logout}
          >
            {t('Cerrar sesión')}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
