import { ReactNode } from 'react';

type Props = { children: ReactNode };

const SectionContainer = ({ children }: Props) => {
  return (
    <section className='container mx-auto bg-gray-100'>{children}</section>
  );
};

export default SectionContainer;
