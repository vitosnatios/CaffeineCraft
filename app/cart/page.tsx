'use client';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { ICartProduct } from '@/helpers/types';
import { changeQuantityFromAItem, getCookies } from '@/helpers/cookiesHelper';
import CartItem from '../components/cart/CartItem';
import { useGlobalContext } from '../context/GlobalContext';
import Button from '../components/generalElements/Button';
import Title from '../components/text/Title';
import SectionContainer from '../components/container/SectionContainer';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<ICartProduct[] | []>([]);
  const [itensQuantity, setItensQuantity] = useState<{
    [key: string]: number;
  }>();
  const { loggedIn } = useGlobalContext();

  const setQuantityAndCartItens = useCallback(() => {
    const coffees = getCookies('cart');
    setCartItems(coffees);
    coffees.forEach(({ name, quantity }) => {
      setItensQuantity((prev) => {
        return { ...prev, [name]: quantity };
      });
    });
  }, []);

  const handleQuantityChange = useCallback(
    (itemName: string, newQuantity: number) => {
      if (newQuantity == 0) return;
      changeQuantityFromAItem(itemName, 'cart', newQuantity);
      setItensQuantity((prev) => ({
        ...prev,
        [itemName]: newQuantity,
      }));
    },
    []
  );

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * itensQuantity![item.name],
    0
  );

  useEffect(() => setQuantityAndCartItens(), [setQuantityAndCartItens]);

  return (
    <SectionContainer>
      <Title>Your Cart</Title>
      <ul className='grid gap-5 md:grid-cols-1 lg:grid-cols-2'>
        {cartItems.map((product, index) => (
          <CartItem
            key={index}
            product={product}
            handleQuantityChange={handleQuantityChange}
            setCartItems={setCartItems}
            itemStartingQuantity={itensQuantity![product.name]}
          />
        ))}
      </ul>
      {cartItems.length ? (
        <>
          <p className='text-xl mt-4'>Total: R${total.toFixed(2)}</p>
          {loggedIn ? (
            <Link href='/checkout'>
              <Button>Proceed to checkout</Button>
            </Link>
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
    </SectionContainer>
  );
};

export default CartPage;
