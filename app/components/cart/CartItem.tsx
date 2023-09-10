import Image from 'next/image';
import React from 'react';

type Props = {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
  handleDeleteItem: (itemId: number) => void;
  handleQuantityChange: (itemId: number, newQuantity: number) => void;
};

const CartItem = ({ item, handleQuantityChange, handleDeleteItem }: Props) => {
  return (
    <li key={item.id}>
      <Image
        src={`/coffes/${item.image}.jpg`}
        alt={item.name}
        width='150'
        height='150'
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
  );
};

export default CartItem;
