import CoffeeCard from '../components/shop/CoffeCard';
import { getAllProducts } from '../database/product/getAllProducts';
import { IProduct } from '@/helpers/types';

const ShopPage = async () => {
  const products = await getAllProducts();

  return (
    <section className='bg-gray-100 px-4 md:px-16'>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-semibold text-gray-800 mb-4'>Shop</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products?.map((product: IProduct) => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;