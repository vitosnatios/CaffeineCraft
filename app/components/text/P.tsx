import React, { ReactNode } from 'react';

type Props = { children: ReactNode };

const P = ({ children }: Props) => {
  return <p className='text-lg text-gray-600'>{children}</p>;
};

export default P;
