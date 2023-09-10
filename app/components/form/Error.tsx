import Link from 'next/link';
import React from 'react';

type Props = { message: string };

const Error = ({ message }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-lg text-red-500'>{message}</p>
    </div>
  );
};

export default Error;
