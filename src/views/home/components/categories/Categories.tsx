import React from 'react';
import Card from './Card';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';

type CategoriesProps = {
  
};

const Categories:React.FC<CategoriesProps> = ({
  categories,
}: any) => {
  
  return (
    <div
    
    >
      <Carousel
        withIndicators
        height={250}
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
        categories && categories.length
        ? (
          categories.map((cat: any) => {
            
            return (
              <Carousel.Slide
              key={cat.id}
              >
                <Card
                cat={cat}
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
export default Categories;