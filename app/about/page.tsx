import React from 'react';
import Title from '../components/text/Title';
import SectionContainer from '../components/container/SectionContainer';

const AboutPage = () => {
  return (
    <SectionContainer>
      <Title>About Us</Title>
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-xl font-semibold mb-2'>Our Story</h2>
        <p className='text-gray-700'>
          At CaffeineCraft, we are passionate about bringing you the finest
          coffee experiences from around the world. Our journey started with a
          love for coffee and a desire to share that passion with coffee
          enthusiasts like you.
        </p>
        <p className='text-gray-700 mt-4'>
          We source the highest-quality coffee beans, roast them to perfection,
          and deliver them right to your doorstep. Every cup of CaffeineCraft
          coffee is a journey of flavors, aromas, and memories waiting to be
          brewed.
        </p>
      </div>
      <div className='bg-white rounded-lg shadow-md p-6 mt-6'>
        <h2 className='text-xl font-semibold mb-2'>Our Mission</h2>
        <p className='text-gray-700'>
          Our mission is to provide you with an exceptional coffee experience.
          We believe that the perfect cup of coffee can brighten your day, and
          we&apos;re here to make that happen.
        </p>
        <p className='text-gray-700 mt-4'>
          We are committed to sustainability, ethical sourcing, and supporting
          coffee-growing communities. By choosing CaffeineCraft, you&apos;re not
          only enjoying great coffee but also making a positive impact on the
          world of coffee.
        </p>
      </div>
    </SectionContainer>
  );
};

export default AboutPage;
