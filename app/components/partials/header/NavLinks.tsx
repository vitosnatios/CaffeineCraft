import Link from 'next/link';
import React from 'react';
import LoginOrProfileLink from './LoginOrProfileLink';

const NavLinks = () => {
  return (
    <>
      <LoginOrProfileLink />
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
