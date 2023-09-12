import { ICartProduct } from '@/helpers/types';
import Image from 'next/image';
import React from 'react';

type Props = { item: ICartProduct };

const CheckoutItem = ({ item }: Props) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md'>
      <div className='flex items-center justify-between'>
        <div className='w-16 h-16 relative bg-black overflow-hidden flex items-center'>
          <Image
            src={`/coffees/${item.image}.jpg`}
            alt={item.name}
            width={item.imgWidth}
            height={item.imgHeight}
            // layout='fill'
            // objectFit='cover'
          />
        </div>
        <div className='ml-4'>
          <h2 className='text-xl font-semibold text-gray-800'>{item.name}</h2>
          <p className='text-gray-600'>Quantity: {item.quantity}</p>
          <p className='text-gray-600'>Price: R${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
