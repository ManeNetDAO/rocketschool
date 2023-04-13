import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Rocket School</title>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
