import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='md:w-1/2 text-center md:text-left mb-6 md:mb-0'>
          <h2 className='text-3xl font-bold'>CaffeineCraft</h2>
          <p className='mt-4 text-gray-300'>
            Discover the world&apos;s finest coffee beans and brew your perfect
            cup of coffee.
          </p>
        </div>
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <ul className='md:flex space-x-6'>
            <li>
              <a href='/about' className='text-gray-300 hover:text-white'>
                About Us
              </a>
            </li>
            <li>
              <a href='/contact' className='text-gray-300 hover:text-white'>
                Contact Us
              </a>
            </li>
            <li>
              <a href='/privacy' className='text-gray-300 hover:text-white'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-8 text-center'>
        <p className='text-gray-400'>
          &copy; {new Date().getFullYear()} CaffeineCraft. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
