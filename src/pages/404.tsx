import { useRouter } from 'next/router';

import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import useTranslate from '@hooks/useTranslate';

export default function Custom404() {
  const router = useRouter();
  const t = useTranslate();
  return (
    <MainContainer maxWidth="max-w-none">
      <div className="flex justify-center items-center h-full w-full">
        <div>
          <h1> {t('No se ha implementado')} </h1>
          <Button onClick={() => router.back()}>{t('Ir hacia atras')}</Button>
        </div>
      </div>
    </MainContainer>
  );
}
