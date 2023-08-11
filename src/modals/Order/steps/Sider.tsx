import { Carousel } from '@mantine/carousel';
import { useEffect, useRef, useState } from 'react';

function Slider({
  activeOption,
  setActiveOption,
  items,
}: any) {
  const refBack = useRef(false)
  const refNext = useRef(false)

  useEffect(() => {
    console.log(items)
    console.log(activeOption)
    console.log(items[activeOption])

    if (activeOption > 0) {
      refBack.current = true;
    } else {
      refBack.current = false;
    }

    if (activeOption < items.length - 1) {
      refNext.current = true;
    } else {
      refNext.current = false;
    }

  }, [activeOption])
  return (
    <Carousel 
      className='
      bg-orange-200
      '
      //maw={320} 
      //mx="auto" 
      //withIndicators 
      height={200}
      align={'center'}
      slideGap={'md'}
      //loop
      onNextSlide={() => {

        if (!refNext.current) return;
        setActiveOption((i: any) => i + 1);
        console.log('next')
      }}
      onPreviousSlide={() => {
        if (!refBack.current) return; 
        setActiveOption((i: any) => i - 1);
        console.log('back');
      }}
      draggable={false}
      controlSize={40}
      //activeSlide={activeSlide}
    >
      {
        items && items.length
        ? (
          items.map((item: any, inx: number) => {
            return (
              <Carousel.Slide 
              className='
              bg-blue-100
              flex items-center justify-center
              w-full h-full
              '
              key={item?._id || inx}>
                <h2
                className='
                font-bold text-4xl
                '
                >
                  {item}
                </h2>
              </Carousel.Slide>
            ) 
          })
        )
        : ('')
      }  
    </Carousel>
  );
}

export default Slider;