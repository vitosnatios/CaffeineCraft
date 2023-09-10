'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ICartProduct } from '@/helpers/types';
import { deleteFromCart, getCookies } from '@/helpers/cookiesHelper';
import CartItem from '../components/cart/CartItem';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<ICartProduct[] | []>([]);

  const handleQuantityChange = (itemName: string, newQuantity: number) => {};

  useEffect(() => {
    setCartItems(getCookies('cart'));
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.price * 1, 0);

  return (
    <section className='bg-gray-100 py-8 px-4 md:px-16 min-h-screen'>
      <h1 className='text-3xl font-semibold text-gray-800 mb-4'>Your Cart</h1>
      <ul className='grid gap-5 md:grid-cols-1 lg:grid-cols-2'>
        {cartItems.map((product, index) => (
          <CartItem
            key={index}
            product={product}
            handleQuantityChange={handleQuantityChange}
            setCartItems={setCartItems}
          />
        ))}
      </ul>
      {cartItems.length ? (
        <>
          <p className='text-xl mt-4'>Total: ${total.toFixed(2)}</p>
          <Link href='/payment'>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 focus:outline-none'>
              Proceed to Checkout
            </button>
          </Link>
        </>
      ) : (
        <Link href='/shop'>
          <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 focus:outline-none'>
            You haven&apos;t pick anything yet
          </button>
        </Link>
      )}
    </section>
  );
};

export default CartPage;
