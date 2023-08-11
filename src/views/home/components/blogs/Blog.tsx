import { formatDate } from '@/utils/helpers';
import Image from 'next/image';
import React from 'react';

type BlogProps = {
  
};

const Blog:React.FC<any> = ({
  item
}: any) => {
  
  return (
    <div
    className='
    flex flex-col gap-2
    '
    /* style={{
      width: 'fit-content'
    }} */
    >
      {/* image */}
      <div
      className='
      relative
      h-full w-full max-h-56
      rounded-md overflow-hidden
      aspect-square max-h-80
      '
     
      >
        <Image
        className='
        object-cover
        '
        src={item.image}
        alt={item.title}
        fill
        />
      </div>
      <div
      className='
      flex flex-col gap-2 text-right
      '
      >
        <p
        className='
        text-sm text-gray-500
        '
        >
          {item.category}
        </p>
        <h2
        className='
        text-lg font-bold text-slate-600
        whitespace-pre-wrap
        '
        >
          {item.title}
        </h2>
        <div
        className='
        flex gap-3 
        text-sm text-gray-400
        '
        >
          <span>
            {item.author}-
          </span>
          <span>
            3 نظر
          </span>
          <span>
            {formatDate(item.createdAt)}
          </span>
        </div>
      </div>
    </div>
  )
}
export default Blog;