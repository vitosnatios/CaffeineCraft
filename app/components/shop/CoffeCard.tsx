import { IProduct } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CoffeCard = ({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: number;
}) => {
  return (
    <Link
      href={`/coffe/${image}`}
      className='bg-white rounded-lg shadow-md overflow-hidden'
    >
      <div className='relative h-44'>
        <Image
          src={`/coffes/${image}.jpg`}
          alt={name}
          layout='fill'
          className='object-cover w-full aspect-w-16 aspect-h-9'
        />
      </div>

      <div className='p-4'>
        <h2 className='text-xl font-semibold text-gray-800 mb-2'>{name}</h2>
        <p className='text-gray-600 mb-2'>Price: R${price.toFixed(2)}</p>
        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default CoffeCard;
