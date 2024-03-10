import React, { FC } from 'react';
import type { AppProps } from 'next/app';

import Layout from '@/components/layout/Layout';

import '../styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;