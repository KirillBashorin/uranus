import type { Metadata } from 'next';
import localFont from 'next/font/local';
import clsx from 'clsx';

import './globals.css';

export const metadata: Metadata = {
  title: 'Uranus',
  description:
    'Blockchain game for cryptocurrency stakes strategic PvP gameplay and full transparency',
};

const coreSansC = localFont({
  src: [
    {
      path: './fonts/CoreSansC-55Medium.woff2',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = clsx([coreSansC.variable, junegull.variable]);

  return (
    <html lang="en" className={fontVariables}>
      <body>
        <header>HEADER</header>
        <main>{children}</main>
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
