import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AddToCartButton from './AddToCartButton';
import { IProduct } from '@/helpers/types';

const CoffeeCard = ({ product }: { product: IProduct }) => {
  const { image, name, price, imgHeight, imgWidth } = product;
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      <Link href={`/coffee/${image}`}>
        <div className='relative h-60 overflow-hidden flex items-center'>
          <Image
            src={`/coffees/${image}.jpg`}
            alt={name}
            width={imgWidth}
            height={imgHeight}
          />
        </div>
      </Link>

      <div className='p-4'>
        <Link href={`/coffee/${image}`}>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>{name}</h2>
          <p className='text-gray-600 mb-2'>Price: R${price.toFixed(2)}</p>
        </Link>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default CoffeeCard;
