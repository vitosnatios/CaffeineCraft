import React from 'react';
import Title from '../components/text/Title';
import SectionContainer from '../components/container/SectionContainer';

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <SectionContainer>
      <Title>Contact Us</Title>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-xl font-semibold mb-2'>Get in Touch</h2>
        <p className='text-gray-700'>
          Feel free to reach out to us if you have any questions, suggestions,
          or just want to chat about coffee. Here are the best ways to contact
          us:
        </p>
        <ul className='list-disc list-inside mt-4'>
          <li className='text-gray-700'>
            <a
              href='https://www.linkedin.com/in/vitosnatios/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              LinkedIn
            </a>
          </li>
          <li className='text-gray-700'>
            <a
              href='https://github.com/vitosnatios'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              GitHub
            </a>
          </li>
          <li className='text-gray-700'>
            Email:{' '}
            <a
              href='mailto:vitosdeveloper@gmail.com'
              className='text-blue-500 hover:underline'
            >
              vitosdeveloper@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
};

export default ContactPage;
