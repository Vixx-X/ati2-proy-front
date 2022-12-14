import type { AppProps } from 'next/app';

import '@styles/globals.css';

import { localStorageProvider } from '@utils/localStorageProvider';

import AlertProvider from '@contexts/AlertsContext';
import AuthContextProvider from '@contexts/AuthContext';
import DialogProvider from '@contexts/DialogsContext';
import PageContextProvider from '@contexts/PageContext';
import UserContextProvider from '@contexts/UserContext';
import { AnimatePresence } from 'framer-motion';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        provider: localStorageProvider,
      }}
    >
      <PageContextProvider>
        <AuthContextProvider>
          <UserContextProvider>
            <AnimatePresence>
              <AlertProvider>
                <DialogProvider>
                  <Component {...pageProps} />
                </DialogProvider>
              </AlertProvider>
            </AnimatePresence>
          </UserContextProvider>
        </AuthContextProvider>
      </PageContextProvider>
    </SWRConfig>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// TODO: maybe just for this reason, we may be changing it for specific pages,
// or removing it altogether
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // use this if we want auth from server
//   const tokens = await getAuth(appContext.ctx);
//   appContext.ctx = { ...appContext.ctx, ...tokens };

//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return appProps;
// };

export default MyApp;
