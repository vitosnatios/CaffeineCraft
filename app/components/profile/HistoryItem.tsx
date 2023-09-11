import React from 'react';

type Props = { prod: { name: string; price: number; quantity: number } };

const HistoryItem = ({ prod }: Props) => {
  const { name, price, quantity } = prod;
  return (
    <div className='p-3 bg-white shadow-md'>
      <div className='flex justify-between items-center'>
        <span className='text-xl'>{name}</span>
        <span className='text-gray-500 text-sm'>
          R${price.toFixed(2)} x{quantity} = R$
          {(price * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default HistoryItem;
