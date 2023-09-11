'use client';
import { useGlobalContext } from '@/app/context/GlobalContext';
import React from 'react';

type Props = {
  children: string;
  onClick?: () => void;
  trigger?: boolean;
  delay?: boolean;
};

const Button = ({
  children,
  onClick,
  trigger = false,
  delay = false,
}: Props) => {
  const { setGlobalTrigger } = useGlobalContext();
  const handleClick = () => {
    if (onClick) onClick();
    if (trigger && delay)
      return setTimeout(() => setGlobalTrigger((prev) => !prev), 3000);
    if (trigger) setGlobalTrigger((prev) => !prev);
  };

  return (
    <button
      type='submit'
      className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
