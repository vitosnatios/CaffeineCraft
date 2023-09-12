import Banner from './components/mainPage/Banner';
import { getAllProducts } from './database/product/getAllProducts';
import FeaturedItemsCarousel from './components/mainPage/FeaturedItemsCarousel';

export default async function Home() {
  const products = await getAllProducts();
  return (
    <>
      <Banner />
      <FeaturedItemsCarousel products={products} />
    </>
  );
}
