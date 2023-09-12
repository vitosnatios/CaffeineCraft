import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12 px-6 text-center md:px-16'>
      <div className='container flex flex-col m-auto'>
        <div>
          <div className=' mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2 text-center md:text-left mb-6 md:mb-0'>
              <Link href='/'>
                <h2 className='text-3xl font-bold'>CaffeineCraft</h2>
              </Link>
              <p className='mt-4 text-gray-300'>
                Discover the world&apos;s finest coffeee beans and brew your
                perfect cup of coffeee.
              </p>
            </div>

            <div className='md:w-1/2 flex justify-center md:justify-end'>
              <ul className='md:flex gap-3'>
                <li>
                  <Link
                    href='/about'
                    className='text-gray-300 hover:text-white'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-gray-300 hover:text-white'
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/privacy'
                    className='text-gray-300 hover:text-white'
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <p className='text-gray-400'>
            VitosDeveloper &copy; {new Date().getFullYear()} CaffeineCraft. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
