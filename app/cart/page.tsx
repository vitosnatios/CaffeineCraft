'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ICartProduct } from '@/helpers/types';
import { changeQuantityFromAItem, getCookies } from '@/helpers/cookiesHelper';
import CartItem from '../components/cart/CartItem';
import { useGlobalContext } from '../context/GlobalContext';
import Button from '../components/generalElements/Button';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<ICartProduct[] | []>([]);
  const [itensQuantity, setItensQuantity] = useState<{
    [key: string]: number;
  }>();
  const { loggedIn } = useGlobalContext();

  const handleQuantityChange = (itemName: string, newQuantity: number) => {
    if (newQuantity == 0) return;
    changeQuantityFromAItem(itemName, 'cart', newQuantity);
    setQuantityAndCartItens();
  };

  const setQuantityAndCartItens = () => {
    const coffees = getCookies('cart');
    setCartItems(coffees);
    coffees.forEach(({ image, quantity }) => {
      setItensQuantity((prev) => {
        return { ...prev, [image]: quantity };
      });
    });
  };

  useEffect(() => setQuantityAndCartItens(), []);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * itensQuantity![item.image],
    0
  );

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
            itemStartingQuantity={itensQuantity![product.image]}
          />
        ))}
      </ul>
      {cartItems.length ? (
        <>
          <p className='text-xl mt-4'>Total: ${total.toFixed(2)}</p>
          {loggedIn ? (
            <a href='/checkout'>
              <Button>Proceed to checkout</Button>
            </a>
          ) : (
            <Link href='/auth/login'>
              <Button>
                You need to be logged in to perform this operation
              </Button>
            </Link>
          )}
        </>
      ) : (
        <Link href='/shop'>
          <Button>You haven&apos;t pick anything yet</Button>
        </Link>
      )}
    </section>
  );
};

export default CartPage;
