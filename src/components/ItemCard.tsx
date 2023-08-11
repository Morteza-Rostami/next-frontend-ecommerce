import { calcDiscount } from '@/utils/helpers';
import { Group, Rating } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import { HiArrowsPointingOut } from 'react-icons/hi2';
import AddCartBtn from './AddCartBtn';
import DiscountBadge from './DiscountBadge';
import FullScreenWish from './FullScreenWish';

type ItemCardProps = {
};

const ItemCard:React.FC<any> = ({
  item,
  bg,
}: any) => {
  
  return (
    <div
    className={`
    ${bg}
    relative
    flex flex-col gap-2 #h-full items-center justify-between
    text-center
    p-4
    flex-initial
    #w-40
    bg-gray-50 rounded-md overflow-hidden
    group
    `}
    >
      {/* image */}
      <Link
      href={`/products/${item.slug}?cat=${item.category}`}
      className='
      block
      h-48 aspect-square w-full min-h-fit
      relative max-w-xs
      '
      
      >
        <Image
        className='
        object-cover
        '
        src={item.image}
        alt={item.name}
        fill
        />
        
      </Link>

      {/* footer */}
      <div
      className='
      flex flex-col items-center w-full gap-2 
      z-20 text-center
      lg:items-start lg:text-right
      '
      >
        <Link
        className='
        hover:text-blue-600 text-lg
        '
        href={`/products/${item.slug}?cat=${item.category}`}
        >
        {item.name}
        </Link>
        <p>
          {
          item.inStock 
          ? <span className='text-green-500 text-sm'>موجود</span> 
          : <span className='text-rose-500 text-sm'>ناموجود</span>
          } 
        </p>
        <Group position="center">
        <Rating value={3.5} fractions={2} readOnly />
        </Group>
        
        <p
        className='
        flex gap-3 items-center justify-center

        '
        >
        <span
        className='
        text-lg text-rose-600 font-bold
        '
        >
          ${item.price}
        </span>
        <span
        className='
        line-through text-gray-600
        '
        >
          ${calcDiscount(item.price, item.discount)}
        </span>
        </p>

        {/* add to card */}
        {/* <AddCartBtn
        tail={'bg-blue-700 hover:bg-blue-600'}
        product={item}
        /> */}
      </div>
      
      {/* discount badge */}
      <DiscountBadge/>

      {/* fullscreen and wishlist */}
      <FullScreenWish/>
    </div>
  )
}
export default ItemCard;