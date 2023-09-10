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
    <div>
      <Link href={`/coffe/${image}`}>
        <div className='h-60 w-auto overflow-hidden'>
          <Image
            width={imgWidth}
            height={imgHeight}
            src={`/coffes/${image}.jpg`}
            alt={name}
            className={`relative bottom-${
              image === 'maragogipe' ? '40' : imgHeight > 700 ? '80' : '0'
            }`}
          />
        </div>

        <div className='flex justify-between'>
          <span>{name}</span>
          <span>R${price.toFixed(2)}/Kg</span>
        </div>
      </Link>
    </div>
  );
};

export default CarrouselItem;
