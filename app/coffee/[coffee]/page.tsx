import AddToCartButton from '@/app/components/coffePage/AddToCartButton';
import { getProductByName } from '@/app/database/getProductById';
import { getProductsSlugNames } from '@/app/database/getProductsSlugNames';
import { IProduct } from '@/helpers/types';
import Image from 'next/image';

type Props = {
  params: { coffee: string };
};

const CoffeePage = async ({ params }: Props) => {
  const coffee = await getProductByName(params.coffee);
  const { image, price, description, name, imgWidth, imgHeight } = coffee;

  return (
    <div className='bg-gray-100 py-8 px-4 md:px-16'>
      <div className='container mx-auto flex flex-col md:flex-row items-center gap-5'>
        <div className='md:w-1/2'>
          <Image
            src={`/coffees/${image}.jpg`}
            alt={image}
            width={imgWidth}
            height={imgHeight}
            className='rounded-lg shadow-md'
          />
        </div>
        <div className='md:w-1/2'>
          <h2 className='text-4xl font-semibold text-gray-800 mb-4'>{name}</h2>
          <p className='text-lg text-gray-600 mb-6'>{description}</p>
          <AddToCartButton coffee={coffee as IProduct} />
        </div>
      </div>
    </div>
  );
};

export default CoffeePage;

export const generateStaticParams = async () => {
  const productsSlugNames = await getProductsSlugNames('image');
  return productsSlugNames.map(({ image: coffee }: { image: string }) => ({
    coffee,
  }));
};

export const dynamicParams = false;

// const getStaticProps: GetStaticProps = () => {
//   return {
//     props: {

//     }
//   }
// }
