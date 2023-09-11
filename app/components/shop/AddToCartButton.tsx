'use client';
import { addOneToCart, hasOnCookiesAlready } from '@/helpers/cookiesHelper';
import { IProduct } from '@/helpers/types';
import { useState, useEffect } from 'react';
import Button from '../generalElements/Button';

const AddToCartButton = ({ product }: { product: IProduct }) => {
  const { name, price, image, imgWidth, imgHeight } = product;
  const [buttonText, setButtonText] = useState<string>('Add to Cart');

  const handleClick = () => {
    if (buttonText !== 'Already selected') {
      addOneToCart(name, price, image, imgWidth, imgHeight, 'cart');
      setButtonText('Already selected');
    }
  };

  useEffect(() => {
    setButtonText(
      hasOnCookiesAlready(name, 'cart') ? 'Already selected' : 'Add to Cart'
    );
  }, [name]);

  return <Button onClick={handleClick}>{buttonText}</Button>;
};

export default AddToCartButton;
