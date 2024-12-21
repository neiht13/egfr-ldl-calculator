// app/layout.tsx
import React from 'react';
import Providers from './components/Providers';
import { Nunito } from 'next/font/google';
import "./styles/globals.css"

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'], // Thêm các trọng lượng cần thiết
});
export const metadata = {
  title: 'GDR & LDL Calculator',
  description: 'GDR & LDL Calculator',
};

// Define the type for props
interface LayoutProps {
  children: React.ReactNode;
}

const LisLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default LisLayout;
