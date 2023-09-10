import { deleteFromCart, getCookies } from '@/helpers/cookiesHelper';
import { ICartProduct } from '@/helpers/types';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  product: ICartProduct;
  handleQuantityChange: (itemName: string, newQuantity: number) => void;
  setCartItems: Dispatch<SetStateAction<[] | ICartProduct[]>>;
};

const CartItem = ({ product, handleQuantityChange, setCartItems }: Props) => {
  const { name, price, quantity, image, imgHeight, imgWidth } = product;

  return (
    <li className='bg-white p-4 rounded-lg shadow-md flex items-center'>
      <Image
        src={`/coffes/${image}.jpg`}
        alt={name}
        width={imgWidth}
        height={imgHeight}
        className='h-40 w-40 rounded-md'
      />
      <div className='ml-4'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='text-gray-600'>Price: ${price}</p>
        <div className='flex items-center space-x-2'>
          <input
            type='number'
            value={quantity} // Use the actual quantity here
            onChange={(e) =>
              handleQuantityChange(name, parseInt(e.target.value))
            }
            className='w-16 border rounded-md p-1 text-center'
          />
          <button
            onClick={() => {
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
