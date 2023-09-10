import Link from 'next/link';
import React from 'react';

type Props = {};

const NavLinks = (props: Props) => {
  return (
    <>
      <Link href='/login' className='text-gray-300 hover:text-white block'>
        Login / Profile
      </Link>
      <Link href='/shop' className='text-gray-300 hover:text-white block'>
        Shop
      </Link>
      <Link href='/cart' className='text-gray-300 hover:text-white block'>
        Cart
      </Link>
      <Link href='/about' className='text-gray-300 hover:text-white block'>
        About
      </Link>
    </>
  );
};

export default NavLinks;
