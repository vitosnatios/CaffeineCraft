import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import GlobalContextProvider from './context/GlobalContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <title>CaffeineCraft</title>
      <meta name='description' content='Ecommerce Challenge' />
      <link rel='icon' href='/favicon.ico' sizes='any' />
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
