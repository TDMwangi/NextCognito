import { AppProps } from 'next/app';

import Login from './login/page';

export default function Home({ pageProps }: AppProps) {
  return (
    <Login {...pageProps} />
  );
}
