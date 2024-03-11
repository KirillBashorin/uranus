import type { Metadata } from 'next';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Badge from '@/components/layout/Badge';

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
      <Header />
      <main>{children}</main>
      <Footer id="contacts" />
      <Badge />
    </div>
  );
};

export default Layout;
