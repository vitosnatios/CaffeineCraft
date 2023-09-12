import SectionContainer from '../components/container/SectionContainer';
import CoffeeCard from '../components/shop/CoffeCard';
import Title from '../components/text/Title';
import { getAllProducts } from '../database/product/getAllProducts';
import { IProduct } from '@/helpers/types';

const ShopPage = async () => {
  const products = await getAllProducts();

  return (
    <SectionContainer>
      <div className='container mx-auto'>
        <Title>Shop</Title>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products?.map((product: IProduct) => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ShopPage;
