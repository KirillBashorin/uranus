import React, { FC } from 'react';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';

import clsx from 'clsx';

const coreSansC = localFont({
  src: [
    {
      path: '../fonts/CoreSansC-55Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/CoreSansC-55Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--core-sans-c',
});

const junegull = localFont({
  src: [
    {
      path: '../fonts/junegull.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/junegull.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--junegull',
});

import Layout from '@/components/layout/Layout';

import '../styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const fontVariables = clsx([coreSansC.variable, junegull.variable]);

  return (
    <div className={fontVariables}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default App;
