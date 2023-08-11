import React from 'react';
import PhotoArea from './PhotoArea';
import Shopping from './Shopping';
import { Group, Rating } from '@mantine/core';

type ShoppingCardProps = {
  product: any,
  slug: string,
};

const ShoppingCard:React.FC<ShoppingCardProps> = ({
  product,
  slug,
}) => {
  
  //console.log('product----:: ', product);
  return (
    <div
    className='
    flex flex-col gap-6

    bg-white
    rounded-md p-4
    '
    >
      {/* head */}
      <div
      className='
      flex flex-col gap-3
      '
      >
        <h1
        className='
        text-xl
        md:text-3xl
        '
        >
          {product.name}
        </h1>
        <div
        className='
        flex items-center gap-2
        '
        >
          <span
          className='
          leading-none
          text-sm text-gray-600
          '
          >
            نظرات ۱
          </span>
          <Group position="center">
            <Rating 
            size={'xs'}
            value={3} 
            fractions={2} 
            readOnly />
          </Group>
        </div>
      </div>

      {/* image & shopping area */}
      <div
      className='
      grid gap-10
      grid-cols-5
      
      w-full
      '
      >
        <PhotoArea
        product={product}
        slug={slug}
        />
        <Shopping
        product={product}
        />
      </div>
    </div>
  )
}
export default ShoppingCard;