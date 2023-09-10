import Image from 'next/image';
import React from 'react';

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row items-center gap-10'>
      <div className=' pr-4'>
        <h2 className='text-4xl font-semibold text-gray-800 mb-4'>
          Welcome to CaffeineCraft
        </h2>
        <p className='text-lg text-gray-600 mb-2'>
          Discover the world&apos;s finest coffee beans and brew your perfect
          cup of coffee.
        </p>
        <p className='text-lg text-gray-600 mb-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsa
          cum nobis vero voluptates possimus non optio corrupti atque quae
          necessitatibus id veritatis laudantium porro dolorem repellendus
          dolores, veniam facilis?
        </p>
        <p className='text-lg text-gray-600 mb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed unde
          adipisci ullam, distinctio dolorem, nesciunt, dolor eius ea id rem
          fugit exercitationem totam natus aliquid voluptates reiciendis.
          Soluta, iste.
        </p>
        <a
          href='/shop'
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
        >
          Shop Now
        </a>
      </div>

      <div className='self-center'>
        <Image
          src='/coffe-banner.webp'
          alt='Coffee Banner'
          className='rounded-lg shadow-md'
          width='1080'
          height='1080'
        />
      </div>
    </div>
  );
};

export default Banner;
