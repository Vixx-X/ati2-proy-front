import { useRouter } from 'next/router';

import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';

export default function Custom404() {
  const router = useRouter();
  return (
    <MainContainer activate="inicio" maxWidth="max-w-none">
      <div className="flex justify-center items-center h-full w-full">
        <div>
          <h1> No se ha implementado </h1>
          <Button onClick={() => router.back()}>Ir hacia atras</Button>
        </div>
      </div>
    </MainContainer>
  );
}
