'use client';
import { AddToCart, hasOnCookiesAlready } from '@/helpers/cookiesHelper';
import { IProduct } from '@/helpers/types';
import { useState, useEffect } from 'react';

const AddToCartButton = ({ product }: { product: IProduct }) => {
  const { name, price, image, imgWidth, imgHeight } = product;
  const [buttonText, setButtonText] = useState<string>('Add to Cart');

  const handleClick = () => {
    if (buttonText !== 'Already selected') {
      AddToCart(name, price, image, imgWidth, imgHeight, 'cart');
      setButtonText('Already selected');
    }
  };

  useEffect(() => {
    setButtonText(
      hasOnCookiesAlready(name, 'cart') ? 'Already selected' : 'Add to Cart'
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
