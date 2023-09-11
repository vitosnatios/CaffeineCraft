import React from 'react';

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div className='bg-gray-100 p-8'>
      <h1 className='text-3xl font-semibold text-gray-800 mb-4'>Contact Us</h1>
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
    </div>
  );
};

export default ContactPage;
