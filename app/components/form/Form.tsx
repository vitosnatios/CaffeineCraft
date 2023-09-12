import { FormEvent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  name: string;
  onSubmit: (e: FormEvent<Element>) => any;
};

const Form = ({ children, name, onSubmit }: Props) => {
  return (
    <>
      <h1 className='text-3xl font-semibold text-gray-800 mb-6'>{name}</h1>
      <form onSubmit={onSubmit} className='space-y-4'>
        {children}
      </form>
    </>
  );
};

export default Form;
