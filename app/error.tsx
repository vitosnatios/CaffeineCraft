'use client';
import Link from 'next/link';
import React from 'react';
import Button from './components/generalElements/Button';
import Image from 'next/image';

export default function Error({ error }: { error: Error }) {
  return (
    <div className='flex flex-col items-center justify-center self-center gap-2 px-4 py-8 border-8 border-red-400 rounded-lg'>
      <Image
        className='w-40'
        src='/error.png'
        width={512}
        height={512}
        alt='error'
      />
      <div className='text-red-400 text-center'>
        <h1 className='text-4xl font-semibold mb-2'>{error.message}</h1>
      </div>
      <Link
        className='text-blue-400 text-lg font-medium hover:underline'
        href='/'
      >
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
