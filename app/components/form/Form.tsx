import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
  name: string;
  handleSubmit: (e: any) => void;
};

const Form = ({ children, name, handleSubmit }: Props) => {
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (handleSubmit) handleSubmit(e);
  };

  return (
    <>
      <h1 className='text-3xl font-semibold text-gray-800 mb-6'>{name}</h1>
      <form onSubmit={handleFormSubmit} className='space-y-4'>
        {children}
      </form>
    </>
  );
};

export default Form;
