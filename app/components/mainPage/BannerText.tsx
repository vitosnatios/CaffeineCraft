import React from 'react';
import Title from '../text/Title';
import P from '../text/P';
import Link from 'next/link';
import Button from '../generalElements/Button';

const BannerText = () => {
  return (
    <div className='pr-4 flex flex-col items-start gap-2'>
      <Title>Welcome to CaffeineCraft</Title>
      <P>
        Discover the world&apos;s finest coffeee beans and brew your perfect cup
        of coffeee.
      </P>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsa cum
        nobis vero voluptates possimus non optio corrupti atque quae
        necessitatibus id veritatis laudantium porro dolorem repellendus
        dolores, veniam facilis?
      </P>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed unde
        adipisci ullam, distinctio dolorem, nesciunt, dolor eius ea id rem fugit
        exercitationem totam natus aliquid voluptates reiciendis. Soluta, iste.
      </P>
      <Link href='/shop'>
        <Button>Shop Now</Button>
      </Link>
    </div>
  );
};

export default BannerText;
