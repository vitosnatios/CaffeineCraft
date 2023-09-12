import React, { ReactNode } from 'react';

type Props = { children: ReactNode };

const AuthContainer = ({ children }: Props) => {
  return (
    <div className='bg-gray-100 flex flex-col py-20 px-4 items-center'>
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
