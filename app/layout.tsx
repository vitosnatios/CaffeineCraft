'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import GlobalContextProvider from './context/GlobalContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CaffeineCraft',
  description: 'Ecommerce Challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <GlobalContextProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </GlobalContextProvider>
    </html>
  );
}
