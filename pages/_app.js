import 'bootstrap/dist/css/bootstrap.css';
import { StoreProvider } from 'easy-peasy';
import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.css';
import store from '../store/store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js');
  }, []);
  return (
    <>
      <StoreProvider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
          />
        </Head>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}
export default MyApp;
