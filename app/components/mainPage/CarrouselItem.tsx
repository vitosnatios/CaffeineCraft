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

const CarrouselItem = ({ image, imgWidth, imgHeight, name, price }: Props) => {
  return (
    <Link href={`/coffee/${image}`}>
      <div className='h-60  overflow-hidden flex items-center'>
        <Image
          width={imgWidth}
          height={imgHeight}
          src={`/coffees/${image}.jpg`}
          alt={name}
          className='w-auto'
        />
      </div>
      <div className='flex justify-between'>
        <span>{name}</span>
        <span>R${price.toFixed(2)}/Kg</span>
      </div>
    </Link>
  );
};

export default CarrouselItem;
