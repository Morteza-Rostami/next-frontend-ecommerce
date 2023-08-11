import { fake } from '@/config/faker';
import { useEffectOnce } from '@/hooks/useEffectOnce';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type LinkListProps = {
  
};

const LinkList:React.FC<any> = ({
  link
}) => {
  

  return (
    <div
    >
      <h2
      className='
      mb-6 text-slate-700 font-bold
      '
      >
      {link.head}
      </h2>
      <ul>
      {
        link.items.length
        ? (
          link.items.map((item: any, i: any) => {
            return (
              <li
              key={i}
              >
              <Link
              className='
              text-sm text-gray-500 font-thin
              hover:underline
              '
              href={''}
              >
                {item}
              </Link>
              </li>
            )
          })
        ): ('')
      }
      </ul>
    </div>
  )
}
export default LinkList;