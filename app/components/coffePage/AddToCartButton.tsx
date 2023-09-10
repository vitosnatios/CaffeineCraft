'use client';
import { addOneToCart, hasOnCookiesAlready } from '@/helpers/cookiesHelper';
import { IProduct } from '@/helpers/types';
import Link from 'next/link';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

const AddToCartButton = ({ coffee }: { coffee: IProduct }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [buttonText, setButtonText] = useState<string>('Add to Cart');

  const { name, price, image, imgWidth, imgHeight } = coffee;
  const total = price * quantity;

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addOneToCart(name, price, image, imgWidth, imgHeight, 'cart', quantity);
    updateButton();
  };

  const updateButton = useCallback(() => {
    const isAlreadyOnCart = hasOnCookiesAlready(name, 'cart');
    setButtonText(isAlreadyOnCart ? 'Already selected' : 'Add to Cart');
  }, [name]);

  useEffect(() => {
    updateButton();
  }, [updateButton]);

  return buttonText === 'Add to Cart' ? (
    <>
      <p className='text-xl font-semibold text-gray-800 mb-4'>
        Price: ${total.toFixed(2)}
      </p>
      <div className='flex items-center space-x-4'>
        <input
          type='number'
          value={quantity}
          onChange={handleQuantityChange}
          className='w-16 border rounded-md p-1 text-center'
        />
        <button
          onClick={handleAddToCart}
          className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
        >
          {buttonText}
        </button>
      </div>
    </>
  ) : (
    <Link href='/cart'>
      <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>
        {buttonText}
      </button>
    </Link>
  );
};

export default AddToCartButton;
