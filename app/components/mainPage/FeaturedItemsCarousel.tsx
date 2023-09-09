'use client';
import Image from 'next/image';
import ScrollCarousel from 'scroll-carousel-react';

const FeaturedItemsCarousel = () => {
  const featuredItems = [
    { id: 1, title: 'Item 1', imageUrl: '/coffe-banner.webp' },
    { id: 2, title: 'Item 2', imageUrl: '/coffe-banner.webp' },
    { id: 3, title: 'Item 3', imageUrl: '/coffe-banner.webp' },
  ];

  return (
    <ScrollCarousel autoplay autoplaySpeed={8} speed={7}>
      {featuredItems.map((item) => (
        <div key={item.id}>
          <Image
            width='500'
            height='500'
            src={item.imageUrl}
            alt={item.title}
          />
          <p className='legend'>{item.title}</p>
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default FeaturedItemsCarousel;
