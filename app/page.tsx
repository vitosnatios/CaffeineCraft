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
      <Banner />
      <FeaturedItemsCarousel products={products} />
    </>
  );
}
