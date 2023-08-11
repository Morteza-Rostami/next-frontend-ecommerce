import AddCartBtn from '@/components/AddCartBtn';
import FullScreenWish from '@/components/FullScreenWish';
import { calcDiscount } from '@/utils/helpers';
import { Group, Rating } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type SpecialProps = {
  
};

const Special:React.FC<any> = ({
  item
}: any) => {
  
  return (
    <div
    className='
    relative
    flex flex-col gap-2 items-center justify-between
    bg-slate-50
    text-center
    rounded-md
    '
    >
      <Link
      href={`/products/${item.slug}?cat=${item.category}`}
      className='
      grid place-items-center
      relative
      h-full w-full text-center
      '
      >
        <Image
        src={item.image}
        alt={item.name}
        width={180}
        height={160}
        />
      </Link>

      {/* footer */}
      <div
      className='
      flex flex-col gap-2
      p-4
      '
      >
        <p
        className='
        flex gap-3 items-center justify-center

        '
        >
          <span
          className='
          text-rose-700 text-lg font-bold
          '
          >
            ${item.price}
          </span>
          <span
          className='
          text-sm text-gray-500
          line-through
          '
          >
            ${calcDiscount(item.price, item.discount)}
          </span>
        </p>
        <Link
        className='
        hover:text-blue-600
        '
        href={`/products/${item.slug}?cat=${item.category}`}
        >
          {item.name}
        </Link>
        <p
        
        >
          {item.inStock ? <span
          className='
          text-green-500 text-sm font-thin
          '
          >موجود</span> : <span
          className='
          text-rose-500 text-sm font-thin
          '
          >ناموجود</span>}
        </p>

        {/* rating */}
        <Group position="center">
          <Rating value={3.5} fractions={2} readOnly />
        </Group>

        <p
        className='
        flex items-center justify-center gap-2
        '
        >
          <span
          className='
          text-slate-800
          '
          >
            {item.inStock}
          </span>
          <span
          className='
          text-sm text-gray-500 font-thin
          '
          >
            محصول موجود است
          </span>
        </p>

        {/* <AddCartBtn
        tail={`bg-rose-600 hover:bg-rose-500`}
        product={item}
        /> */}
      </div>
      <FullScreenWish/>
    </div>
  )
}
export default Special;