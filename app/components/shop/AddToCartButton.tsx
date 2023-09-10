'use client';
import { AddToCart, hasOnCookiesAlready } from '@/helpers/cookiesHelper';
import { useState, useEffect } from 'react';

type Props = { name: string; price: number };

const AddToCartButton = ({ name, price }: Props) => {
  const [buttonText, setButtonText] = useState<string>('Add to Cart');
  const handleClick = () => {
    if (buttonText !== 'Already selected') {
      AddToCart(name, price);
      setButtonText('Already selected');
    }
  };
  useEffect(() => {
    setButtonText(
      hasOnCookiesAlready(name) ? 'Already selected' : 'Add to Cart'
    );
  }, [name]);

  return (
    <button
      onClick={handleClick}
      className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
    >
      {buttonText}
    </button>
  );
};

export default AddToCartButton;
