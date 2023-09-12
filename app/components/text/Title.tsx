import React, { ReactNode } from 'react';

type Props = { children: ReactNode };

const Title = ({ children }: Props) => {
  return (
    <h1 className='text-3xl font-semibold text-gray-800 mb-4'>{children}</h1>
  );
};

export default Title;
