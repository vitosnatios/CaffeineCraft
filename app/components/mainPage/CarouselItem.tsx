import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  image: string;
  imgWidth: number;
  imgHeight: number;
  name: string;
  price: number;
};

const CarouselItem = ({ image, imgWidth, imgHeight, name, price }: Props) => {
  return (
    <Link href={`/coffee/${image}`}>
      <div className='h-60 overflow-hidden flex items-center shadow-md hover:shadow-xl rounded-lg'>
        <Image
          width={imgWidth}
          height={imgHeight}
          src={`/coffees/${image}.jpg`}
          alt={name}
        />
      </div>
      <div className='mt-2 flex justify-between items-center text-lg font-semibold'>
        <span className='text-gray-800'>{name}</span>
        <span className='text-green-600'>R${price.toFixed(2)}/Kg</span>
      </div>
    </Link>
  );
};

export default CarouselItem;
