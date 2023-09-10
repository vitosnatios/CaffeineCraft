import { deleteFromCart, getCookies } from '@/helpers/cookiesHelper';
import { ICartProduct } from '@/helpers/types';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  product: ICartProduct;
  handleQuantityChange: (itemName: string, newQuantity: number) => void;
  setCartItems: Dispatch<SetStateAction<[] | ICartProduct[]>>;
  itemStartingQuantity: number;
};

const CartItem = ({
  product,
  handleQuantityChange,
  setCartItems,
  itemStartingQuantity,
}: Props) => {
  const { name, price, image, imgHeight, imgWidth } = product;

  return (
    <li className='bg-white p-4 rounded-lg shadow-md flex items-center'>
      <Link href={`/coffee/${image}`}>
        <Image
          src={`/coffees/${image}.jpg`}
          alt={name}
          width={imgWidth}
          height={imgHeight}
          className='h-40 w-40 rounded-md'
        />
      </Link>
      <div className='ml-4'>
        <Link href={`/coffee/${image}`}>
          <h3 className='text-lg font-semibold'>{name}</h3>
        </Link>
        <p className='text-gray-600'>Price: ${price.toFixed(2)}</p>

        <div className='flex items-center space-x-2'>
          <input
            type='number'
            value={itemStartingQuantity}
            onChange={(e) =>
              handleQuantityChange(name, parseInt(e.target.value))
            }
            className='w-16 border rounded-md p-1 text-center'
          />
          <button
            onClick={(e) => {
              deleteFromCart(name, 'cart');
              setCartItems(getCookies('cart'));
            }}
            className='text-red-500 hover:text-red-700 focus:outline-none'
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;