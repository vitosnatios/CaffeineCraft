import React from 'react';

type Props = {};

const PrivacyPage = (props: Props) => {
  return (
    <div className='container mx-auto py-8 bg-gray-100'>
      <h1 className='text-3xl font-semibold text-gray-800 mb-4'>
        Privacy Policy
      </h1>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <p className='text-gray-700'>
          At CaffeineCraft, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard your data when you
          visit our website.
        </p>
        <h2 className='text-xl font-semibold mt-4 mb-2'>
          Information We Collect
        </h2>
        <p className='text-gray-700'>
          We may collect personal information, including but not limited to your
          name, email address, and age, when you interact with our website or
          subscribe to our services.
        </p>
        <h2 className='text-xl font-semibold mt-4 mb-2'>
          How We Use Your Information
        </h2>
        <p className='text-gray-700'>
          We use the information you provide to enhance your experience on our
          website, process your orders, and communicate with you. We do not
          share your personal information with third parties unless required by
          law.
        </p>
        <h2 className='text-xl font-semibold mt-4 mb-2'>Data Security</h2>
        <p className='text-gray-700'>
          We take data security seriously and implement industry-standard
          measures to protect your personal information. However, please be
          aware that no online transmission or storage method is completely
          secure.
        </p>
        <h2 className='text-xl font-semibold mt-4 mb-2'>
          Updates to This Policy
        </h2>
        <p className='text-gray-700'>
          We may update our Privacy Policy to reflect changes in our practices
          or for legal reasons. Please review this policy periodically for any
          updates.
        </p>
        <p className='text-gray-700 mt-4'>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at
          <a
            href='mailto:vitosdeveloper@gmail.com'
            className='text-blue-500 hover:underline'
          >
            vitosdeveloper@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
