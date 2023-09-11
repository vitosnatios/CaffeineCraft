import React from 'react';
import { getUserByJwt } from '../database/user/getUserByJwt';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { isCartProduct } from '@/helpers/isProduct';
import { ICartProduct } from '@/helpers/types';
import Link from 'next/link';
import Button from '../components/generalElements/Button';
import { buyCoffees } from '@/helpers/buyCoffees';
import { redirect } from 'next/navigation';
import CheckoutItem from '../components/checkout/CheckoutItem';

const CheckoutPage = async () => {
  const user = await getUserByJwt();
  const carCache = cookies().get('cart');

  if (
    !carCache ||
    ('value' in carCache && !carCache.value) ||
    (Array.isArray(carCache) && !carCache.length)
  ) {
    new Error('Yor cart is empty.');
  }
  if (!user) throw new Error('You are not logged in.');
  const cartItems = [...JSON.parse(carCache!.value)].filter(isCartProduct);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleBuy = async () => {
    'use server';
    const res = await buyCoffees(cartItems, totalPrice);
    if (res) {
      cookies().delete('cart');
      redirect('/profile');
    }
  };

  return (
    <div className='bg-gray-100 py-8 px-4 md:px-16 min-h-screen'>
      <h1 className='text-3xl font-semibold text-gray-800 mb-4'>Checkout</h1>
      <div className='grid gap-4 md:grid-cols-2'>
        {cartItems.map((item: ICartProduct, index: number) => (
          <CheckoutItem key={index} item={item} />
        ))}
      </div>
      <div className='mt-8 text-xl font-semibold text-gray-800'>
        Total Price: R${totalPrice}
      </div>
      <div className='mt-8'>
        <form action={handleBuy}>
          <Button>Proceed to Payment (Buy)</Button>
        </form>
        <a href='/' className='ml-4 text-gray-600 hover:text-blue-500'>
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default CheckoutPage;
