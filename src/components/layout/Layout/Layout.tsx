import type { Metadata } from 'next';
import clsx from 'clsx';

import Footer from '@/components/layout/Footer';

import styles from './Layout.module.css';

export const metadata: Metadata = {
  title: 'Uranus',
  description:
    'Blockchain game for cryptocurrency stakes strategic PvP gameplay and full transparency',
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.root}>
      <header>HEADER</header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
