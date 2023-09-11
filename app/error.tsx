'use client';
import Link from 'next/link';
import React from 'react';
import Button from './components/generalElements/Button';

export default function Error({ error }: { error: Error }) {
  return (
    <div className='flex flex-col items-center justify-center self-center mt-20'>
      <div className='text-red-400 text-center'>
        <h1 className='text-4xl font-semibold mb-2'>
          Oops! Something went wrong.
        </h1>
        <p className='text-lg'>{error.message}</p>
      </div>
      <div className='mt-8'>
        <Link
          className='text-blue-400 text-lg font-medium hover:underline'
          href='/'
        >
          <Button trigger>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
