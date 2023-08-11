import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';

type MegaListProps = {
  category: any,
};

const MegaList:React.FC<MegaListProps> = ({
  category,
}) => {
  
  return (
    <div
    className='
    flex flex-col gap-4
    p-6
    border-l-2
    '
    >
      {/* head */}
      <div
      className='
      flex flex-col gap-3
      '
      >
        <div
        className='
        relative aspect-square h-28 w-28 
        rounded-md overflow-hidden
        '
        >
          <Image
          className='
          object-cover
          '
          src={category.image}
          alt={category.name}
          fill
          />
        </div>
        <Link
        className='
        flex gap-2 items-center
        border rounded-full py-1 px-3 
        self-start
        hover:bg-gray-300
        transition-all
        '
        href={''}
        >
        {category.name}
        <HiArrowLongLeft/>
        </Link>
      </div>

      {/* subs */}
      <div
      className='
      flex flex-col gap-3
      text-right
      '
      >
        {
          category.subCats && category.subCats.length
          ? (
            category.subCats.map((x, i) => {
              return (
                <Link
                className='
                text-sm text-gray-600 font-thin
                hover:underline decoration-rose-600 decoration-2
                '
                href={''}
                key={i}
                >
                {x}
                </Link>
              )
            })
          ): ('')
        }
      </div>
    </div>
  )
}
export default MegaList;