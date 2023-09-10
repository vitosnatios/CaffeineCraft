import React, { ReactElement } from 'react';

type Props = { children: ReactElement };

const AuthContainer = ({ children }: Props) => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col pt-20 items-center'>
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
