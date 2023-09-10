'use client';
import dynamic from 'next/dynamic';
import CarrouselItem from './CarrouselItem';
import { IProduct } from '@/helpers/types';
const ScrollCarousel = dynamic(() => import('scroll-carousel-react'), {
  ssr: false,
});

const FeaturedItemsCarousel = ({ products }: { products: IProduct[] }) => {
  return (
    <ScrollCarousel autoplay>
      {products?.map(({ id, name, image, imgWidth, imgHeight, price }) => (
        <CarrouselItem
          key={id}
          name={name}
          image={image}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          price={price}
        />
      ))}
    </ScrollCarousel>
  );
};

export default FeaturedItemsCarousel;
