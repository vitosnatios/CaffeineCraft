'use client';
import Banner from './components/mainPage/Banner';
import dynamic from 'next/dynamic';
const FeaturedItemsCarousel = dynamic(
  () => import('./components/mainPage/FeaturedItemsCarousel'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <section className='bg-gray-100 py-8 px-4 md:px-16'>
        <Banner />
      </section>
      <section className='bg-white py-8 px-4 md:px-16'>
        <FeaturedItemsCarousel />
      </section>
    </>
  );
}
