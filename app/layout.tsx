// project layout.tsx
import React from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.className}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
