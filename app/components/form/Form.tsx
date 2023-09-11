import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
  name: string;
  action: (formdata: FormData) => any;
};

const Form = ({ children, name, action }: Props) => {
  return (
    <>
      <h1 className='text-3xl font-semibold text-gray-800 mb-6'>{name}</h1>
      <form action={action} className='space-y-4'>
        {children}
      </form>
    </>
  );
};

export default Form;
