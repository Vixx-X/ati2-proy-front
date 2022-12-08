import { useEffect } from 'react';

import { getBusinessInfo } from '@fetches/contact';

import pageStore from '@stores/PageStore';

import useSWR from 'swr';

export const PageContextProvider = ({ children }: Props) => {
  const updatePage = pageStore((state: any) => state.update);
  const { data, mutate: refeatchUser } = useSWR(
    'page-settings',
    getBusinessInfo
  );

  useEffect(() => {
    if (!data) return;
    updatePage(data, refeatchUser);
  }, [data, refeatchUser, updatePage]);

  return <>{children}</>;
};

export default PageContextProvider;
