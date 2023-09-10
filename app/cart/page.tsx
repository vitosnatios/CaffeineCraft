'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const CartPage = () => {
  // const [cartItems, setCartItems] = useState<any[]>([]);

  const handleDeleteItem = (itemId: number) => {
    const updatedCart = cartItems.filter((item: any) => item.id !== itemId);
    // setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    const updatedCart = cartItems.map((item: any) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    // setCartItems(updatedCart);
    window.localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') as string) || [];
    // setCartItems(cartData);
  }, []);

  const cartItems = useGlobalContext().products;

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * 1, //esse 1 seria o no cart item.quantity
    0
  );

  return (
    <section className='bg-gray-100 py-8 px-4 md:px-16'>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <Image
              src={`/coffes/${item.image}.jpg`}
              alt={item.name}
              width='100'
              height='100'
            />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <input
              type='number'
              value={1} //item.quantity
              onChange={(e) =>
                handleQuantityChange(item.id, parseInt(e.target.value))
              }
            />
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <Link href="/payment'">
        <button>Proceed to Checkout</button>
      </Link>
    </section>
  );
};

export default CartPage;
