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
          <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='flex-grow bg-gray-100py-8 px-4 md:px-16 bg-gray-100'>
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </GlobalContextProvider>
    </html>
  );
}

export const revalidate = 0;
