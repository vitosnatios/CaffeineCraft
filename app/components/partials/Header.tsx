'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import NavLinks from './header/NavLinks';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 768) setMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      return setMenuOpen(true);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if (window.innerWidth > 768 ? true : false) {
      setMenuOpen(true);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='bg-gray-900 text-white py-4 px-6'>
      <div className='container mx-auto flex justify-between items-center relative'>
        <Link href='/' className='text-gray-300 hover:text-white block'>
          <h1 className='text-3xl font-bold'>CaffeineCraft</h1>
        </Link>

        <button
          className='md:hidden text-gray-300 hover:text-white'
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

        <nav
          className={`${
            isMenuOpen ? 'opacity-100' : 'opacity-0 hidden'
          } absolute right-0 top-full md:relative md:flex md:space-x-4 mt-4 md:mt-0 bg-gray-900 p-4 rounded-lg shadow-lg z-10`}
          onClick={toggleMenu}
        >
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;
