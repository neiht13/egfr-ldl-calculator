// app/layout.tsx
import React from 'react';
import Providers from './components/Providers';
import { Nunito } from 'next/font/google';
import "./styles/globals.css"
import Head from 'next/head';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'], // Thêm các trọng lượng cần thiết
});

export const metadata = {
  title: 'GDR & LDL Calculator',
  description: 'GDR & LDL Calculator',
  manifest: '/manifest.json',
};

// Define the type for props
interface LayoutProps {
  children: React.ReactNode;
}

const LisLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <title>GDR & LDL Calculator</title>
      </Head>
      <body className={nunito.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default LisLayout;