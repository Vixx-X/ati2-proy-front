import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { SERVER_URLS } from '@config';

import authStore from '@stores/AuthStore';

import { makeUrl } from '@utils/makeUrl';

interface PageProps extends Props {
  needAuth?: boolean | undefined;
}

export default function Page({ needAuth, children }: PageProps) {
  const isAuth = authStore((state) => state.isAuth);
  const logout = authStore((state) => state.logout);
  const loading = authStore((state) => state.loading);

  const router = useRouter();

  useEffect(() => {
    if (needAuth && !isAuth && !loading) {
      logout(makeUrl(SERVER_URLS.URL_LOGIN, { next: router.pathname }));
    }
  }, [needAuth, isAuth, logout, router.pathname, loading]);

  return <>{children}</>;
}
