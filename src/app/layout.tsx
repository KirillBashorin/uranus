import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Uranus',
  description:
    'Blockchain game for cryptocurrency stakes strategic PvP gameplay and full transparency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
