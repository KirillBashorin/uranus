import React, { FC } from 'react';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { GoogleTagManager } from '@next/third-parties/google';
import clsx from 'clsx';

import './styles/globals.css';

const coreSansC = localFont({
  src: [
    {
      path: './fonts/CoreSansC-55Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/CoreSansC-55Medium.woff',
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
      path: './fonts/junegull.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/junegull.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--junegull',
});

export const metadata: Metadata = {
  title: 'URANUS',
  description:
    'Blockchain game for cryptocurrency stakes Strategic PvP gameplay and full transparency',
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  const fontVariables = clsx([coreSansC.variable, junegull.variable]);
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-1PTY36DPN9" />
      <body className={fontVariables}>{children}</body>
    </html>
  );
};

export default RootLayout;
