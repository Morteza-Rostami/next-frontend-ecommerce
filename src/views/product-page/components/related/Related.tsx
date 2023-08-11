import ItemCard from '@/components/ItemCard';
import { useEffectOnce } from '@/hooks/useEffectOnce';
import { useDisGetProducts, useSelProducts } from '@/store/product.store';
import { getRandomSlice } from '@/utils/helpers';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import React, { useEffect, useMemo, useRef, useState } from 'react';

type RelatedProps = {
  
};

const Related:React.FC<RelatedProps> = () => {
  const getProducts = useDisGetProducts();
  const products = useSelProducts();
  const [relateds, setRelateds] = useState<any>([]);

  useEffectOnce(() => {
    getProducts();
  });

  /* const relateds = useMemo(() => {
    if (products) {
      const arr = getRandomSlice(products, 8);
      return arr;
    }
    return;
  }, [products]); */

  useEffect(() => {
    if (products) {
      const arr = getRandomSlice(products, 8);
      setRelateds(arr);
    }
  }, [products]);

  if (!relateds) return <></> 

  return (
    <div>
      {/* head */}
      <div
      className='
      mb-2
      '
      >
        <h2>
          کالاهای مشابه
        </h2>  
      </div>

      <Carousel
        withIndicators
        height={370}
        slideSize="20%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: 'xl', slideSize: '25%' },
          { maxWidth: 'lg', slideSize: '30%' },
          { maxWidth: 'md', slideSize: '40%' },
          { maxWidth: 'sm', slideSize: '50%'},
          { maxWidth: 'xs', slideSize: '100%', slideGap: 0 },
        ]}

        styles={{
          indicator: {
            width: rem(12),
            height: rem(4),
            transition: 'width 250ms ease',
  
            '&[data-active]': {
              width: rem(40),
            },
            backgroundColor: 'black',
            
          },
        }}
      >
        {
        relateds && relateds.length
        ? (
          relateds.map((item) => {
            
            return (
              <Carousel.Slide
              key={item.id}
              >
               <ItemCard
               bg={'bg-white'}
               item={item}
               key={item.id}
               />
              </Carousel.Slide>
            )
          })
        )
        : ('')
        }
      </Carousel>
    </div>
  )
}
export default Related;