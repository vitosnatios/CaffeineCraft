import Image from 'next/image';
import React from 'react';
import BannerText from './BannerText';

const Banner = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center gap-10 mb-5 py-8'>
      <BannerText />
      <div className='self-center'>
        <Image
          src='/coffeebanner.jpg'
          alt='coffeee Banner'
          className='rounded-lg'
          width='803'
          height='766'
        />
      </div>
    </div>
  );
};

export default Banner;
