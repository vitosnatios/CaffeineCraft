import { useGlobalContext } from '@/app/context/GlobalContext';
import dynamic from 'next/dynamic';
import Image from 'next/image';
// import ScrollCarousel from 'scroll-carousel-react';
const ScrollCarousel = dynamic(() => import('scroll-carousel-react'), {
  ssr: false,
});

const FeaturedItemsCarousel = () => {
  const { products } = useGlobalContext();

  return (
    <ScrollCarousel autoplay autoplaySpeed={8} speed={7}>
      {products.map(({ id, name, image, imgWidth, imgHeight, price }) => (
        <div key={id}>
          <div className='h-60 overflow-hidden bg-black'>
            <Image
              width={imgWidth}
              height={imgHeight}
              src={`/coffes/${image}.jpg`}
              alt={name}
              className='relative bottom-60'
            />
          </div>
          <div className='flex justify-between'>
            <span>{name}</span>
            <span>{price}R$/kg</span>
          </div>
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default FeaturedItemsCarousel;
