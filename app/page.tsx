import Banner from './components/mainPage/Banner';
import dynamic from 'next/dynamic';
import { getAllProducts } from './database/getAllProducts';
const FeaturedItemsCarousel = dynamic(
  () => import('./components/mainPage/FeaturedItemsCarousel'),
  { ssr: false }
);

export default async function Home() {
  const products = await getAllProducts();
  return (
    <>
      <section className='bg-gray-100 py-8 px-4 md:px-16'>
        <Banner />
      </section>
      <section className='bg-white py-8 px-4 md:px-16 h-80'>
        <FeaturedItemsCarousel products={products} />
      </section>
    </>
  );
}
