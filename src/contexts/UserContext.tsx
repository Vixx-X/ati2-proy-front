import { useEffect } from 'react';

import { getUser } from '@fetches/user';

import authStore from '@stores/AuthStore';
import userStore from '@stores/UserStore';

import useSWR from 'swr';

export const UserContextProvider = ({ children }: Props) => {
  const isAuth = authStore((state: any) => state.isAuth);
  const access = authStore((state: any) => state.access_token);

  const updateUser = userStore((state: any) => state.update);
  const { data: user, mutate: refeatchUser } = useSWR(
    isAuth ? ['user', access] : null,
    getUser
  );

  useEffect(() => {
    if (!user) return;
    updateUser(user, refeatchUser);
  }, [user, refeatchUser, updateUser]);

  return <>{children}</>;
};
