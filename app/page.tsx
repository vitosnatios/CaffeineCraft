import Banner from './components/mainPage/Banner';
import { default as dyna } from 'next/dynamic';
import { getAllProducts } from './database/product/getAllProducts';
import Header from './components/partials/Header';
const FeaturedItemsCarousel = dyna(
  () => import('./components/mainPage/FeaturedItemsCarousel'),
  { ssr: false }
);

export default async function Home() {
  const products = await getAllProducts();
  return (
    <>
      <Banner />
      <FeaturedItemsCarousel products={products} />
    </>
  );
}
